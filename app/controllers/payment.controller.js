const { sequelize } = require('../models');
const logger = require('../utils/logger');
const jwt = require('jsonwebtoken');
var request = require('request');
const { isNullOrUndefined } = require('util');
const { AUTH, MESSAGES, LANGUAGE, EMAILCONFIG } = require('../config/constants');
const { encrypt, decrypt } = require("./Crypto");
const emailController = require("./email.controller.js");

var https = require('https');

exports.dopayment = (req, res) => {
    logger.info("DOO payment payment method calling");
    var quote_id = req.body.quote_id ? req.body.quote_id : '';
    if (!quote_id) { res.status(400).send({ message: "quote_id can not be empty!" }); return; }
    

    var amt = req.body.payment ? req.body.payment : '';
    const inv = `INV-${quote_id}-${(+new Date() % 100000)}`;
    var payload = {
        merchantID: process.env['PAY_MERCHANT_ID'],
        InvoiceNo: inv,
        description: "DoctorShield TH",
        amount: 100.00,
		backendReturnUrl:"https://dssOqAzWsWOELpyGoFbpcOOOqUth.doctor.insure/api/dsthai/backpay",
        frontendReturnUrl:"https://devdoctorshieldth.doctor.insure/api/payment",
	    currencyCode: "THB"
    };
    console.log("payload",payload);
	logger.info("payload"+payload);
    var secretKey = process.env['PAY_MERCHANT_SHA'];  // Merchant SHA Key     

    var options = {
        method: 'POST',
        host: process.env['PAY_TOKEN_URL'],
        port: 443,
        path: process.env['PAY_TOKEN_PATH'],
        headers:
        {
            'Content-Type': 'application/*+json',
            'Accept': "text/plain"
        }
    };
    logger.info("Do payment try method calling");
    try {

        sequelize.query('select quote_id,is_paid from tbl_Quotations where quote_id=:quote_id', { replacements: { quote_id: quote_id } }).then(
            function (dresponse) {
                logger.info("drespons success fully returned");
                if (dresponse[0].length == 0) {
                    return res.send({ success: 0, Data: 'quote_id not exist.' });
                }
                else if (dresponse[0].length > 0 && dresponse[0][0].is_paid == 1) {
                    return res.send({ success: 0, Data: 'Already paid.' });
                }else if (dresponse[0].length > 0 && dresponse[0][0].isPaid != 1) {
                   
                     jwt.sign(payload, secretKey, function (err, token) {
                        if (err) {
                            logger.info(err.name, err.message);
                            return res.send({});
                        } else {
                            const requestData = {};
                            requestData["payload"] = token;
                            const requestString = JSON.stringify(requestData);
                            const request = https.request(options, (response) => {
                                let data = '';
                                response.on('data', (chunk) => {
                                    data = data + chunk.toString();
                                });
                                response.on('end', () => {
                                      console.log("data",data);
                                      logger.info("data"+data);                                                                                                                                              console.log("7")
                                    const body = JSON.parse(data);
                                    const value = jwt.verify(body.payload, secretKey);
                                    return res.send({ Success: 1, Data: value });
                                });
                            })
                            request.on('error', (error) => {
                                logger.info('An error', error);
                                return res.send({});
                            });
                            request.write(requestString);
                            request.end()

                        }
                    });
                    logger.info("444");
                }
                else {
                    logger.info("5555");
                    return res.send({ success: 0, Data: 'Please check with admin regarding the payment.' });
                } 
       
            }).error(function (err) {
                 logger.info("666");
                logger.info('Error inside dopayment method. Error:', err.message);
                return res.send({ success: 0, Data: 'Conatact admin' });
            });
             logger.info("7777");
    }
    catch (err) {
        logger.info("8888");
        logger.info("catch method calling"+err.message);
        logger.error('Exception caught inside dopayment catch block. Error:', err.message);
    }
};

exports.handlePaymentFrontendRedirect = async (req, res, next) => {

    logger.info(" Frontend Payment caling");

    try {
        logger.info(" Frontend response", req.body.paymentResponse);
        var secretKey = process.env['PAY_MERCHANT_SHA'];
        const value = jwt.verify(req.body.paymentResponse, secretKey);
        logger.info("Getting frontend Payment response", JSON.stringify(value));
        logger.info("## handlePaymentFrontendRedirect");
    }
    catch (e) {
        logger.error("Cannot update Process Payment Response: ", e);
    }
};


