const db = require("../models");
const ThiyaVideoBanner = db.thiya_video_banners;
const fs = require('fs');
const path = require('path');

// Get all video banners
exports.getVideoBanners = async (req, res) => {
    try {
        const { activeOnly } = req.query;
        const whereClause = activeOnly === 'true' ? { status: 'active' } : {};

        const banners = await ThiyaVideoBanner.findAll({
            where: whereClause,
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json({ is_success: true, data: banners });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Create / upload video banner
exports.createVideoBanner = async (req, res) => {
    try {
        const { title, subtitle, status } = req.body;

        if (!req.file) {
            return res.status(400).json({ is_success: false, message: "Showcase banner image is required" });
        }

        // Define directory path: uploads/banners/
        const relativeDir = 'banners';
        const uploadDir = path.join(__dirname, '..', '..', 'uploads', relativeDir);

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Generate unique filename
        const fileName = `banner_${Date.now()}${path.extname(req.file.originalname)}`;
        const filePath = path.join(uploadDir, fileName);

        // Save file
        fs.writeFileSync(filePath, req.file.buffer);

        // Public URL
        const protocol = req.headers['x-forwarded-proto'] || req.protocol;
        const host = req.headers['x-forwarded-host'] || req.get('host');
        const publicUrl = `${protocol}://${host}/uploads/${relativeDir}/${fileName}`;

        // If status is active, optionally deactivate other banners so only one is active at a time
        if (status === 'active' || status === undefined) {
            await ThiyaVideoBanner.update({ status: 'inactive' }, { where: {} });
        }

        const banner = await ThiyaVideoBanner.create({
            title: title || null,
            subtitle: subtitle || null,
            image_url: publicUrl,
            status: status || 'active'
        });

        res.status(201).json({ is_success: true, data: banner, message: "Video banner created successfully" });
    } catch (err) {
        console.error("Create Video Banner Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Update video banner details / image
exports.updateVideoBanner = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, subtitle, status } = req.body;

        const banner = await ThiyaVideoBanner.findByPk(id);
        if (!banner) {
            return res.status(404).json({ is_success: false, message: "Video banner not found" });
        }

        // Handle image replacement if file exists
        if (req.file) {
            // Delete old image
            try {
                const urlParts = banner.image_url.split('/uploads/');
                if (urlParts.length > 1) {
                    const relativePath = urlParts[1];
                    const oldFilePath = path.join(__dirname, '..', '..', 'uploads', relativePath);
                    if (fs.existsSync(oldFilePath)) {
                        fs.unlinkSync(oldFilePath);
                    }
                }
            } catch (fileErr) {
                console.warn("Failed to delete old banner image:", fileErr.message);
            }

            // Save new image
            const relativeDir = 'banners';
            const uploadDir = path.join(__dirname, '..', '..', 'uploads', relativeDir);
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const fileName = `banner_${Date.now()}${path.extname(req.file.originalname)}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, req.file.buffer);

            const protocol = req.headers['x-forwarded-proto'] || req.protocol;
            const host = req.headers['x-forwarded-host'] || req.get('host');
            banner.image_url = `${protocol}://${host}/uploads/${relativeDir}/${fileName}`;
        }

        // If status is set to active, deactivate other banners
        if (status === 'active' && banner.status !== 'active') {
            await ThiyaVideoBanner.update({ status: 'inactive' }, { where: {} });
        }

        banner.title = title !== undefined ? title : banner.title;
        banner.subtitle = subtitle !== undefined ? subtitle : banner.subtitle;
        banner.status = status || banner.status;

        await banner.save();

        res.status(200).json({ is_success: true, data: banner, message: "Video banner updated successfully" });
    } catch (err) {
        console.error("Update Video Banner Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Delete video banner
exports.deleteVideoBanner = async (req, res) => {
    try {
        const { id } = req.params;

        const banner = await ThiyaVideoBanner.findByPk(id);
        if (!banner) {
            return res.status(404).json({ is_success: false, message: "Video banner not found" });
        }

        // Delete file
        try {
            const urlParts = banner.image_url.split('/uploads/');
            if (urlParts.length > 1) {
                const relativePath = urlParts[1];
                const filePath = path.join(__dirname, '..', '..', 'uploads', relativePath);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } catch (fileErr) {
            console.warn("Failed to delete banner image file:", fileErr.message);
        }

        await banner.destroy();

        res.status(200).json({ is_success: true, message: "Video banner deleted successfully" });
    } catch (err) {
        console.error("Delete Video Banner Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};
