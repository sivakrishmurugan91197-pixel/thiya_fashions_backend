const logger = require('../utils/logger');
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID; // Your Twilio Verify Service SID
const twilioChannel = process.env.TWILIO_CHANNEL; // Your Twilio Verify Service SID
const countryCode = process.env.TWILIO_COUNTRY_CODE;
const { sequelize, Sequelize } = require("../models");
const emailController = require("./email.controller.js");


exports.sendOTP = async (req, res) => {
    try {
        var mobile_number = req.body.mobile_no ? req.body.mobile_no : '';
        if (!mobile_number) {
            mobile_number = req.body.mobile_number ? req.body.mobile_number : '';
        }
        mobile_number = countryCode+mobile_number
        console.log("mobile_number",mobile_number);
       // return false;
        

       // const otpResponse = await client.verify.v2.services(serviceSid)
         //   .verifications.create({ to: mobile_number, channel: twilioChannel });
        if(req.body.mobile_number){
            res.json({   is_success: true, message: 'OTP sent successfully' });
        }
    } catch (error) {
        res.status(500).json({ is_success: false, message: error.message });
    }
};

exports.verifyOTP = async (req, res) => {

    try {
        const { phone, otp, quote_id } = req.body;

        /*const verificationResponse = await client.verify.v2.services(serviceSid)
            .verificationChecks.create({ to: phone, code: otp });
        console.log("verificationResponse",verificationResponse);
        if (verificationResponse.status === 'approved') {*/
            await sequelize.query( `UPDATE tbl_Quotations SET is_otp_verify_status = 1 WHERE quote_id = :quote_id`, { replacements: { quote_id } });		await emailController.generateQuoteNDPDF(quote_id);
            await sequelize.query('select is_negative_declaration_status from tbl_Quotations where quote_id=:quote_id', { replacements: { quote_id: quote_id } }).then(
            function (dresponse) {
                dresponse=Object.values(dresponse[0]);
                if(dresponse.length > 0 && dresponse[0].is_negative_declaration_status == 1){
                    
                }
            }).error(function (err) {
                logger.error('Error inside verifyOTP check negative declaration status method. Error:', err.message);
                return res.send({ success: 0, Data: 'Conatact admin' });
            });
            logger.info(`✅ OTP verification status updated successfully for quote_id: ${quote_id}`);
            res.json({ is_success: true, message: 'OTP verified successfully' });
        /*} else {
            res.status(400).json({ is_success: false, message: 'Invalid OTP' });
        }*/
    } catch (error) {
        res.status(500).json({ is_success: false, message: error.message });
    }
};


