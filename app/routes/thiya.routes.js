const express = require('express');
const router = express.Router();
const multer = require('multer');
const thiyaController = require('../controllers/thiya.controller');
const thiyaCategoryController = require('../controllers/thiyaCategory.controller');

// Multer config for product images (memory storage)
const upload = multer({ storage: multer.memoryStorage() });

// Admin Auth
router.post('/admin/login', thiyaController.adminLogin);

// Categories
router.post('/categories', thiyaController.authAdmin, thiyaCategoryController.createCategory);
router.get('/categories', thiyaCategoryController.getAllCategories);
router.get('/categories/active', thiyaCategoryController.getActiveCategories);
router.put('/categories/:id', thiyaController.authAdmin, thiyaCategoryController.updateCategory);

// Products
router.get('/products', thiyaController.getProducts);
router.get('/products/:id', thiyaController.getProductById);
router.post('/products', thiyaController.authAdmin, upload.any(), thiyaController.addProduct); // Accept any named file fields for color mapping
router.put('/products/:id', thiyaController.authAdmin, upload.any(), thiyaController.updateProduct);

// Orders & Payment
router.post('/orders', thiyaController.createOrder);
router.post('/orders/verify', thiyaController.verifyPayment);

// Reports
router.get('/reports', thiyaController.authAdmin, thiyaController.getReports); // Should be protected by admin auth normally
router.get('/transactions', thiyaController.authAdmin, thiyaController.getTransactions);

module.exports = router;
