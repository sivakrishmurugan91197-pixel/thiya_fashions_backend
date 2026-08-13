const express = require('express');
const router = express.Router();
const multer = require('multer');
const thiyaController = require('../controllers/thiya.controller');
const thiyaCategoryController = require('../controllers/thiyaCategory.controller');
const thiyaFeedbackController = require('../controllers/thiyaFeedback.controller');
const thiyaVideoBannerController = require('../controllers/thiyaVideoBanner.controller');

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

// Feedbacks
router.get('/feedbacks', thiyaFeedbackController.getAllFeedbacks);
router.post('/feedbacks', thiyaController.authAdmin, upload.single('image'), thiyaFeedbackController.createFeedback);
router.put('/feedbacks/:id', thiyaController.authAdmin, upload.single('image'), thiyaFeedbackController.updateFeedback);
router.delete('/feedbacks/:id', thiyaController.authAdmin, thiyaFeedbackController.deleteFeedback);

// Video Banners
router.get('/video-banners', thiyaVideoBannerController.getVideoBanners);
router.post('/video-banners', thiyaController.authAdmin, upload.single('image'), thiyaVideoBannerController.createVideoBanner);
router.put('/video-banners/:id', thiyaController.authAdmin, upload.single('image'), thiyaVideoBannerController.updateVideoBanner);
router.delete('/video-banners/:id', thiyaController.authAdmin, thiyaVideoBannerController.deleteVideoBanner);

module.exports = router;
