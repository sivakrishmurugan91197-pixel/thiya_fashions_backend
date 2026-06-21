const express = require('express');
const router = express.Router();
const { documentUpload, selfieUpload } = require('../middleware/upload.middleware');

const { getMasterDetails } = require('../controllers/masterDetails.controller');
const { getPromoCode } = require('../controllers/promoCode.controller');
const { calculatePremium } = require('../controllers/calculatePremium.controller');
const emailController = require('../controllers/email.controller'); 
const emailMeQuoteController = require('../controllers/emailMeQuote.controller');
const otpController = require('../controllers/otp.controller'); 
const { personalparticular } = require('../controllers/personalparticular.controller');
const fileUploadController = require('../controllers/fileupload.controller');

const { validateHeaders } = require('../middleware/auth.middleware');
const { validatePromoHeaders } = require('../middleware/promoAuth.middleware');
const { validateCalculatePremiumRequest } = require('../middleware/calculate.middleware');
const { getSummaryDetails } = require('../controllers/summarydetails.controller');

const { negativeDeclarationAdminApproval } = require('../controllers/negativeDeclaration.controller'); 
const { getCompleteQuoteDetails } = require('../controllers/completequoteDetails.controller');
const paymentController = require('../controllers/payment.controller');


router.post('/masterdetails', validateHeaders, getMasterDetails);
router.post('/promocode', validateHeaders, getPromoCode);
router.post('/calculatepremium', validateHeaders, calculatePremium);
router.post("/emailmequote", validateHeaders, emailMeQuoteController.emailMeQuote);

router.post('/personalparticular', validateHeaders, personalparticular);


router.post("/resendOTP", validateHeaders, otpController.sendOTP);
router.post("/verifyOTP", validateHeaders, otpController.verifyOTP);

// Route for uploading document images
router.post('/documentupload', [validateHeaders, documentUpload], fileUploadController.documentUpload);

// Route for uploading selfie image
router.post('/selfieimageupload', [validateHeaders, selfieUpload], fileUploadController.selfieImageUpload);

router.post('/getSelfieURL', validateHeaders, fileUploadController.getSelfieURL);

router.post('/deleteselfieimage', validateHeaders, fileUploadController.deleteSelfieImage);


router.post('/summarydetails', validateHeaders, getSummaryDetails);

router.post('/completequotedetails', validateHeaders, getCompleteQuoteDetails);
router.post('/negativedeclarationapproval', validateHeaders, negativeDeclarationAdminApproval); 

router.post("/manualpaymentpaid", paymentController.ManualPaymentPaid);



router.post("/dopayment", validateHeaders, paymentController.dopayment);
router.post("/frontpay", paymentController.handlePaymentFrontendRedirect);
router.post("/backpay", paymentController.handlePaymentBackend);
router.post("/payresponse", paymentController.selectPaymentresponse);
router.post("/payresponse", paymentController.selectPaymentresponse);


module.exports = router;