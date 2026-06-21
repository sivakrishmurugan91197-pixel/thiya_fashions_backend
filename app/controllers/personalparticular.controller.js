const logger = require('../utils/logger');
const constants = require('../config/constants');
const { sequelize } = require('../models');
const { isNullOrUndefined } = require('util');
const otpController = require("../controllers/otp.controller.js");

const personalparticular = async (req, res) => {
    try {
        logger.info('Personal Particulars API called', {
            quote_id: req.body.quote_id
        });

        // Extract all required fields from request body
        const {
            full_name,
            dob,
            clinic_name,
         //   no_patients_served,
          //  income,
            practice_location,
            mobile_no,
            claims_history,
            claims_history_desc,
            claims_awareness,
            claims_awarenes_desc,
            disciplinary_history,
            disciplinary_history_desc,
            criminal_history,
            criminal_history_desc
        } = req.body;

        // Validate required fields
        const requiredFields = {
            full_name,
            dob,
            clinic_name,
           // no_patients_served,
           // income,
            practice_location,
            mobile_no,
            claims_history,
            claims_awareness,
            disciplinary_history,
            criminal_history
        };

        for (const [field, value] of Object.entries(requiredFields)) {
            if (isNullOrUndefined(value) || value.toString().trim() === '') {
                logger.error(`Missing required field: ${field}`);
                return res.status(400).json({
                    is_success: false,
                    message: `${field} is required`,
                    data: null
                });
            }
        }

        // Validate date format (assuming dd/mm/yyyy format from frontend)
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
        if (!dateRegex.test(dob)) {
            logger.error('Invalid date format for dob');
            return res.status(400).json({
                is_success: false,
                message: 'Invalid date format for dob. Use dd/mm/yyyy',
                data: null
            });
        }

        // Convert date to MySQL format (yyyy-mm-dd)
        const [day, month, year] = dob.split('/');
        const mysqlDate = `${year}-${month}-${day}`;

        // Validate numeric fields
        /*if (isNaN(no_patients_served) || parseInt(no_patients_served) < 0) {
            logger.error('Invalid number of patients served');
            return res.status(400).json({
                is_success: false,
                message: 'Number of patients served must be a positive number',
                data: null
            });
        }

        if (isNaN(income) || parseFloat(income) < 0) {
            logger.error('Invalid income value');
            return res.status(400).json({
                is_success: false,
                message: 'Income must be a positive number',
                data: null
            });
        }*/

        // Validate mobile number format
        const mobileRegex = /^\+?[\d\s-]{7,15}$/;
        if (!mobileRegex.test(mobile_no)) {
            logger.error('Invalid mobile number format');
            return res.status(400).json({
                is_success: false,
                message: 'Invalid mobile number format',
                data: null
            });
        }

        // Validate yes/no fields
        const yesNoFields = {
            claims_history,
            claims_awareness,
            disciplinary_history,
            criminal_history
        };

        for (const [field, value] of Object.entries(yesNoFields)) {
            if (!['yes', 'no'].includes(value.toLowerCase())) {
                logger.error(`Invalid value for ${field}`);
                return res.status(400).json({
                    is_success: false,
                    message: `${field} must be either 'yes' or 'no'`,
                    data: null
                });
            }
        }

        // Validate description fields when answer is 'yes'
          if (claims_history.toLowerCase() === 'yes' && (!claims_history_desc || claims_history_desc.trim() === '')) {
            return res.status(400).json({
                is_success: false,
                message: 'Claims history description is required when claims awareness is yes',
                data: null
            });
        }

        if (claims_awareness.toLowerCase() === 'yes' && (!claims_awarenes_desc || claims_awarenes_desc.trim() === '')) {
            return res.status(400).json({
                is_success: false,
                message: 'Claims awareness description is required when claims awareness is yes',
                data: null
            });
        }

        if (disciplinary_history.toLowerCase() === 'yes' && (!disciplinary_history_desc || disciplinary_history_desc.trim() === '')) {
            return res.status(400).json({
                is_success: false,
                message: 'Disciplinary history description is required when disciplinary history is yes',
                data: null
            });
        }

        if (criminal_history.toLowerCase() === 'yes' && (!criminal_history_desc || criminal_history_desc.trim() === '')) {
            return res.status(400).json({
                is_success: false,
                message: 'Criminal history description is required when criminal history is yes',
                data: null
            });
        }

        // Call the stored procedure
        let result = await sequelize.query(
            'CALL AddUpdatePersonalParticulars(:quote_id, :full_name, :dob, :clinic_name, :no_patients_served, :income, :practice_location, :mobile_no, :claims_history, :claims_history_desc, :claims_awareness, :claims_awarenes_desc, :disciplinary_history, :disciplinary_history_desc, :criminal_history, :criminal_history_desc, :encrkey)',
            {
                replacements: {
                    quote_id: req.body.quote_id,
                    full_name,
                    dob: mysqlDate,
                    clinic_name,
                    no_patients_served: "",
                    income: "",
                    practice_location,
                    mobile_no,
                    claims_history: claims_history.toLowerCase(),
                    claims_history_desc: claims_history.toLowerCase() === 'yes' ? claims_history_desc : null,
                    claims_awareness: claims_awareness.toLowerCase(),
                    claims_awarenes_desc: claims_awareness.toLowerCase() === 'yes' ? claims_awarenes_desc : null,
                    disciplinary_history: disciplinary_history.toLowerCase(),
                    disciplinary_history_desc: disciplinary_history.toLowerCase() === 'yes' ? disciplinary_history_desc : null,
                    criminal_history: criminal_history.toLowerCase(),
                    criminal_history_desc: criminal_history.toLowerCase() === 'yes' ? criminal_history_desc : null,
                    encrkey: process.env.ENCRYPTION_KEY
                },
                type: sequelize.QueryTypes.RAW
            }
        );
        result = result[0];
        console.log("1-",result.otp_verify_allow_status);
        console.log("2-",result.id_verify_allow_status);
		 logger.info("otp_verify_allow_status-"+result.otp_verify_allow_status);
        logger.info("id_verify_allow_status-"+result.id_verify_allow_status);
        let otp_verify_allow_status;
        let id_verify_allow_status;
        if(result.otp_verify_allow_status == 1){
            otp_verify_allow_status = "yes";
        }else{
            otp_verify_allow_status = "no";
        }
        if(result.id_verify_allow_status == 1){
            id_verify_allow_status = "yes";
        }else{
            id_verify_allow_status = "no";
        }

        await otpController.sendOTP(req);
        var negative_decalred;
        if((claims_history.toLowerCase() === 'yes')||(claims_awareness.toLowerCase() === 'yes')||(disciplinary_history.toLowerCase() === 'yes')||(criminal_history.toLowerCase() === 'yes')){
            negative_decalred = "yes";
        }else{
            negative_decalred = "no";
        }


        logger.info('Personal particulars stored successfully', {
            quote_id: req.body.quote_id
        });

        return res.status(200).json({
            is_success: true,
            message: 'Personal particulars stored successfully',
            negative_decalred : negative_decalred,
            id_verify_allow_status: id_verify_allow_status,
            otp_verify_allow_status : otp_verify_allow_status,
            data: null
        });

    } catch (error) {
        logger.error('Error in personal particulars API', {
            error: error.message,
            stack: error.stack,
            quote_id: req.body?.quote_id
        });

        return res.status(500).json({
            is_success: false,
            message: 'Internal server error occurred while processing your request',
            data: null
        });
    }
};

module.exports = {
    personalparticular
};