const PAYMENT_SUCCESS_CODES = ['0000'];
const PAYMENT_FAILED_CODES = ['4081'];
const PAYMENT_CANCELLED_CODES = ['0003'];
const PAYMENT_PENDING_CODES = ['0001'];
exports.handlePaymentBackend = async (req, res, next) => {
   
    logger.info(" Backend Payment caling");
    try {

        var secretKey = process.env['PAY_MERCHANT_SHA'];
        const value = jwt.verify(req.body.payload, secretKey);
        logger.info("value"+value);
        //testing
       // const value = {"accountNo":"411111XXXXXX1111","customerToken":"","customerTokenExpiry":null,"loyaltyPoints":null,"uniqueAccountReference":null,"childMerchantID":null,"processBy":"VI","paymentID":"ccpp_8346966","schemePaymentID":"","merchantID":"458458000000226","invoice_no":"INV-QUA422-52961","amount":93.1,"monthlyPayment":null,"userDefined1":"","userDefined2":"","userDefined3":"","userDefined4":"","userDefined5":"","currencyCode":"MYR","recurringUniqueID":"","tranRef":"8346966","referenceNo":"","approvalCode":"","eci":"07","transactionDateTime":"20231222075750","agentCode":"UOBT","channelCode":"VI","issuerCountry":"US","issuerBank":"FIRST DATA CORPORATIONS","installmentMerchantAbsorbRate":null,"cardType":"CREDIT","idempotencyID":"","paymentScheme":"VI","displayProcessingAmount":false,"respCode":"4081","respDesc":"Unable to authenticate card holder"};

        logger.info("Getting Backend Payment response"+ JSON.stringify(value));
        if (!isNullOrUndefined(value)) {
            let isFailed = 0; let message = ""; let policynum = "";

            var order_id = value.invoiceNo ? value.invoiceNo: '';
            var amount = value.amount ? value.amount : '0';
            var cardType = value.cardType ? value.cardType: '';
            var respCode = value.respCode ? value.respCode: '';
            var payStatus = value.respDesc? value.respDesc:'';
            var reason = value.respDesc ? value.respDesc : '';
            var tranRef = value.tranRef ? value.tranRef : '';
            var quote_id = order_id.split("-")[1];
            var encryptResponse = await encrypt(JSON.stringify(value));
            var policy_number = "TEST";

                   
            
            if (PAYMENT_SUCCESS_CODES.includes(respCode)) {
                isFailed = 0;
                message = EMAILCONFIG.Payment_Success;
            }
            else {
                isFailed = 1;
                if (PAYMENT_FAILED_CODES.includes(payStatus)) {
                    message = EMAILCONFIG.Payment_Failure;
                }
                else if (PAYMENT_CANCELLED_CODES.includes(payStatus)) {
                    message = EMAILCONFIG.Payment_Cancelled;
                }
                else if (PAYMENT_PENDING_CODES.includes(payStatus)) {
                    message = EMAILCONFIG.Payment_Pending;
                }
                else {
                    message = EMAILCONFIG.Payment_Rejected;
                }
            }
             logger.info("quote_id--"+quote_id);
            logger.info("order_id--"+order_id);
            logger.info("amount--"+amount);
            logger.info("cardType--"+cardType);
            logger.info("respCode--"+respCode);
            logger.info("payStatus--"+payStatus);
            logger.info("reason--"+reason);
            logger.info("encryptResponse--"+encryptResponse);
            logger.info("tranRef--"+tranRef);
            logger.info("isFailed--"+isFailed); 
            logger.info("message--"+message); 
/*            quote_id = "QUA422";
            order_id = "INV-QUA422-52961"
            amount = 93.1;
            cardType="CREDIT";
            respCode = "003";
            payStatus = "failed";
            reason="Unable to authenticate card holder";
            encryptResponse="QuFk4tf0YfqGvKmiPXCGTjhOwEG/yaqwWp2DeSLMJ/wenujS/6T2JyS17c/nbDiuIkR8Yf70KdTXkTSnUi9cD3EXbZJDsf3dQ1IgQ64OTF1c8bElASOwC9P2T3PsINQcQIXfnZhJHY1DSmujo/SxWlfrruSMKablpvQdoWipapVD2t9WaFSyjq4y40Ctg65A/t/jR6qFSI5+Gd8MqmrJBfcC6WOQ1Y2JyQ08yBJ2+6mjFqpnNnYov8nu7ORc9+i8HVxw+1ueGokWxDH1a0l1a+itUh8MIUlIMgMiC1uZJfUzyln3Mjqqy2rTciq+dK8DXpHB6mH/fQIKn5ORybikLpn5QoLnCJy2HYeacpDy4XyZENQt+DPbgE7lbfRsYgDPU202/da5Dn95HVFTSqLY07UGe+8ID8w+SsSmXrqoio4HXMPeNNNnPN+dLhJJXOmHL7GPgkDKrwp3MzET4Pd/DcmbU";
            tranRef="8346966";
            isFailed=1;
            message="Your payment has failed";*/

          /*  if (reason.toUpperCase() == "SUCCESS") {
                policynum = await getPolicyNumber(reason);
            }*/
/*            console.log(quote_id + ',' + policy_number + ',' + order_id + ',' + amount + ',' + cardType + ',' + respCode + ',' + payStatus + ',' + reason + ',' + encryptResponse + ',' + tranRef + ',' + isFailed + ',' + message);*/
            logger.info(quote_id + ',' + policy_number + ',' + order_id + ',' + amount + ',' + cardType + ',' + respCode + ',' + payStatus + ',' + reason + ',' + encryptResponse + ',' + tranRef + ',' + isFailed + ',' + message);
            await sequelize.query(
    `CALL AddUpdatePayment(:quote_id, :policy_number, :order_id, :amount, :payment_type, 
    :response_code, :payment_status, :payment_reason, :payment_response, 
    :transaction_ref, :is_failed, :message, :status, :user_id)`,
                {
                    replacements: {
                        quote_id: quote_id, policy_number: policy_number, order_id: order_id, amount: amount, payment_type: cardType, response_code: respCode,
                        payment_status: respCode, payment_reason: reason, payment_response: encryptResponse, transaction_ref: tranRef,
                        is_failed: isFailed, message: message, status: true, user_id: "BackendAdmin"
                    }
                }).then(async function (response) {
                    console.log("Success");
                    logger.info('Response', response[0].Result);
                    logger.info('Transaction Response Details Updated Successfully');
                    if (response[0].Result == 1) {
                        console.log("1");
                        if (PAYMENT_SUCCESS_CODES.includes(respCode)) {
                            logger.info('success');
                            //const htmlval = await generatepolicypdf(quote_id);
                            //if (htmlval != "") {
                            //    const filegenPolicy = await generatePDFFile(quote_id, htmlval, "Policy_");
                            //    if (filegenPolicy != null && filegenPolicy != "") {
                             //      await generateinvoicepdf(quote_id, 'paid', EMAILCONFIG.Payment_Successful_EmailType);
                            //    }
                            //}
                           /* if (policynum != null && policynum !='')
                                var gencovernote = await generatecovernotepdf(quote_id, policynum);
                            if (gencovernote)*/
                            await emailController.generateinvoicepdf(quote_id, 'paid', EMAILCONFIG.Payment_Successful_EmailType);
                            
                        }
                        else if (PAYMENT_FAILED_CODES.includes(payStatus)) {
                            logger.info('failed');
                            await emailController.generateinvoicepdf(quote_id, 'failed', EMAILCONFIG.Payment_Failed_EmailType);
                        }
                        else if (PAYMENT_CANCELLED_CODES.includes(payStatus)) {
                            logger.info('canceled');
                            await emailController.generateinvoicepdf(quote_id, 'cancelled', EMAILCONFIG.Payment_Cancelled_EmailType);
                        }
                        else if (PAYMENT_PENDING_CODES.includes(payStatus)) {
                            logger.info('pending');
                            await emailController.generateinvoicepdf(quote_id, 'pending', EMAILCONFIG.Payment_Pending_EmailType);
                        }
                        else {
                            logger.info('rejected');
                            await emailController.generateinvoicepdf(quote_id, 'rejected', EMAILCONFIG.Payment_Rejected_EmailType);
                        }
                        return false;
                    } else {
                        logger.info('Already email sent for this quote_id :', quote_id);
                    }
                    return res.send({ success: true });
                }).catch(function (err) {
                    logger.info("Email me quote response method error" + err.message);
                    logger.error(
                        "Error inside Email me quote response. Error:",
                        err.message
                    );
                    res.status(401).send({
                        isSuccess: true,
                        data: null,
                        message: 'Error in Email me quote response create function ' + err.message
                    })
            });
        }
        else {
            logger.info('Payment response is empty :', value);
            return res.send({ success: false });
        }
    }
    catch (e) {
        logger.info("Cannot update Process Payment Response: ", e.message);
        logger.error("Cannot update Process Payment Response: ", e);
        return res.send({ success: false });
    }
};


