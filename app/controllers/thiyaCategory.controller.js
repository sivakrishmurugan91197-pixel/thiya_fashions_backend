const db = require("../models");
const ThiyaCategory = db.thiya_categories;

exports.createCategory = async (req, res) => {
    try {
        const { name, status, menu, size_status } = req.body;
        const category = await ThiyaCategory.create({ 
            name, 
            status, 
            menu: menu || 'women', 
            size_status: size_status === undefined ? true : (size_status === 'true' || size_status === true) 
        });
        res.status(201).json({ is_success: true, data: category, message: "Category created successfully" });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const { menu } = req.query;
        const whereClause = menu ? { menu } : {};
        const categories = await ThiyaCategory.findAll({ where: whereClause, order: [['createdAt', 'DESC']] });
        res.status(200).json({ is_success: true, data: categories });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.getActiveCategories = async (req, res) => {
    try {
        const { menu } = req.query;
        const whereClause = { status: 'active' };
        if (menu) {
            whereClause.menu = menu;
        }
        const categories = await ThiyaCategory.findAll({ where: whereClause, order: [['name', 'ASC']] });
        res.status(200).json({ is_success: true, data: categories });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};
