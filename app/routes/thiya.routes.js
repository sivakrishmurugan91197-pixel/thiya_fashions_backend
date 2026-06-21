const express = require('express');
const router = express.Router();
const multer = require('multer');
const thiyaController = require('../controllers/thiya.controller');
const thiyaCategoryController = require('../controllers/thiyaCategory.controller');

// Multer config for product images (memory storage)
const upload = multer({ storage: multer.memoryStorage() });

// Categories
router.post('/categories', thiyaCategoryController.createCategory);
router.get('/categories', thiyaCategoryController.getAllCategories);
router.get('/categories/active', thiyaCategoryController.getActiveCategories);

// Products
router.get('/products', thiyaController.getProducts);
router.get('/products/:id', thiyaController.getProductById);
router.post('/products', upload.any(), thiyaController.addProduct); // Accept any named file fields for color mapping

// Orders & Payment
router.post('/orders', thiyaController.createOrder);
router.post('/orders/verify', thiyaController.verifyPayment);

// Reports
router.get('/reports', thiyaController.getReports); // Should be protected by admin auth normally

module.exports = router;
