const { sequelize } = require('../models');
const logger = require('../utils/logger');
const { MESSAGES, LANGUAGE } = require('../config/constants');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { encrypt, decrypt } = require("./Crypto");
var format = require('format-number');

const POLICY_URL = 'https://thedoctorshield.ja.deals/wp-content/uploads/2020/09/Doctor-Shield-General-Info.pdf';

const generateToken = (quoteId, languageId = LANGUAGE.EN) => {
    return jwt.sign(
        { quote_id: quoteId, language_id: languageId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY }
    );
};

// Helper function to format dates
const formatDate = (dateString) => {
    if (!dateString) return null;
    return moment(dateString).format('DD/MM/YYYY');
};

const getCompleteQuoteDetails = async (req, res) => {
    try {
        let { quote_id, type } = req.body;
        // const language_id = req.body.language_id || LANGUAGE.EN;
        var language_id = LANGUAGE.EN;
        console.log("language_id",language_id);
        quote_id = decrypt(quote_id);
        logger.info('Fetching complete quote details', {
            quote_id,
            type,
            language_id
        });
        let quoteDataArray;
        let promoCodeArray;
        await sequelize.query(
            'CALL GetCompleteQuoteDetails(:quote_id, :encrkey, :type, :language_id)',
            {
                replacements: {
                    quote_id,
                    encrkey: process.env.ENCRYPTION_KEY,
                    type,
                    language_id
                },
                type: sequelize.QueryTypes.SELECT
            
        }).then(function (dresponse) {
            quoteDataArray= Object.values(dresponse[0]);
            promoCodeArray = Object.values(dresponse[1])
            quoteDataArray = quoteDataArray[0];
            promoCodeArray = promoCodeArray[0];
            console.log("quoteDataArray",quoteDataArray)
            console.log("quoteDataArray.startDate",quoteDataArray.start_date);
            let insuranceStartDate = moment(quoteDataArray.start_date, 'YYYY-MM-DD');
            let changeDOB;          
            console.log("dob",quoteDataArray.dob);
            if (!quoteDataArray.dob) {
                changeDOB = quoteDataArray.dob;
            }else{
                changeDOB = moment(quoteDataArray.dob).format('DD/MM/YYYY');
            }
            let todayDate = moment();
            let insuranceNewStartDate;
             insuranceNewStartDate =  insuranceStartDate.isSameOrAfter(todayDate, 'day') 
        ? insuranceStartDate.format('DD/MM/YYYY') 
        : todayDate.format('DD/MM/YYYY');
            console.log("insuranceNewStartDate",insuranceNewStartDate);
            let newEndDate = addDaysBasedOnLeapYear(insuranceNewStartDate);
            quoteDataArray.coverage_period = insuranceNewStartDate+' to '+newEndDate;
            quoteDataArray.start_date = insuranceNewStartDate;
            quoteDataArray.dob = changeDOB;
            quoteDataArray.end_date = newEndDate;
            quoteDataArray.promo_code = promoCodeArray.PromoCodeValue;
            quoteDataArray.promocode_percent = promoCodeArray.PromoPercent;
        }).error(function (err) {
            logger.error('Error inside getCompleteQuoteDetails check getCompleteQuoteDetails status method. Error:', err.message);
            res.status(500).json({ is_success: false, message: err.message });
        });

        let Email_Language_ID = {...quoteDataArray};
        var language_id = Email_Language_ID.language_id;    
        const authToken = generateToken(quote_id, language_id);
        
        let responseData = {
            authToken,
            ...quoteDataArray,
            policy_url: POLICY_URL
        };
       

  /*      const dateFields = ['start_date', 'end_date', 'date_of_birth'];
        dateFields.forEach(field => {
            if (responseData[field]) {
                responseData[field] = formatDate(responseData[field]);
            }
        });

        // Convert numeric fields to float
        const numericFields = ['individual_premium', 'total_premium', 'discount_amount', 
                             'net_premium', 'tax_amount', 'final_premium', 'promo_percent'];
        
        numericFields.forEach(field => {
            if (quoteData[field] !== undefined) {
                responseData[field] = parseFloat(quoteData[field]) || 0;
            }
        });

        logger.info('Successfully retrieved quote details', {
            quote_id,
            type,
            has_data: !!responseData
        });*/

        return res.status(200).json({
            is_success: true,
            message: MESSAGES[language_id]?.SUCCESS || 'Successfully retrieved quote details',
            data: responseData
        });

    } catch (error) {
        logger.error('Error fetching complete quote details', {
            error: error.message,
            stack: error.stack,
            quote_id: req.body?.quote_id,
            type: req.body?.type
        });
        console.log("err",error.message);
        return res.status(500).json({
            is_success: false,
            message: MESSAGES[language_id]?.FAILED || 'Failed to retrieve quote details',
            data: null
        });
    }
};

function addDaysBasedOnLeapYear(startDateStr) {
    // Parse the input date
    let startDates = moment(startDateStr, "DD/MM/YYYY");

    // Get the year from the current date
    let year = startDates.year();

    // Check if it's a leap year
    let daysToAdd = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 365 : 364;

    // Add the required days
    let logicEndDate = startDates.add(daysToAdd, 'days');

    // Return the new date in DD/MM/YYYY format
    return logicEndDate.format("DD/MM/YYYY");
}

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
    getCompleteQuoteDetails
};