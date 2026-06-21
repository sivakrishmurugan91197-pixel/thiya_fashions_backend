const { sequelize } = require('../models');
const logger = require('../utils/logger');
const { MESSAGES } = require('../config/constants');

const getSummaryDetails = async (req, res) => {
    try {
        const { quote_id, language_id } = req.body;  

        logger.info('Debug info:', {
            quote_id,
            language_id,
            hasEncKey: !!process.env.ENCRYPTION_KEY
        });

        const result = await sequelize.query(
            'CALL GetSummaryDetails(:quote_id, :encrkey, :language)',
            {
                replacements: {
                    quote_id,
                    encrkey: process.env.ENCRYPTION_KEY,
                    language: language_id
                },
                type: sequelize.QueryTypes.RAW
            }
        );

        const summaryData = Array.isArray(result[0]) ? result[0][0] : result[0];
        
        if (summaryData && summaryData.plan_name) {
            let coveragePeriod = '';
            if (summaryData.coverage_period) {
                const dates = summaryData.coverage_period.split(' to ');
                if (dates.length === 2) {
                    const startDate = formatDateToDD_MM_YYYY(dates[0]);
                    const endDate = formatDateToDD_MM_YYYY(dates[1]);
                    coveragePeriod = `${startDate} to ${endDate}`;
                } else {
                    coveragePeriod = summaryData.coverage_period;
                }
            }

            const responseData = {
                plan_name: summaryData.plan_name || '',
                classification: summaryData.classification || '',
                coverage_period: coveragePeriod || '',
               	liability_amount: summaryData.liability_amount ? summaryData.liability_amount : 0,
                total_premium: summaryData.total_premium ? parseFloat(summaryData.total_premium) : 0,
                discount_amount: summaryData.discount_amount ? parseFloat(summaryData.discount_amount) : 0,
                net_premium: summaryData.net_premium ? parseFloat(summaryData.net_premium) : 0,
                tax_amount: summaryData.tax_amount ? parseFloat(summaryData.tax_amount) : 0,
                stamp_duty: summaryData.stamp_duty ? parseFloat(summaryData.stamp_duty) : 0,
                final_premium: summaryData.final_premium ? parseFloat(summaryData.final_premium) : 0
            };

            logger.info('Response Data:', responseData);

            return res.status(200).json({
                is_success: true,
                message: MESSAGES[language_id]?.SUCCESS || 'Successfully fetched summary details',
                data: responseData
            });
        }

        logger.warn('No valid data found:', {
            summaryData,
            quote_id
        });

        return res.status(404).json({
            is_success: false,
            message: MESSAGES[language_id]?.NOT_FOUND || 'No summary details found',
            data: null
        });

    } catch (error) {
        logger.error('Error fetching summary details', {
            error: error.message,
            stack: error.stack,
            quote_id: req.body?.quote_id
        });

        return res.status(500).json({
            is_success: false,
            message: MESSAGES[language_id]?.FAILED || 'Failed to fetch summary details',
            data: null
        });
    }
};


const formatDateToDD_MM_YYYY = (dateString) => {
    try {
        const date = new Date(dateString);
        
        if (isNaN(date.getTime())) {
            const parts = dateString.split(/[-\/]/);
            if (parts.length === 3) {
                if (parts[0].length === 4) {
                    return `${parts[2].padStart(2, '0')}/${parts[1].padStart(2, '0')}/${parts[0]}`;
                }
                else if (parts[2].length === 4) {
                    return `${parts[0].padStart(2, '0')}/${parts[1].padStart(2, '0')}/${parts[2]}`;
                }
            }
            return dateString; 
        }
        
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    } catch (error) {
        logger.error('Error formatting date', {
            error: error.message,
            dateString
        });
        return dateString; 
    }
};

module.exports = {
    getSummaryDetails
};