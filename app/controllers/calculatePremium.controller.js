const { sequelize, Sequelize } = require("../models");
const logger = require('../utils/logger');
const { MESSAGES, LANGUAGE } = require('../config/constants');
const jwt = require('jsonwebtoken');
const { encrypt } = require("./Crypto");

const POLICY_URL = 'https://dssoqazwswoelpygofbpcoooquth.doctor.insure/AttachmentFiles/Policy Wordings.pdf';

const generateToken = (quoteId,languageId) => {
    return jwt.sign(
        { quote_id:quoteId , language_id: languageId},
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY }
    );
};

const formatDate = (dateStr) => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}`;
};

const calculatePremiumDetails = async ({
    classification_id,
    liability_id,
    start_date,
    end_date,
    promo_code = null,
    promocode_percent = 0
}) => {
    try {
        // Validate that promo_code and promocode_percent come together
        if ((promo_code && !promocode_percent) || (!promo_code && promocode_percent)) {
            throw new Error('promo_code and promocode_percent must come together');
        }

        // Call the GetPremiumAmount stored procedure
        const [premiumResult] = await sequelize.query(
            'CALL GetPremiumAmount(:classification_id, :liability_id)',
            {
                replacements: { classification_id, liability_id },
                type: Sequelize.QueryTypes.RAW
            }
        );

        const total_premium = parseFloat(premiumResult?.premium_amount) || 0;

        let discount = 0;
        let payable_premium = total_premium;

        if (promo_code && promocode_percent) {
            discount = total_premium * (promocode_percent / 100);
            payable_premium = total_premium - discount;
        }

        return {
            total_premium,
            payable_premium,
            discount,
            has_promo: !!promo_code,
            promo_code,
            promocode_percent
        };
    } catch (error) {
        logger.error('Error calculating premium details', {
            error: error.message,
            classification_id,
            liability_id
        });
        throw error;
    }
};

const calculatePremium = async (req, res) => {
    try {
        const authToken = req.get('authToken');
        console.log("token",authToken);
        var quote_id =  req.body.quote_id ? req.body.quote_id : '';
        var language_id = req.body.language_id ? req.body.language_id: LANGUAGE.EN;
        const {
            classification_id,
            liability_id,
            start_date,
            end_date,
            email_address,
            promo_code,
            promocode_percent
        } = req.body;
          console.log("444");
     
        logger.info('Processing premium calculation request', {
            classification_id,
            liability_id,
            email_address
        });
          console.log("55");
        if ((promo_code && !promocode_percent) || (!promo_code && promocode_percent)) {
            throw new Error('promo_code and promocode_percent must come together');
        }
          console.log("66");
        const premiumData = await calculatePremiumDetails({
            classification_id,
            liability_id,
            start_date,
            end_date,
            promo_code,
            promocode_percent
        });
                  console.log("77");
        logger.info("process.env.ENCRYPTION_KEY"+process.env.ENCRYPTION_KEY);
        console.log("quote_id",quote_id);
        console.log("classification_id",classification_id)
                console.log("liability_id",liability_id)
                        console.log("start_date",start_date)
                                console.log("end_date",end_date)
                                        console.log("email_address",email_address)
                                                console.log("promo_code",promo_code)
                                                        console.log("promocode_percent",promocode_percent)
                                                                console.log("encrkey",process.env.ENCRYPTION_KEY)
        const result = await sequelize.query(
            'CALL AddUpdateQuotation(:language_id, :quote_id, :classification_id, :liability_id, :start_date, :end_date, :email_address, :promo_code, :promocode_percent, :encrkey)',
            {
                replacements: {
                    language_id:language_id,
                    quote_id: quote_id,
                    classification_id,
                    liability_id,
                    start_date: formatDate(start_date),
                    end_date: formatDate(end_date),
                    email_address,
                    promo_code: promo_code || '',
                    promocode_percent: promocode_percent || 0,
                    encrkey: process.env.ENCRYPTION_KEY
                },
                type: Sequelize.QueryTypes.SELECT
            }
        );
                  console.log("88");
        if (!result?.[0]) {
            throw new Error('Failed to save quotation details');
        }
        let token;
        const premiumDetails = Object.values(result[0])[0];
        if (!authToken) {
            token  = premiumDetails.QuoteID ? generateToken(premiumDetails.QuoteID, language_id) : null;
        }else{
            token = authToken;
        }
        quote_id = quote_id ? quote_id : premiumDetails.QuoteID;
        let final_premium_amount;
        let id_verify_allow_status;
        await sequelize.query('SELECT final_premium from tbl_Quotations WHERE quote_id=:quote_id', { replacements: { quote_id: quote_id } }).then(
            function (dresponse) {
                dresponse=Object.values(dresponse[0]);
                console.log("dresponse",dresponse[0].final_premium);
                final_premium_amount = dresponse[0].final_premium;
            }).error(function (err) {
                logger.error('Error inside final_premium get status method. Error:', err.message);
                return res.send({ success: 0, Data: 'Conatact admin' });
            });
        if (final_premium_amount > 50000){
            id_verify_allow_status = 1;
        }else{
            id_verify_allow_status = 0;
        }
        const getSummaryDetails = await sequelize.query(
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

        const summaryData = Array.isArray(getSummaryDetails[0]) ? getSummaryDetails[0][0] : getSummaryDetails[0];
        console.log("summaryData",summaryData);
        console.log("summaryDatasummaryData",summaryData.classification);
        const responseData = {
            token,
            total_premium: premiumData.total_premium,
            coverage_period: `${start_date} - ${end_date}`,
            payable_premium: premiumData.payable_premium,
            discount: premiumData.discount,
            policy_url: POLICY_URL,
            id_verify_allow_status: id_verify_allow_status,
            indicative_quote_url: POLICY_URL,
            classification:summaryData.classification,
            plan_name:summaryData.plan_name,
            liability_amount:summaryData.liability_amount
        };
        logger.info('Premium calculation completed', {
            quoteId: premiumDetails.QuoteID,
            email_address,
            total_premium: responseData.total_premium
        });

        return res.status(200).json({
            is_success: true,
            message: MESSAGES[language_id]?.SUCCESS || 'Successfully calculated the premium',
            data: responseData
        });

    } catch (error) {
        logger.error('Premium calculation failed', {
            error: error.message,
            stack: error.stack
        });
        console.log("erro".error.message);
        return res.status(500).json({
            is_success: false,
            message: MESSAGES[language_id]?.FAILED || 'Failed to calculate premium',
            data: null
        });
    }
};

module.exports = {
    calculatePremium
};