exports.selectPaymentresponse = async (req, res) => {
    console.log("11")
    var order_id = req.body.order_id;
    console.log("22")
    
    if (!order_id) {
        res.status(400).send({
            message: "order_id can not be empty!"
        });
        return;
    }
    console.log("33")
    
    try {
        logger.info("## Inside selectPaymentresponse method ##");
                console.log("44")
         
                logger.info('Calling Stored Procedure GetSelectPaymentResponse(:order_id)');
                console.log("55")
    
                sequelize.query('CALL GetSelectPaymentResponse(:order_id)',
                    { replacements: { order_id: order_id } }).then(async function (response) {
                         response=Object.values(response[0]);
                              logger.info('selectPaymentresponse_' + order_id, 'Details Fetched from DB Successfully');
                        return res.send({ 
                            order_id: response[0],
                            quote_id: response[1],
                            payment_status: response[2],
                            reason: response[3],
                            transaction_ref: response[4],
                            message: response[5],
                            transaction_response: response[6]
                        });
                        
                        logger.info('selectPaymentresponse_' + order_id, 'Details Sent Successfully');
               
                }).catch(err => {
                        console.log("Erroro message", err.message);
                        logger.error(
                            "Error inside GetQuoteDetails method. Error:",
                            err.message
                        );
                });
                        console.log("66")
    
           
    }
    catch (err) {
        logger.error('Exception caught inside selectPaymentresponse catch block. Error:', err.message);
    }
};

