const logger = require('../utils/logger');
const constants = require('../config/constants');
const { sequelize, Sequelize } = require("../models");

const getPromoCode = async (req, res) => {
    try {
        const language_id = req.body.language_id || constants.LANGUAGE.EN;
        const promo_code = req.body.promo_code;

        logger.info('Request received', {
            endpoint: '/promocode',
            method: 'POST',
            languageId: language_id,
            promoCode: promo_code
        });

        if (![constants.LANGUAGE.EN, constants.LANGUAGE.TH].includes(language_id)) {
            logger.warn('Invalid language_id provided', { language_id });
            return res.status(400).json({
                is_success: false,
                message: constants.MESSAGES[constants.LANGUAGE.EN].FAILED,
                data: null
            });
        }

        if (!promo_code) {
            logger.warn('Promo code not provided');
            return res.status(400).json({
                is_success: false,
                message: constants.MESSAGES[language_id].FAILED,
                data: null
            });
        }

        logger.info('Calling GetPromoCode stored procedure');
        
        const result = await sequelize.query('CALL GetPromoCode(:promo_code)', {
            replacements: {
                promo_code: promo_code
            },
            raw: true,
            type: Sequelize.QueryTypes.SELECT
        });

        logger.info('Successfully retrieved promo code details', {
            promoCode: promo_code,
            resultCount: result.length
        });

        const promoDetails = result[0];

        return res.status(200).json({
            is_success: true,
            message: constants.MESSAGES[language_id].SUCCESS,
            data: promoDetails
        });

    } catch (error) {
        logger.error('Error processing request', {
            error: error.message,
            stack: error.stack
        });
        return res.status(400).json({
            is_success: false,
            message: constants.MESSAGES[constants.LANGUAGE.EN].FAILED,
            data: null
        });
    }
};

module.exports = { getPromoCode };