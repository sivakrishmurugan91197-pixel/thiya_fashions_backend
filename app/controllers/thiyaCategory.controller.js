const db = require("../models");
const ThiyaCategory = db.thiya_categories;

exports.createCategory = async (req, res) => {
    try {
        const { name, status, menu, size_status, display_order } = req.body;
        const category = await ThiyaCategory.create({ 
            name, 
            status, 
            menu: menu || 'women', 
            size_status: size_status === undefined ? true : (size_status === 'true' || size_status === true),
            display_order: display_order !== undefined && display_order !== '' ? parseInt(display_order, 10) : 9999
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
        const categories = await ThiyaCategory.findAll({ 
            where: whereClause, 
            order: [
                ['display_order', 'ASC'],
                ['id', 'DESC']
            ] 
        });
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
        const categories = await ThiyaCategory.findAll({ 
            where: whereClause, 
            order: [
                ['display_order', 'ASC'],
                ['id', 'DESC']
            ] 
        });
        res.status(200).json({ is_success: true, data: categories });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status, menu, size_status, display_order } = req.body;
        
        const category = await ThiyaCategory.findByPk(id);
        if (!category) {
            return res.status(404).json({ is_success: false, message: "Category not found" });
        }
        
        category.name = name;
        category.status = status;
        category.menu = menu || 'women';
        if (size_status !== undefined) {
            category.size_status = (size_status === 'true' || size_status === true);
        }
        category.display_order = display_order !== undefined && display_order !== '' ? parseInt(display_order, 10) : category.display_order;
        
        await category.save();
        res.status(200).json({ is_success: true, data: category, message: "Category updated successfully" });
    } catch (err) {
        res.status(500).json({ is_success: false, message: err.message });
    }
};
