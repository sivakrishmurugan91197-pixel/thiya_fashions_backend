const logger = require('../utils/logger');
const { sequelize, Sequelize } = require("../models");
const jwt = require('jsonwebtoken');
const { encrypt, decrypt } = require("./Crypto");
const { AUTH, MESSAGES, LANGUAGE } = require('../config/constants');
const emailController = require("./email.controller.js");
require('dotenv').config();


exports.emailMeQuote = async (req, res) => {
	logger.info("## Inside emailMe quote method ##");
	try {
		var quote_id =  req.body.quote_id ? req.body.quote_id : '';
		var full_name = req.body.full_name ? req.body.full_name : '';
		var entity_name  = req.body.entity_name  ? req.body.entity_name  : '';
		var mobile_no  = req.body.mobile_no  ? req.body.mobile_no  : '';
		var email_address = req.body.email_address ? req.body.email_address : '';
		let encrkey = process.env['ENCRYPTION_KEY']
	    logger.info("quote_id"+quote_id)
   	    logger.info("full_name"+full_name)
	    logger.info("entity_name"+entity_name)
	    logger.info("mobile_no"+mobile_no)
	    logger.info("email_address"+email_address)
		logger.info("AUTH1"+AUTH.CLIENT_ID);
		logger.info("AUTH"+AUTH.ENCRYPTION_KEY);
		logger.info("encrkey"+encrkey);
		
		logger.info("en"+process.env.ENCRYPTION_KEY);
		
		sequelize.query(
            'CALL AddUpdateEmailMeQuote(:quote_id, :full_name, :entity_name, :mobile_no, :email_address, :encrkey)',
            {
                replacements: {
                    quote_id: quote_id,
                    full_name:full_name,
                    entity_name:entity_name,
                    mobile_no: mobile_no,
                    email_address: email_address,
                    encrkey: encrkey
                },
                raw: true,
                type: Sequelize.QueryTypes.SELECT
            }).then(async function (response) {
            	response=Object.values(response[0]);
			logger.info("Response success");
		    	console.log("Response",response);
                if(response[0].Result == 1){
                	let quoteDetails1 = await getQuoteDetails(quote_id, encrkey);
                	let quoteDetails = quoteDetails1[0];
                	console.log("quotedetails",quoteDetails);
                	await emailController.generateQuotePDF(quoteDetails);
					
            		//return false
                  //  let equote_id = encrypt(quote_id);
                 	 return res.send({is_success: true, message: 'Quotation Email send Successfully'});
                }else{
                    return res.send({ isSuccess: 0, 'Message':response[0].Message});
                }

            }).catch(function (err) {
                logger.info("Email me quote response method error" + err);
                logger.info(
                    "Error inside Email me quote response. Error:"+
                    err.message
                );
                res.status(401).send({
                    isSuccess: true,
                    data: null,
                    message: 'Error in Email me quote response create function ' + err.message
                })
            });

	}catch (err) {
        logger.info("Email me quote method error" + err);
        logger.error('Exception caught inside emailMeQuoteatch block. Error:', err.message);
        res.status(401).send({
            isSuccess: true,
            data: null,
            message: 'Error in executing emailMeQuote function ' + err.message
        })
    }
};
const getQuoteDetails = async (quote_id, encrkey) => {
	logger.info("Get Quote Details MEthod CAlling");
    return new Promise(async (resolve, reject) => {
        try {
            sequelize.query('CALL GetQuoteDetails(:quote_id, :type, :encrkey)', 
                {   
                    replacements: {
                        quote_id: quote_id,
						type: "email_me",
                        encrkey:encrkey
                    },
                    raw: true,
                    type: Sequelize.QueryTypes.SELECT
                }
            ).then(async function (response) {
				logger.info("Quote Details"+response[0]);
                    response=Object.values(response[0]);
                    resolve(response);
            }).catch(err => {
                    console.log("Erroro message", err.message);
                    logger.info(
                        "Error inside GetQuoteDetails method. Error:"+
                        err.message
                    );
                    reject(false);
            });
        } catch (err) {
            console.log("Erroro message1", err.message);
              logger.info('Exception caught inside GetQuoteDetails catch block for Error:'+ err.message);
             reject(false);
        }
    });

};
