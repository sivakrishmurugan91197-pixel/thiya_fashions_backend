const { sequelize } = require('../models');
const logger = require('../utils/logger');
const { MESSAGES } = require('../config/constants'); 
const emailController = require("./email.controller.js");

const negativeDeclarationAdminApproval = async (req, res) => { 
    try {
        const clientId = req.headers['clientid'];
        const clientSecret = req.headers['clientsecret'];

        if (!clientId || !clientSecret) {
            logger.warn('Missing required headers');
            return res.status(401).json({
                is_success: false,
                message: 'Missing required headers: clientId and clientSecret',
                data: null
            });
        }

        const { quote_id, status } = req.body;

        if (!quote_id || !status) {
            logger.warn('Missing required parameters', { quote_id, status });
            return res.status(400).json({
                is_success: false,
                message: 'Quote ID and status are required', 
                data: null
            });
        }

        const validStatus = ['Approved', 'Rejected'];
        if (!validStatus.includes(status)) {
            logger.warn('Invalid status value', { status });
            return res.status(400).json({
                is_success: false,
                message: 'Status must be either Approved or Rejected', 
                data: null
            });
        }

        logger.info('Processing negative declaration admin approval', {
            quote_id,
            status
        });
        let mailStatus;
        if (status === "Approved"){
            mailStatus ="Negative_Declaration_Approved_Cust";
        }else{
            mailStatus = "Negative_Declaration_Rejected_Cust";
        }
        await sequelize.query('CALL negativeDeclarationAdminViaApporval(:quote_id, :status, :encrkey)', { 
            replacements: { 
                quote_id: quote_id,
                status:status,
                encrkey: process.env.ENCRYPTION_KEY
            } 
        }).then(function (dresponse) {
            dresponse=Object.values(dresponse[0]);
            emailController.sendemailPDF(dresponse[0],dresponse[1],dresponse[3],mailStatus,dresponse[2]);
        }).error(function (err) {
            logger.error('Error inside negativeDeclarationAdminViaApporval check negative declaration status method. Error:', err.message);
            return res.send({ success: 0, Data: 'Conatact admin' });
        });

        logger.info('Successfully updated negative declaration status', {
            quote_id,
            status
        });

        return res.status(200).json({
            is_success: true,
            message: 'The details updated successfully' 
        });

    } catch (error) {
        console.log("errro",error.message);
        logger.info('Error processing negative declaration admin approval', {
            error: error.message,
            stack: error.stack,
            quote_id: req.body?.quote_id,
            status: req.body?.status
        });

        if (error.sqlState === '45000') {
            return res.status(400).json({
                is_success: false,
                message: error.message,
                data: null
            });
        }

        return res.status(500).json({
            is_success: false,
            message: 'Failed to update negative declaration status', 
            data: null
        });
    }
};

module.exports = {
    negativeDeclarationAdminApproval 
};
