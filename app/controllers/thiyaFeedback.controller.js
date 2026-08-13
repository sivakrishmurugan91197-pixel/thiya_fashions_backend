const db = require("../models");
const ThiyaFeedback = db.thiya_feedbacks;
const fs = require('fs');
const path = require('path');

// Get all feedbacks
exports.getAllFeedbacks = async (req, res) => {
    try {
        const { activeOnly } = req.query;
        const whereClause = activeOnly === 'true' ? { status: 'active' } : {};

        const feedbacks = await ThiyaFeedback.findAll({
            where: whereClause,
            order: [['createdAt', 'DESC']]
        });

        res.status(200).json({ is_success: true, data: feedbacks });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Create feedback (with image upload)
exports.createFeedback = async (req, res) => {
    try {
        const { customer_name, rating, comment, status } = req.body;

        if (!req.file) {
            return res.status(400).json({ is_success: false, message: "Feedback image is required" });
        }

        // Define directory path: uploads/feedbacks/
        const relativeDir = 'feedbacks';
        const uploadDir = path.join(__dirname, '..', '..', 'uploads', relativeDir);

        // Create directory recursively if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Generate unique filename
        const fileName = `feedback_${Date.now()}${path.extname(req.file.originalname)}`;
        const filePath = path.join(uploadDir, fileName);

        // Save file from memory to disk
        fs.writeFileSync(filePath, req.file.buffer);

        // Add public URL
        const protocol = req.headers['x-forwarded-proto'] || req.protocol;
        const host = req.headers['x-forwarded-host'] || req.get('host');
        const publicUrl = `${protocol}://${host}/uploads/${relativeDir}/${fileName}`;

        const feedback = await ThiyaFeedback.create({
            image_url: publicUrl,
            customer_name: customer_name || null,
            rating: rating !== undefined ? parseInt(rating) : 5,
            comment: comment || null,
            status: status || 'active'
        });

        res.status(201).json({ is_success: true, data: feedback, message: "Feedback created successfully" });
    } catch (err) {
        console.error("Create Feedback Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Update feedback status / fields
exports.updateFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { customer_name, rating, comment, status } = req.body;

        const feedback = await ThiyaFeedback.findByPk(id);
        if (!feedback) {
            return res.status(404).json({ is_success: false, message: "Feedback not found" });
        }

        // If a new image file is uploaded, replace the old one
        if (req.file) {
            // Delete old image from disk
            try {
                const urlParts = feedback.image_url.split('/uploads/');
                if (urlParts.length > 1) {
                    const relativePath = urlParts[1];
                    const oldFilePath = path.join(__dirname, '..', '..', 'uploads', relativePath);
                    if (fs.existsSync(oldFilePath)) {
                        fs.unlinkSync(oldFilePath);
                    }
                }
            } catch (fileErr) {
                console.warn("Failed to delete old feedback image file during update:", fileErr.message);
            }

            // Save new image to disk
            const relativeDir = 'feedbacks';
            const uploadDir = path.join(__dirname, '..', '..', 'uploads', relativeDir);
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const fileName = `feedback_${Date.now()}${path.extname(req.file.originalname)}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, req.file.buffer);

            // Set new image URL
            const protocol = req.headers['x-forwarded-proto'] || req.protocol;
            const host = req.headers['x-forwarded-host'] || req.get('host');
            feedback.image_url = `${protocol}://${host}/uploads/${relativeDir}/${fileName}`;
        }

        feedback.customer_name = customer_name !== undefined ? customer_name : feedback.customer_name;
        feedback.rating = rating !== undefined ? parseInt(rating) : feedback.rating;
        feedback.comment = comment !== undefined ? comment : feedback.comment;
        feedback.status = status || feedback.status;

        await feedback.save();

        res.status(200).json({ is_success: true, data: feedback, message: "Feedback updated successfully" });
    } catch (err) {
        console.error("Update Feedback Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};

// Delete feedback (and clean up file)
exports.deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;

        const feedback = await ThiyaFeedback.findByPk(id);
        if (!feedback) {
            return res.status(404).json({ is_success: false, message: "Feedback not found" });
        }

        // Try to delete file from disk
        try {
            const urlParts = feedback.image_url.split('/uploads/');
            if (urlParts.length > 1) {
                const relativePath = urlParts[1];
                const filePath = path.join(__dirname, '..', '..', 'uploads', relativePath);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } catch (fileErr) {
            console.warn("Failed to delete feedback image file:", fileErr.message);
        }

        await feedback.destroy();

        res.status(200).json({ is_success: true, message: "Feedback deleted successfully" });
    } catch (err) {
        console.error("Delete Feedback Error:", err);
        res.status(500).json({ is_success: false, message: err.message });
    }
};
