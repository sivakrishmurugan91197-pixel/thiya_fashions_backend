const logger = require('../utils/logger');
const constants = require('../config/constants');

const validatePromoHeaders = (req, res, next) => {
    try {
        const clientId = req.headers['client_id'];
        const secretKey = req.headers['secret_key'];

        logger.info('Validating headers', {
            endpoint: '/promocode',
            clientIdPresent: !!clientId,
            secretKeyPresent: !!secretKey
        });

        if (!clientId || !secretKey) {
            logger.warn('Missing required headers', {
                missingClientId: !clientId,
                missingSecretKey: !secretKey
            });
            return res.status(401).json({
                is_success: false,
                message: 'Unauthorized - Missing required headers',
                data: null
            });
        }

        if (clientId !== constants.AUTH.CLIENT_ID || 
            secretKey !== constants.AUTH.SECRET_KEY) {
            logger.warn('Invalid header values');
            return res.status(401).json({
                is_success: false,
                message: 'Unauthorized - Invalid credentials',
                data: null
            });
        }

        next();
    } catch (error) {
        logger.error('Error in header validation', {
            error: error.message,
            stack: error.stack
        });
        return res.status(401).json({
            is_success: false,
            message: 'Unauthorized',
            data: null
        });
    }
};

module.exports = { validatePromoHeaders };