const { AUTH } = require('../config/constants');
const logger = require('../utils/logger');

const validateCalculatePremiumRequest = (req, res, next) => {
   try {
       // 1. Validate headers
       const clientId = req.headers['client_id'];
       const secretKey = req.headers['secret_key'];

       if (!clientId || !secretKey) {
           logger.error('Missing auth headers for calculate premium', { 
               clientId, 
               headers: req.headers 
           });
           return res.status(401).json({
               is_success: false,
               data: null,
               message: 'Unauthorized - Missing Headers'
           });
       }

       if (clientId !== AUTH.CLIENT_ID || secretKey !== AUTH.SECRET_KEY) {
           logger.error('Invalid auth credentials for calculate premium', { 
               clientId 
           });
           return res.status(401).json({
               is_success: false,
               data: null,
               message: 'Unauthorized - Invalid Credentials'
           });
       }

       // 2. Validate request body parameters
       const {
           classification_id,
           liability_id,
           start_date,
           end_date,
           email_address,
           language_id = 'en'
       } = req.body;

       // Validate language
       if (language_id && !['en', 'th'].includes(language_id)) {
           logger.error('Invalid language_id');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'language_id must be either "en" or "th"'
           });
       }

       // Validate required fields
       if (!classification_id) {
           logger.error('Missing classification_id');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'classification_id is required'
           });
       }

       if (!liability_id) {
           logger.error('Missing liability_id');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'liability_id is required'
           });
       }

       if (!start_date) {
           logger.error('Missing start_date');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'start_date is required'
           });
       }

       if (!end_date) {
           logger.error('Missing end_date');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'end_date is required'
           });
       }

       if (!email_address) {
           logger.error('Missing email_address');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'email_address is required'
           });
       }

       // 3. Validate date format and range
       const validateDate = (dateStr) => {
           // Check for dd/mm/yyyy format
           const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
           if (!dateRegex.test(dateStr)) {
               return false;
           }

           // Convert dd/mm/yyyy to Date object
           const [day, month, year] = dateStr.split('/');
           const date = new Date(year, month - 1, day);
           
           // Check if valid date (handles cases like 31/02/2025)
           return date.getDate() === parseInt(day) && 
                  date.getMonth() === parseInt(month) - 1 && 
                  date.getFullYear() === parseInt(year);
       };

       const convertToDateObj = (dateStr) => {
           const [day, month, year] = dateStr.split('/');
           return new Date(year, month - 1, day);
       };

       if (!validateDate(start_date)) {
           logger.error('Invalid start_date format');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'Invalid start_date format. Use dd/mm/yyyy'
           });
       }

       if (!validateDate(end_date)) {
           logger.error('Invalid end_date format');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'Invalid end_date format. Use dd/mm/yyyy'
           });
       }

       const startDateObj = convertToDateObj(start_date);
       const endDateObj = convertToDateObj(end_date);

       if (startDateObj >= endDateObj) {
           logger.error('start_date must be before end_date');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'start_date must be before end_date'
           });
       }

       // 4. Validate email format
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email_address)) {
           logger.error('Invalid email format');
           return res.status(400).json({
               is_success: false,
               data: null,
               message: 'Invalid email format'
           });
       }

       // 5. Validate optional parameters if present
       if (req.body.promo_code !== undefined) {
           if (typeof req.body.promo_code !== 'string' || req.body.promo_code.trim() === '') {
               logger.error('Invalid promo_code format');
               return res.status(400).json({
                   is_success: false,
                   data: null,
                   message: 'promo_code must be a non-empty string'
               });
           }
       }

       if (req.body.promocode_percent !== undefined) {
           const percent = parseFloat(req.body.promocode_percent);
           if (isNaN(percent) || percent < 0 || percent > 100) {
               logger.error('Invalid promocode_percent');
               return res.status(400).json({
                   is_success: false,
                   data: null,
                   message: 'promocode_percent must be a number between 0 and 100'
               });
           }
       }

       logger.info('Calculate premium request validation successful');
       next();
   } catch (error) {
       logger.error('Calculate premium middleware error', { 
           error: error.message,
           stack: error.stack
       });
       return res.status(500).json({
           is_success: false,
           data: null,
           message: 'Internal Server Error'
       });
   }
};

module.exports = { validateCalculatePremiumRequest };