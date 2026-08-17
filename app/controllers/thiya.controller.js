const db = require("../models");
const ThiyaProduct = db.thiya_products;
const ThiyaOrder = db.thiya_orders;
const ThiyaCategory = db.thiya_categories;
const ThiyaTransaction = db.thiya_transactions;
const Razorpay = require('razorpay');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const adminEmail = process.env.ADMIN_EMAIL || 'admin@gmail.com';
const adminPassword = process.env.ADMIN_PASSWORD || 'password';
const secureTokenSalt = process.env.JWT_SECRET || 'thiya_fashions_secret_salt_9981';

const VALID_ADMIN_TOKEN = crypto.createHmac('sha256', secureTokenSalt)
    .update(`${adminEmail}:${adminPassword}`)
    .digest('hex');

// Initialize Razorpay (loaded dynamically from environment variables)
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_TLHl1pPEgDi0zC',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'uDb2IlKq6Ca46Y13c6jOVyTX'
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
            order: [
                ['display_order', 'ASC'],
                ['id', 'DESC']
            ]
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
        const { title, description, price, discount_amount, size, category_id, colors, details, status, is_new_arrival, is_best_seller, is_trending, display_order } = req.body;
        
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
            images: [], // Initialize empty
            is_new_arrival: is_new_arrival === 'true' || is_new_arrival === true,
            is_best_seller: is_best_seller === 'true' || is_best_seller === true,
            is_trending: is_trending === 'true' || is_trending === true,
            display_order: display_order !== undefined && display_order !== '' ? parseInt(display_order, 10) : 9999
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

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price, discount_amount, size, category_id, colors, details, status, existing_images, is_new_arrival, is_best_seller, is_trending, display_order } = req.body;

        const product = await ThiyaProduct.findByPk(id);
        if (!product) {
            return res.status(404).json({ is_success: false, message: "Product not found" });
        }

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

        // Handle existing images
        let imageUrls = [];
        if (existing_images) {
            try { imageUrls = JSON.parse(existing_images); } catch(e) {}
        } else if (product.images) {
            imageUrls = product.images;
        }

        // Handle new file uploads
        if (req.files && req.files.length > 0) {
            const catId = category_id || 'uncategorized';
            const prodId = product.id;
            
            const relativeDir = path.join('categories', String(catId), 'products', String(prodId));
            const uploadDir = path.join(__dirname, '..', '..', 'uploads', relativeDir);
            
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            for (let i = 0; i < req.files.length; i++) {
                const file = req.files[i];
                
                let color = 'default';
                if (file.fieldname && file.fieldname.startsWith('images_')) {
                    color = file.fieldname.replace('images_', '');
                }

                const fileName = `img_${Date.now()}_${i}${path.extname(file.originalname)}`;
                const filePath = path.join(uploadDir, fileName);
                
                fs.writeFileSync(filePath, file.buffer);
                
                const protocol = req.headers['x-forwarded-proto'] || req.protocol;
                const host = req.headers['x-forwarded-host'] || req.get('host');
                const publicUrl = `${protocol}://${host}/uploads/${relativeDir.replace(/\\/g, '/')}/${fileName}`;
                imageUrls.push({ color: color, url: publicUrl });
            }
        }

        // Update product fields
        product.title = title || product.title;
        product.description = description || product.description;
        product.price = price !== undefined ? price : product.price;
        product.discount_amount = discount_amount !== undefined ? discount_amount : product.discount_amount;
        product.size = size !== undefined ? size : product.size;
        product.category_id = category_id !== undefined ? (category_id || null) : product.category_id;
        product.status = status || product.status;
        product.colors = colors ? parsedColors : product.colors;
        product.details = details ? parsedDetails : product.details;
        product.images = imageUrls;
        product.is_new_arrival = is_new_arrival !== undefined ? (is_new_arrival === 'true' || is_new_arrival === true) : product.is_new_arrival;
        product.is_best_seller = is_best_seller !== undefined ? (is_best_seller === 'true' || is_best_seller === true) : product.is_best_seller;
        product.is_trending = is_trending !== undefined ? (is_trending === 'true' || is_trending === true) : product.is_trending;
        product.display_order = display_order !== undefined && display_order !== '' ? parseInt(display_order, 10) : product.display_order;

        await product.save();

        res.status(200).json({ is_success: true, data: product, message: "Product updated successfully" });
    } catch (err) {
        console.error("Update Product Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Orders & Payment
exports.createOrder = async (req, res) => {
    try {
        const { 
            items, // array of { product_id, quantity, size, color }
            product_id, // fallback for single item
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
            quantity,
            size,
            color
        } = req.body;

        let totalAmount = 0;
        let checkoutItemsList = [];

        if (items && items.length > 0) {
            // Bulk checkout from cart
            for (const item of items) {
                const product = await ThiyaProduct.findByPk(item.product_id);
                if (!product) {
                    return res.status(404).json({ is_success: false, message: `Product ID ${item.product_id} not found` });
                }
                const unitPrice = parseFloat(product.price) - parseFloat(product.discount_amount || 0);
                const qty = parseInt(item.quantity) || 1;
                const subtotal = unitPrice * qty;
                const gst = 0;
                const total = subtotal + gst;

                checkoutItemsList.push({
                    product_id: item.product_id,
                    quantity: qty,
                    size: item.size || 'Standard',
                    color: item.color || 'Default',
                    unitPrice: unitPrice,
                    gstAmount: gst,
                    totalAmount: total
                });

                totalAmount += total;
            }
        } else {
            // Single product checkout fallback
            const product = await ThiyaProduct.findByPk(product_id);
            if (!product) {
                return res.status(404).json({ is_success: false, message: "Product not found" });
            }
            const qty = parseInt(quantity) || 1;
            const unitPrice = parseFloat(product.price) - parseFloat(product.discount_amount || 0);
            const subtotal = unitPrice * qty;
            const gst = 0;
            const total = subtotal + gst;

            checkoutItemsList.push({
                product_id: product_id,
                quantity: qty,
                size: size || 'Standard',
                color: color || 'Default',
                unitPrice: unitPrice,
                gstAmount: gst,
                totalAmount: total
            });

            totalAmount = total;
        }
        
        // Razorpay accepts amount in subunits (paise for INR)
        const amountInPaise = Math.round(totalAmount * 100);

        // Create order in Razorpay
        const options = {
            amount: amountInPaise,
            currency: "INR",
            receipt: `receipt_order_${new Date().getTime()}`
        };
        
        let razorpayOrderId;
        try {
            const razorpayOrder = await razorpay.orders.create(options);
            razorpayOrderId = razorpayOrder.id;
        } catch (rzpError) {
            if (razorpay.key_id && razorpay.key_id.startsWith('rzp_live_')) {
                console.error("Razorpay order creation failed in Live mode:", rzpError.message);
                return res.status(500).json({ is_success: false, message: `Payment Gateway Error: ${rzpError.message}` });
            }
            console.warn("Razorpay API failed (likely dummy keys). Using mock order ID.", rzpError.message);
            razorpayOrderId = `mock_order_${Date.now()}`;
        }

        // Save orders locally
        let firstOrderId = null;
        for (const item of checkoutItemsList) {
            const newOrder = await ThiyaOrder.create({
                product_id: item.product_id,
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
                quantity: item.quantity,
                size: item.size,
                color: item.color,
                amount_paid: item.unitPrice, // storing unit price for reports multiplication compatibility
                gst_amount: item.gstAmount,
                total_amount: item.totalAmount,
                payment_status: 'pending',
                payment_id: razorpayOrderId // Store razorpayOrderId initially, updated to payment ID on verification
            });
            if (!firstOrderId) {
                firstOrderId = newOrder.id;
            }
        }

        // Save transaction locally as pending
        await ThiyaTransaction.create({
            razorpay_order_id: razorpayOrderId,
            amount: totalAmount,
            customer_name,
            customer_email,
            phone,
            status: 'pending'
        });

        res.status(200).json({
            is_success: true,
            data: {
                order_id: firstOrderId,
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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, order_id } = req.body;
    try {
        // Reject mock payments if live keys are active, otherwise bypass signature check for mock payments in test mode
        if (razorpay_order_id.startsWith('mock_')) {
            if (razorpay.key_id && razorpay.key_id.startsWith('rzp_live_')) {
                return res.status(400).json({ is_success: false, message: "Mock payments are disabled in Live Production mode." });
            }
        } else {
            // Verify signature
            const shasum = crypto.createHmac('sha256', razorpay.key_secret);
            shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
            const digest = shasum.digest('hex');

            if (digest !== razorpay_signature) {
                // Update transaction status to failed
                const transaction = await ThiyaTransaction.findOne({
                    where: { razorpay_order_id: razorpay_order_id }
                });
                if (transaction) {
                    transaction.status = 'failed';
                    await transaction.save();
                }
                return res.status(400).json({ is_success: false, message: "Transaction not legit!" });
            }
        }

        // Update local orders belonging to this transaction
        // First, find all orders matching the razorpay_order_id (initially saved as payment_id)
        const pendingOrders = await ThiyaOrder.findAll({
            where: { payment_id: razorpay_order_id }
        });

        if (pendingOrders.length > 0) {
            for (const order of pendingOrders) {
                order.payment_status = 'completed';
                order.payment_id = razorpay_payment_id; 
                await order.save();
            }
        } else if (order_id) {
            // Fallback for single direct order update
            const order = await ThiyaOrder.findByPk(order_id);
            if (order) {
                order.payment_status = 'completed';
                order.payment_id = razorpay_payment_id; 
                await order.save();
            }
        }

        // Update the transaction details in tbl_transaction
        const transaction = await ThiyaTransaction.findOne({
            where: { razorpay_order_id: razorpay_order_id }
        });
        if (transaction) {
            transaction.status = 'completed';
            transaction.razorpay_payment_id = razorpay_payment_id;
            transaction.razorpay_signature = razorpay_signature || 'mock_signature';
            await transaction.save();
        }

        // Return first updated order for callback confirmation
        const mainOrder = pendingOrders[0] || (order_id ? await ThiyaOrder.findByPk(order_id) : null);

        res.status(200).json({
            is_success: true,
            message: "Payment successfully verified",
            data: mainOrder
        });
    } catch (err) {
        if (razorpay_order_id) {
            try {
                const transaction = await ThiyaTransaction.findOne({
                    where: { razorpay_order_id: razorpay_order_id }
                });
                if (transaction) {
                    transaction.status = 'failed';
                    await transaction.save();
                }
            } catch (txErr) {
                console.error("Error setting transaction to failed:", txErr);
            }
        }
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.getReports = async (req, res) => {
    try {
        const orders = await ThiyaOrder.findAll({
            include: [{
                model: ThiyaProduct,
                as: 'product',
                attributes: ['title', 'images']
            }],
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json({ is_success: true, data: orders });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await ThiyaTransaction.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json({ is_success: true, data: transactions });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === adminEmail && password === adminPassword) {
            res.status(200).json({ is_success: true, token: VALID_ADMIN_TOKEN });
        } else {
            res.status(401).json({ is_success: false, message: "Invalid email or password" });
        }
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.authAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ is_success: false, message: "Unauthorized: Missing or invalid token" });
    }
    const token = authHeader.split(' ')[1];
    if (token !== VALID_ADMIN_TOKEN) {
        return res.status(401).json({ is_success: false, message: "Unauthorized: Invalid token session" });
    }
    next();
};
