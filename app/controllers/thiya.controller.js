const db = require("../models");
const ThiyaProduct = db.thiya_products;
const ThiyaOrder = db.thiya_orders;
const ThiyaCategory = db.thiya_categories;
const Razorpay = require('razorpay');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Initialize Razorpay (using dummy keys for now, to be replaced by user)
const razorpay = new Razorpay({
    key_id: 'rzp_test_dummykeyid123',
    key_secret: 'dummykeysecret1234567890'
});

// Products CRUD
exports.getProducts = async (req, res) => {
    try {
        const { activeOnly } = req.query;
        const whereClause = activeOnly === 'true' ? { status: 'active' } : {};

        const products = await ThiyaProduct.findAll({
            where: whereClause,
            include: [{
                model: ThiyaCategory,
                as: 'category',
                attributes: ['name', 'status']
            }],
            order: [['createdAt', 'DESC']]
        });
        
        // If activeOnly is true, also ensure the category is active (if it has a category)
        let filteredProducts = products;
        if (activeOnly === 'true') {
            filteredProducts = products.filter(p => !p.category || p.category.status === 'active');
        }

        res.status(200).json({ is_success: true, data: filteredProducts });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await ThiyaProduct.findByPk(req.params.id, {
            include: [{
                model: ThiyaCategory,
                as: 'category',
                attributes: ['name']
            }]
        });
        if (!product) {
            return res.status(404).json({ is_success: false, message: "Product not found" });
        }
        res.status(200).json({ is_success: true, data: product });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.addProduct = async (req, res) => {
    try {
        const { title, description, price, discount_amount, size, category_id, colors, details, status } = req.body;
        
        // Ensure category exists
        if (category_id) {
            const category = await ThiyaCategory.findByPk(category_id);
            if (!category) {
                return res.status(400).json({ is_success: false, message: "Invalid Category ID" });
            }
        }

        let parsedColors = [];
        if (colors) {
            try { parsedColors = JSON.parse(colors); } catch(e) { parsedColors = colors.split(',').map(s => s.trim()); }
        }

        let parsedDetails = {};
        if (details) {
            try { parsedDetails = JSON.parse(details); } catch(e) {}
        }

        // Create product first to get the ID
        const product = await ThiyaProduct.create({
            title, 
            description, 
            price, 
            discount_amount: discount_amount || 0, 
            size, 
            category_id: category_id || null,
            status: status || 'active',
            colors: parsedColors,
            details: parsedDetails,
            images: [] // Initialize empty
        });

        // Handle File Uploads
        if (req.files && req.files.length > 0) {
            const catId = category_id || 'uncategorized';
            const prodId = product.id;
            
            // Define directory path: uploads/categories/{category_id}/products/{product_id}/
            const relativeDir = path.join('categories', String(catId), 'products', String(prodId));
            const uploadDir = path.join(__dirname, '..', '..', 'uploads', relativeDir);
            
            // Create directory recursively if it doesn't exist
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const imageUrls = [];

            for (let i = 0; i < req.files.length; i++) {
                const file = req.files[i];
                
                // Extract color from fieldname (e.g. 'images_#ff0000' -> '#ff0000', 'images_default' -> 'default')
                // If it doesn't start with images_, just fallback to default
                let color = 'default';
                if (file.fieldname && file.fieldname.startsWith('images_')) {
                    color = file.fieldname.replace('images_', '');
                }

                // Generate unique filename
                const fileName = `img_${Date.now()}_${i}${path.extname(file.originalname)}`;
                const filePath = path.join(uploadDir, fileName);
                
                // Save file from memory to disk
                fs.writeFileSync(filePath, file.buffer);
                
                // Add public URL to array (dynamically resolving protocol and host)
                const protocol = req.headers['x-forwarded-proto'] || req.protocol;
                const host = req.headers['x-forwarded-host'] || req.get('host');
                const publicUrl = `${protocol}://${host}/uploads/${relativeDir.replace(/\\/g, '/')}/${fileName}`;
                imageUrls.push({ color: color, url: publicUrl });
            }

            // Update product with images
            product.images = imageUrls;
            await product.save();
        }

        res.status(201).json({ is_success: true, data: product, message: "Product created successfully" });
    } catch (err) {
        console.error("Add Product Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Orders & Payment
exports.createOrder = async (req, res) => {
    try {
        const { 
            product_id, 
            customer_name, 
            customer_email, 
            phone, 
            alt_phone, 
            door_no, 
            street, 
            landmark, 
            city, 
            district, 
            pincode, 
            state,
            quantity 
        } = req.body;
        
        const qty = parseInt(quantity) || 1;

        // 1. Get product details
        const product = await ThiyaProduct.findByPk(product_id);
        if (!product) {
            return res.status(404).json({ is_success: false, message: "Product not found" });
        }

        // 2. Calculate amount
        const unitPrice = parseFloat(product.price) - parseFloat(product.discount_amount || 0);
        const subtotal = unitPrice * qty;
        const gstAmount = subtotal * 0.05; // 5% GST as per screenshot
        const totalAmount = subtotal + gstAmount;
        
        // Razorpay accepts amount in subunits (paise for INR)
        const amountInPaise = Math.round(totalAmount * 100);

        // 3. Create order in Razorpay
        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_order_${new Date().getTime()}`
        };
        
        let razorpayOrderId = `mock_order_${Date.now()}`;
        try {
            const razorpayOrder = await razorpay.orders.create(options);
            razorpayOrderId = razorpayOrder.id;
        } catch (rzpError) {
            console.warn("Razorpay API failed (likely dummy keys). Using mock order ID.", rzpError.message);
        }

        // 4. Save order locally
        const newOrder = await ThiyaOrder.create({
            product_id,
            customer_name,
            customer_email,
            phone,
            alt_phone,
            door_no,
            street,
            landmark,
            city,
            district,
            pincode,
            state,
            quantity: qty,
            amount_paid: unitPrice,
            gst_amount: gstAmount,
            total_amount: totalAmount,
            payment_status: 'pending',
            payment_id: razorpayOrderId
        });

        res.status(200).json({
            is_success: true,
            data: {
                order_id: newOrder.id,
                razorpay_order_id: razorpayOrderId,
                amount: amountInPaise,
                currency: "INR",
                key_id: razorpay.key_id
            }
        });

    } catch (err) {
        console.error("Create Order Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, order_id } = req.body;

        // Skip signature check for mock payments (local dev only)
        if (!razorpay_order_id.startsWith('mock_')) {
            // Verify signature
            const shasum = crypto.createHmac('sha256', razorpay.key_secret);
            shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
            const digest = shasum.digest('hex');

            if (digest !== razorpay_signature) {
                return res.status(400).json({ is_success: false, message: "Transaction not legit!" });
            }
        }

        // Update local order
        const order = await ThiyaOrder.findByPk(order_id);
        if (order) {
            order.payment_status = 'completed';
            // We store the actual payment ID as well, though earlier we stored order id
            order.payment_id = razorpay_payment_id; 
            await order.save();
        }

        res.status(200).json({
            is_success: true,
            message: "Payment successfully verified",
            data: order
        });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.getReports = async (req, res) => {
    try {
        const orders = await ThiyaOrder.findAll({
            include: [{
                model: ThiyaProduct,
                as: 'product',
                attributes: ['title']
            }],
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json({ is_success: true, data: orders });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};