exports.ManualPaymentPaid = async (req, res) => {

    try {
            await emailController.generateinvoicepdf('QUA587', 'paid', EMAILCONFIG.Payment_Successful_EmailType);
            return res.send({ success: true });
            return false
            let policynum = "test";
            sequelize.query(`CALL AddUpdatePayment(:QuoteID,:PolicyID, :OrderID, :Amount, :PaymentType, :ResponseCode, :PaymentStatus, :PaymentReason, :PaymentResponse, :TransactionRef, :isFailed, :Message, :Status, :UserID)`,
                {
                    replacements: {
                        QuoteID: quoteID, PolicyID: policynum, OrderID: orderId, Amount: req.body.Amount, PaymentType: "Manual", ResponseCode: "0000",
                        PaymentStatus: "0000", PaymentReason: "SUCCESS", PaymentResponse: "", TransactionRef: "6765943792",
                        isFailed: 0, Message: "Thank You for your order", Status: true, UserID: "BackendAdmin"
                    }
                }).then(async function (response) {
                    logger.info('Response', response[0].Result);
                        logger.info('Transaction Response Details Updated Successfully');
                        if (response[0].Result == 1) {
                            
                        } else {
                            logger.info('Already email sent for this QuoteID :', quoteID);
                        }
                        return res.send({ success: true });
                }).error(function (err) {
                    logger.error('Error inside ManualPaymentPaid. Error:', err.message);
                    res.send(JSON.stringify(err.message));
                });
        }
        catch (e) {
            logger.error("Cannot do manual Payment Response: ", e);
            res.send(JSON.stringify(e));
        }
};