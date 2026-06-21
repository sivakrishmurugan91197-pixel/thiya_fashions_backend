const jwt = require('jsonwebtoken');
const { encrypt, decrypt } = require("./Crypto");
const { sequelize, Sequelize } = require("../models");
const dsTHMail = require("@sendgrid/mail");
const Promise = require("bluebird");
const pdf = Promise.promisifyAll(require('html-pdf'));
var fs = require('fs');
const logger = require('../utils/logger');
var format = require('format-number');
const { AUTH, MESSAGES, LANGUAGE, EMAILCONFIG } = require('../config/constants');
const moment = require('moment');

var formatter = new Intl.NumberFormat('en', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2
});

exports.generateQuotePDF = async (quoteDetails) => {
  logger.info("## Inside generateQuotePDF method ##");
  var name = quoteDetails.encrypted_full_name;
  var clinic = quoteDetails.encrypted_clinic_name;
  var mobNumber = quoteDetails.encrypted_mobile_number;
  var emailID = quoteDetails.encrypted_email_address;
   var quoteID = quoteDetails.quote_id;
  try {
    var html = fs.readFileSync(process.env['quote_pdf_template_file'], 'utf8');
    html = html.replace('#name#', name).replace(new RegExp('#QuoteID#', 'g'), quoteDetails.quote_id).replace('#email#', emailID).replace('#phone#', mobNumber);
    html = html.replace('#classification#', quoteDetails.classification).replace('#clinicname#', clinic).replace('#startdate#', moment(quoteDetails.encrypted_start_date).format('DD/MM/YYYY')).replace('#enddate#', moment(quoteDetails.encrypted_end_date).format('DD/MM/YYYY')).replace('#liability#', quoteDetails.Liabilities);
    html = html.replace('#totalpremium#', formatter.format(quoteDetails.total_premium)).replace('#discount#', formatter.format(quoteDetails.discount_amount)).replace('#netpremium#', formatter.format(quoteDetails.net_premium));
    html = html.replace('#tax#', formatter.format(quoteDetails.tax_amount)).replace('#finalpremium#', formatter.format(quoteDetails.final_premium));
    html = html.replace('#quotedate#', moment(new Date().toISOString().slice(0, 10).replace(/T.*/, '').split('-').reverse().join('-')).format('MM/DD/YYYY'));
    console.log("html==",html)
    //let param = await encrypt(qd.quote_id) + '&Q';
    //let qryString = appConfigs.app_path + "/teaser_summary?quote_id=" + param;
	  //html = html.replace("#QT#", qryString);
    logger.info("About to Write Quote PDF File");
    // var options = { format: 'Letter', phantomPath: './node_modules/phantomjs-prebuilt/bin/phantomjs' };
    var options = { format: "Letter" };
    //var filename="test";
    
    var filename = await generatePDFFile(quoteID, html, "");
    logger.info("filename",filename);
    logger.info("About to end Quote PDF File");
    console.log("generatequote pdf calling");
  
    logger.info(filename);
    console.log("filename",filename);
    console.log("quoteID",quoteID);
    console.log("name",name);
    console.log("mobNumber",mobNumber);
    console.log("emailID",emailID);

    await exports.sendemailPDF(quoteID, name, mobNumber, "Quotation", emailID);
   // return false;
    if (filename != null && filename != "") {

      //res.send('{"Status": "Success", "Message": "PDF File Generated Successfully"}');
    }
    //}
    logger.info("Email Details Updated Successfully");
  } catch (err) {
    console.log("error",err);
    logger.error(
      "Exception caught inside generatepdf catch block. Error:",
      err
    );
    res.send('{"Status": "Failure", "Message": "' + err + '"}');
  }
};

exports.generateinvoicepdf = async (quote_id, stamp_name, invoice_email) => {
    logger.info("generateinvoicepdf  method calling");
    var encrkey = process.env.ENCRYPTION_KEY;
    let quoteDetails1 = await getQuoteDetails(quote_id, encrkey);
    let quoteDetails = quoteDetails1[0];
     var name = quoteDetails.encrypted_full_name;
    var clinic = quoteDetails.encrypted_clinic_name;
    var mobNumber = quoteDetails.encrypted_mobile_number;
    var emailID = quoteDetails.encrypted_email_address;
    var quoteID = quoteDetails.quote_id;
    logger.info("generateinvoicepdf quoteID"+quoteID);

   try {
      var claims_history_desc_html = "";
      var claims_awareness_desc_html = "";
      var disciplinary_history_desc_html = "";
      var criminal_history_desc_html = "";
      var html = fs.readFileSync(process.env['invoice_pdf_template_file'], 'utf8');
      html = html.replace('#name#', name).replace('#fullname#', name).replace(new RegExp('#QuoteID#', 'g'), quoteDetails.quote_id).replace('#email#', emailID).replace('#phone#', mobNumber);
      html = html.replace('#classification#', quoteDetails.classification).replace('#clinicname#', clinic).replace('#startdate#', moment(quoteDetails.encrypted_start_date).format('DD/MM/YYYY')).replace('#enddate#', moment(quoteDetails.encrypted_end_date).format('DD/MM/YYYY')).replace('#liability#', quoteDetails.Liabilities).replace('#idcardnumber#', quoteDetails.encrypted_national_card_number).replace('#dob#', moment(quoteDetails.encrypted_date_of_birth).format('DD/MM/YYYY')).replace('#income#', quoteDetails.encrypted_income).replace('#nopatients#', quoteDetails.encrypted_no_patients_served).replace('#address#', quoteDetails.encrypted_practice_primary_location);
      html = html.replace('#claimhistory#', quoteDetails.encrypted_claims_history).replace('#claimsawareness#', quoteDetails.encrypted_claims_awareness).replace('#disciplinaryhistory#', quoteDetails.encrypted_disciplinary_history).replace('#criminalhistory#', quoteDetails.encrypted_criminal_history);
      html = html.replace('#totalpremium#', formatter.format(quoteDetails.total_premium)).replace('#discount#', formatter.format(quoteDetails.discount_amount)).replace('#netpremium#', formatter.format(quoteDetails.net_premium));
      html = html.replace('#tax#', formatter.format(quoteDetails.tax_amount)).replace('#finalpremium#', formatter.format(quoteDetails.final_premium));
      html = html.replace('#quotedate#', moment(new Date().toISOString().slice(0, 10).replace(/T.*/, '').split('-').reverse().join('-')).format('MM/DD/YYYY'));

      console.log("html==",html)
      if (quoteDetails.encrypted_claims_history_desc && quoteDetails.encrypted_claims_history_desc.trim() !== '') {
          claims_history_desc_html = claims_history_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          claims_history_desc_html = claims_history_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          claims_history_desc_html = claims_history_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_claims_history_desc + "</div>";
          claims_history_desc_html = claims_history_desc_html + "</div>";
          console.log("Value is null, undefined, or an empty string (even with spaces).");
      }
      if (quoteDetails.encrypted_claims_awarenes_desc && quoteDetails.encrypted_claims_awarenes_desc.trim() !== '') {
      claims_awareness_desc_html = claims_awareness_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          claims_awareness_desc_html = claims_awareness_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          claims_awareness_desc_html = claims_awareness_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_claims_awarenes_desc + "</div>";
          claims_awareness_desc_html = claims_awareness_desc_html + "</div>";
      }
      if (quoteDetails.encrypted_disciplinary_history_desc && quoteDetails.encrypted_disciplinary_history_desc.trim() !== '') {
        disciplinary_history_desc_html = disciplinary_history_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          disciplinary_history_desc_html = disciplinary_history_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          disciplinary_history_desc_html = disciplinary_history_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_disciplinary_history_desc + "</div>";
          disciplinary_history_desc_html = disciplinary_history_desc_html + "</div>";
      }
      if (quoteDetails.encrypted_criminal_history_desc && quoteDetails.encrypted_criminal_history_desc.trim() !== '') {
        criminal_history_desc_html = criminal_history_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          criminal_history_desc_html = criminal_history_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          criminal_history_desc_html = criminal_history_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_criminal_history_desc + "</div>";
          criminal_history_desc_html = criminal_history_desc_html + "</div>";
      }
      html = html.replace('#claims_history_desc_html#', claims_history_desc_html).replace('#claims_awareness_desc_html#', claims_awareness_desc_html).replace('#disciplinary_history_desc_html#', disciplinary_history_desc_html).replace('#criminal_history_desc_html#', criminal_history_desc_html);
      //let param = await encrypt(qd.quote_id) + '&Q';
      //let qryString = appConfigs.app_path + "/teaser_summary?quote_id=" + param;
      //html = html.replace("#QT#", qryString);
      logger.info("About to Write Quote PDF File");
      // var options = { format: 'Letter', phantomPath: './node_modules/phantomjs-prebuilt/bin/phantomjs' };
      var options = { format: "Letter" };
      //var filename="test";
      let paymentTypeText = '';
      let payment_svg_image = '';
      if (stamp_name == "paid") {
          paymentTypeText = "Paid Date";
          payment_svg_image = EMAILCONFIG.paid_svg;
      } else if (stamp_name == "cancelled") {
          paymentTypeText = "Cancelled Date";
          payment_svg_image = EMAILCONFIG.cancelled_svg;
      } else if (stamp_name == "rejected") {
          paymentTypeText = "Rejected Date";
          payment_svg_image = EMAILCONFIG.rejected_svg;
      } else if (stamp_name == "failed") {
          paymentTypeText = "Failed Date";
          payment_svg_image = EMAILCONFIG.failed_svg;
      } else if (stamp_name == "pending") {
          paymentTypeText = "Pending Date";
          payment_svg_image = EMAILCONFIG.rejected_svg;
      }
      html = html.replace('#paymentSVGimage#',payment_svg_image);
      var filename = await generatePDFFile(quoteID, html, "");
      logger.info("filename",filename);
      logger.info("About to end Quote PDF File");
      console.log("generatequote pdf calling");
      logger.info("quoteId"+quoteID);
      logger.info("name"+name);
      logger.info("mobNumber"+mobNumber);
      logger.info("invoice_email"+invoice_email);
      logger.info("emailID"+emailID);
   
      await exports.sendemailPDF(quoteID, name, mobNumber, invoice_email, emailID);
      if (filename != null && filename != "") {

        //res.send('{"Status": "Success", "Message": "PDF File Generated Successfully"}');
      }
      //}
      logger.info("Email Details Updated Successfully");
    } catch (err) {
      console.log("error",err);
      logger.error(
        "Exception caught inside generatepdf catch block. Error:",
        err
      );
      res.send('{"Status": "Failure", "Message": "' + err + '"}');
    }

};

exports.generateQuoteNDPDF = async (quote_id) =>{
  console.log("generateQuoteNDPDF");
  logger.info("generateQuoteNDPDF method calling");
  var encrkey = process.env.ENCRYPTION_KEY;
    let quoteDetails1 = await getQuoteDetails(quote_id, encrkey);
    let quoteDetails = quoteDetails1[0];
    logger.info("quoteDetails --- "+quoteDetails.encrypted_claims_history_desc);
     var name = quoteDetails.encrypted_full_name;
  var clinic = quoteDetails.encrypted_clinic_name;
  var mobNumber = quoteDetails.encrypted_mobile_number;
  var emailID = quoteDetails.encrypted_email_address;
  var quoteID = quoteDetails.quote_id;
  logger.info("quoteID ---"+quoteID);
   try {
      var claims_history_desc_html = "";
      var claims_awareness_desc_html = "";
      var disciplinary_history_desc_html = "";
      var criminal_history_desc_html = "";
      var html = fs.readFileSync(process.env['quote_nd_pdf_template_file'], 'utf8');
      html = html.replace('#name#', name).replace('#fullname#', name).replace(new RegExp('#QuoteID#', 'g'), quoteDetails.quote_id).replace('#email#', emailID).replace('#phone#', mobNumber);
      html = html.replace('#classification#', quoteDetails.classification).replace('#clinicname#', clinic).replace('#startdate#', moment(quoteDetails.encrypted_start_date).format('DD/MM/YYYY')).replace('#enddate#', moment(quoteDetails.encrypted_end_date).format('DD/MM/YYYY')).replace('#liability#', quoteDetails.Liabilities).replace('#idcardnumber#', quoteDetails.encrypted_national_card_number).replace('#dob#', moment(quoteDetails.encrypted_date_of_birth).format('DD/MM/YYYY')).replace('#income#', quoteDetails.encrypted_income).replace('#nopatients#', quoteDetails.encrypted_no_patients_served).replace('#address#', quoteDetails.encrypted_practice_primary_location);
      html = html.replace('#claimhistory#', quoteDetails.encrypted_claims_history).replace('#claimsawareness#', quoteDetails.encrypted_claims_awareness).replace('#disciplinaryhistory#', quoteDetails.encrypted_disciplinary_history).replace('#criminalhistory#', quoteDetails.encrypted_criminal_history);
      html = html.replace('#totalpremium#', formatter.format(quoteDetails.total_premium)).replace('#discount#', formatter.format(quoteDetails.discount_amount)).replace('#netpremium#', formatter.format(quoteDetails.net_premium));
      html = html.replace('#tax#', formatter.format(quoteDetails.tax_amount)).replace('#finalpremium#', formatter.format(quoteDetails.final_premium));
      html = html.replace('#quotedate#', moment(new Date().toISOString().slice(0, 10).replace(/T.*/, '').split('-').reverse().join('-')).format('MM/DD/YYYY'));

      console.log("html==",html)
      if (quoteDetails.encrypted_claims_history_desc && quoteDetails.encrypted_claims_history_desc.trim() !== '') {
          claims_history_desc_html = claims_history_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          claims_history_desc_html = claims_history_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          claims_history_desc_html = claims_history_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_claims_history_desc + "</div>";
          claims_history_desc_html = claims_history_desc_html + "</div>";
          console.log("Value is null, undefined, or an empty string (even with spaces).");
      }
      if (quoteDetails.encrypted_claims_awarenes_desc && quoteDetails.encrypted_claims_awarenes_desc.trim() !== '') {
      claims_awareness_desc_html = claims_awareness_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          claims_awareness_desc_html = claims_awareness_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          claims_awareness_desc_html = claims_awareness_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_claims_awarenes_desc + "</div>";
          claims_awareness_desc_html = claims_awareness_desc_html + "</div>";
      }
      if (quoteDetails.encrypted_disciplinary_history_desc && quoteDetails.encrypted_disciplinary_history_desc.trim() !== '') {
        disciplinary_history_desc_html = disciplinary_history_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          disciplinary_history_desc_html = disciplinary_history_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          disciplinary_history_desc_html = disciplinary_history_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_disciplinary_history_desc + "</div>";
          disciplinary_history_desc_html = disciplinary_history_desc_html + "</div>";
      }
      if (quoteDetails.encrypted_criminal_history_desc && quoteDetails.encrypted_criminal_history_desc.trim() !== '') {
        criminal_history_desc_html = criminal_history_desc_html + "<div style='margin-top: 10px; padding-left: 15px;'>";
          criminal_history_desc_html = criminal_history_desc_html + "<div style='font-size: 12px; font-weight: 600; color: #0A2540; margin-bottom: 5px;'>Additional Details</div>";
          criminal_history_desc_html = criminal_history_desc_html + "<div style='font-size: 12px; color: #0A2540; line-height: 1.5; background-color: #f9f9f9; padding: 10px;'>" + quoteDetails.encrypted_criminal_history_desc + "</div>";
          criminal_history_desc_html = criminal_history_desc_html + "</div>";
      }
      html = html.replace('#claims_history_desc_html#', claims_history_desc_html).replace('#claims_awareness_desc_html#', claims_awareness_desc_html).replace('#disciplinary_history_desc_html#', disciplinary_history_desc_html).replace('#criminal_history_desc_html#', criminal_history_desc_html);
      //let param = await encrypt(qd.quote_id) + '&Q';
      //let qryString = appConfigs.app_path + "/teaser_summary?quote_id=" + param;
      //html = html.replace("#QT#", qryString);
      logger.info("About to Write Quote PDF File");
      // var options = { format: 'Letter', phantomPath: './node_modules/phantomjs-prebuilt/bin/phantomjs' };
      var options = { format: "Letter" };
      //var filename="test";
      
      var filename = await generatePDFFile(quoteID, html, "");
      logger.info("filename",filename);
      logger.info("About to end Quote PDF File");
      console.log("generatequote pdf calling");
   
      await exports.sendemailPDF(quoteDetails.quote_id, name, mobNumber, "Negative_Declaration_Cust", emailID);
      if (filename != null && filename != "") {

        //res.send('{"Status": "Success", "Message": "PDF File Generated Successfully"}');
      }
      //}
      logger.info("Email Details Updated Successfully");
    } catch (err) {
      console.log("error",err);
      logger.error(
        "Exception caught inside generatepdf catch block. Error:",
        err
      );
      res.send('{"Status": "Failure", "Message": "' + err + '"}');
    }

};
const getQuoteDetails = async (quote_id, encrkey) => {
    logger.info("getQuoteDetails Method Calling");
    logger.info("Quote ID"+quote_id);
    return new Promise(async (resolve, reject) => {
        try {
            sequelize.query('CALL GetQuoteDetails(:quote_id, :type, :encrkey)', 
                {   
                    replacements: {
                        quote_id: quote_id,
                        type:"negativedeclaration",
                        encrkey:encrkey
                    },
                    raw: true,
                    type: Sequelize.QueryTypes.SELECT
                }
            ).then(async function (response) {
                  logger.info("getQuoteDetails Method Response Successfully returns");
                    response=Object.values(response[0]);
                    resolve(response);
            }).catch(err => {
                    console.log("Erroro message", err.message);
                    logger.error(
                        "Error inside GetQuoteDetails method. Error:",
                        err.message
                    );
                    reject(false);
            });
        } catch (err) {
            console.log("Erroro message1", err.message);
              logger.error('Exception caught inside GetQuoteDetails catch block for Error:', err.message);
             reject(false);
        }
    });

};

const generatePDFFile = async (QuoteID, html1, filetype) => {
    logger.info("generatePDFFile Method Calling");
    logger.info("QuoteID --"+QuoteID);

  return new Promise(async (resolve, reject) => {
    var quoteID = QuoteID;
    
    try {
      logger.info("## Inside pdf generation method ##", QuoteID);
      logger.info("About to Write Policy PDF File");
      var options = {
        format: "A4",
		 
        //filename: process.env['pdf_output_file'] + filetype + quoteID + '.pdf',
         phantomPath:"/var/www/vhosts/ja.deals/jydvvdjqprwltyeymkwwswvstdhqonedaj.doctor.insure/node_modules/phantomjs-prebuilt/bin/phantomjs",
        filename:
          filetype == "CoverNote_"
            ? process.env["pdf_output_file"] + gPolicyNumber + ".pdf"
            : process.env["pdf_output_file"] + filetype + quoteID + ".pdf",
       border: {
          color: "black",
           "top": "0cm",            // default is 0, units: mm, cm, in, px
		   "right": "0cm",
		   "bottom": "0cm",
		   "left": "0cm"
        },
		  /* footer: {
            height: '1cm',
            contents: {
                default: '<div style="text-align: center; font-size: 10px;">Page {{page}} of {{pages}}</div>' // Footer content with page numbers
            }
        },*/
         /* header: {

              height: '1mm',

            },*/

      /*footer: {

              height: '13mm',

        top: "0.1mm",

              contents: {

                default:

                  '<div id="pageFooter" style="text-align: center; font-size: 12px;">{{page}}/{{pages}}</div>',

              },

            },*/
    	 
		//margin: "0cm",
    width: "238mm",  // A4 width in mm
    height: "328mm"

    /*  footer: {

              height: '10mm',

        top: "0.8mm",

              contents: {

                default:

                  '<div id="pageFooter" style="text-align: center; font-size: 12px;">{{page}}/{{pages}}</div>',

              },

            },*/
      };
      let res = await pdf.createAsync(html1, options);
      //await pdf.create(html1, options).toFile(process.env['pdf_output_file'] + 'Policy_' + quoteID + '.pdf', async function (err, resp) {
      //    if (err) {
      //        logger.error('Error Occurred. Error:', err);
      //        return 0;
      //    }
      //    logger.debug(resp);
      //    logger.info('## Policy PDF File Created ##');
      //    retval = 1;
      //});
      resolve(res.filename);
    } catch (err) {
      logger.error(
        "Exception caught inside pdf generation catch block. Error:",
        err
      );
      reject(null);
    }
  });
};

exports.sendemailPDF = async (QuoteID, custName, phoneNum, EmailType, EmailID) => {
        logger.info("sendemailPDF Method Calling");

    return new Promise(async (resolve, reject) => {
        var quoteID = QuoteID;
        var name = custName;
        var mobNumber = phoneNum;
        var emailID = EmailID;
        var emailType = EmailType;
    logger.info("quoteID"+quoteID);
    logger.info("name"+name);
    logger.info("mobNumber"+mobNumber);
    logger.info("emailType"+emailType);
        // Validate request
        if (emailID != null && emailID != '') {
            try {
                logger.info("## Inside sendemail method ##");
                dsTHMail.setApiKey(process.env['SENDGRID_API_KEY']);
                let fromMail, bccMail, mailSubject, mailBody, mailAttachment,replyTo;
                if (emailType == EMAILCONFIG.Quotation_EmailType) {
                    let param = await encrypt(quoteID) + '&Q';
                    logger.info("param"+param);
                    logger.info("decrypt"+decrypt(param));
                    let type="emailMe";
                    let qryString = EMAILCONFIG.app_path + "?type=" + type + "?quoteid=" + param;
                    logger.info("Quotation qrtstring"+ qryString)
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Quotation + quoteID;
                    replyTo = process.env['From_Query_Email'];
                    mailBody = EMAILCONFIG.email_Quotation_body;
                    mailBody = mailBody.replace('#Name#', name).replace('#QUT#', qryString);
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        },
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + 'Policy Wordings.pdf').toString("base64"),
                            filename: 'Policy Wordings.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
          logger.info("success");
                }else if (emailType == EMAILCONFIG.Incomplete_Quotation_EmailType) {
                    console.log("caling11");
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Incomplete_Quotation + quoteID;
                    mailBody = EMAILCONFIG.email_Incomplete_Quotation_body;
                    let param = await encrypt(quoteID) + '&Q';
                    let qryString = EMAILCONFIG.app_path + "?quoteid=" + param;
                    logger.info("QueryString", qryString);
                    console.log("calling22")
                    mailBody = mailBody.replace('#Name#', name).replace('#QT#', qryString).replace("#QUOTEID#",quoteID);
                    replyTo = process.env['From_Query_Email'];
                    console.log("calling22")
                    mailAttachment = []
                    console.log("calling1")
                } else if (emailType == EMAILCONFIG.Neg_Declare_Approved_Cust_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                     let param = await encrypt(quoteID) + '&Q';
                    logger.info("param"+param);
                    logger.info("decrypt"+decrypt(param));
                    let type="ndQuote";
                    let qryString = EMAILCONFIG.app_path + "?type=" + type + "?quoteid=" + param;
                    mailSubject = EMAILCONFIG.Subject_Negative_Declaration_Approved_Cust + quoteID;
                    mailBody = EMAILCONFIG.email_Neg_Declare_Approved_Cust_body;
                    mailBody = mailBody.replace('#Name#', name).replace('#QUNDT#', qryString);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = []
                }else if (emailType == EMAILCONFIG.Neg_Declare_Rejected_Cust_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Negative_Declaration_Rejected_Cust + quoteID;
                    mailBody = EMAILCONFIG.email_Neg_Declare_Rejected_Cust_body;
                    mailBody = mailBody.replace('#Name#', name);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = []
                }else if (emailType == EMAILCONFIG.Neg_Declare_Cust_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Negative_Declaration_Cust + quoteID;
                    mailBody = EMAILCONFIG.email_Neg_Declare_Cust_body;
                    mailBody = mailBody.replace('#Name#', name);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        },
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + 'Policy Wordings.pdf').toString("base64"),
                            filename: 'Policy Wordings.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Neg_Declare_Internal_EmailType) {
                    fromMail = process.env['From_Query_Email'];
                    emailID = process.env['Internal_Email'];
                    mailSubject = EMAILCONFIG.Subject_Negative_Declaration_Internal + quoteID;
                    mailBody = EMAILCONFIG.email_Neg_Declare_Internal_body;
          mailBody = mailBody.replace('#QUOTEID#', quoteID);
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        },
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + 'Policy Wordings.pdf').toString("base64"),
                            filename: 'Policy Wordings.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }else if (emailType == EMAILCONFIG.Blocklist_Declare_Cust_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Blocklist_Declaration_Cust + quoteID;
                    mailBody = EMAILCONFIG.email_Blocklist_Declare_Cust_body;
                    mailBody = mailBody.replace('#Name#', name);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Blocklist_Declare_Internal_EmailType) {
                    fromMail = process.env['From_Query_Email'];
                    emailID = process.env['Internal_Email'];
                    mailSubject = EMAILCONFIG.Subject_Blocklist_Declaration_Internal + quoteID;
                    mailBody = EMAILCONFIG.email_Blocklist_Declare_Internal_body;
                    mailBody = mailBody.replace('#QUOTEID#', quoteID);
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }else if (emailType == EMAILCONFIG.Claim_Blocklist_Declare_Internal_EmailType) {
                    fromMail = EMAILCONFIG.env['From_Query_Email'];
                    emailID = EMAILCONFIG.env['Internal_Email'];
                    mailSubject = EMAILCONFIG.Subject_Claim_Blocklist_Declaration_Internal + quoteID;
                    mailBody = EMAILCONFIG.email_Claim_Blocklist_Declare_Internal_body;
                    mailBody = mailBody.replace('#QUOTEID#', quoteID);
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Approved_Neg_Declare_Cust_EmailType) {
                    let param = await encrypt(quoteID) + '&P';
                    let qryString = EMAILCONFIG.app_path + "?quoteid=" + param;
                    //let qryString = appConfig.app_approvedpath + "?quoteid=" + param;

                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Approved_Negative_Declare_Cust + quoteID;
                    mailBody = EMAILCONFIG.email_Approved_Neg_Declare_Cust_body;
                    mailBody = mailBody.replace('#Name#', name).replace('#QT#', qryString);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Rejected_Neg_Declare_Cust_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Rejected_Negative_Declare_Cust + quoteID;
                    mailBody = EMAILCONFIG.email_Rejected_Neg_Declare_Cust_body;
                    mailBody = mailBody.replace('#Name#', name);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + quoteID + '.pdf').toString("base64"),
                            filename: quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Payment_Successful_EmailType) {
                    fromMail = process.env['From_Paid_Policy_Email'];
                    bccMail = process.env['BCC_Paid_Policy_Email'].split(',');
                    mailSubject = EMAILCONFIG.Subject_Payment_Successful + quoteID;
                    mailBody = EMAILCONFIG.email_Payment_Successful_body;
                    mailBody = mailBody.replace('#Name#', name);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] +  quoteID + '.pdf').toString("base64"),
                          //  filename: 'Premium_Receipt_' + quoteID + '.pdf',
                            filename: quoteID + '.pdf',
                      
                            type: "application/pdf",
                            disposition: "attachment"
                        }
/*                        ,
                        {
                            //content: fs.readFileSync(process.env['pdf_output_file'] + 'Policy_' + quoteID + '.pdf').toString("base64"),
                            //filename: 'Policy_' + quoteID + '.pdf',
                            content: fs.readFileSync(process.env['pdf_output_file'] + gPolicyNumber + '.pdf').toString("base64"),
                            filename: gPolicyNumber + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }*/
                    ]
                }
                else if (emailType == EMAILCONFIG.Payment_Pending_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Payment_Pending + quoteID;
                    mailBody = EMAILCONFIG.email_Payment_Pending_body;
                    mailBody = mailBody.replace('#Name#', name);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + 'Premium_Receipt_' + quoteID + '.pdf').toString("base64"),
                            filename: 'Premium_Receipt_' + quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Payment_Rejected_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    let param = await encrypt(quoteID) + '&Q';
          let qryString = EMAILCONFIG.app_path + "?quoteid=" + param;
                    mailSubject = EMAILCONFIG.Subject_Payment_Rejected + quoteID;
                    mailBody = EMAILCONFIG.email_Payment_Rejected_body;
                    mailBody = mailBody.replace('#Name#', name);
          mailBody = mailBody.replace('#Name#', name).replace('#QT#', qryString);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + 'Premium_Receipt_' + quoteID + '.pdf').toString("base64"),
                            filename: 'Premium_Receipt_' + quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Payment_Cancelled_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    mailSubject = EMAILCONFIG.Subject_Payment_Cancel + quoteID;
                    mailBody = EMAILCONFIG.email_Payment_Cancel_body
                    mailBody = mailBody.replace('#Name#', name);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + 'Premium_Receipt_' + quoteID + '.pdf').toString("base64"),
                            filename: 'Premium_Receipt_' + quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
                else if (emailType == EMAILCONFIG.Payment_Failed_EmailType) {
                    fromMail = process.env['From_Quote_Email'];
                    bccMail = process.env['BCC_Quote_Email'];
                    let param = await encrypt(quoteID) + '&Q';
                    let qryString = EMAILCONFIG.app_path + "?quoteid=" + param;
                    mailSubject = EMAILCONFIG.Subject_Payment_Failed + quoteID;
                    mailBody = EMAILCONFIG.email_Payment_Failed_body;
                    mailBody = mailBody.replace('#Name#', name);
                    mailBody = mailBody.replace('#Name#', name).replace('#QT#', qryString);
                    replyTo = process.env['From_Query_Email'];
                    mailAttachment = [
                        {
                            content: fs.readFileSync(process.env['pdf_output_file'] + 'Premium_Receipt_' + quoteID + '.pdf').toString("base64"),
                            filename: 'Premium_Receipt_' + quoteID + '.pdf',
                            type: "application/pdf",
                            disposition: "attachment"
                        }
                    ]
                }
        logger.info("info1")
       
                const msg = {
                    to: emailID,
                    from: fromMail,
                    bcc: bccMail,
                    subject: mailSubject,
                    replyTo:replyTo,
                    html: mailBody.replace('#footer#', EMAILCONFIG.email_footer).replace('#header#', EMAILCONFIG.email_header),
                    attachments: mailAttachment
                };
        logger.info("info2")
                dsTHMail.send(msg)
                  .then(() => logger.info('✅ Email sent successfully!'))
  .catch(error => {
    console.error('❌ SendGrid Error:', JSON.stringify(error.response?.body, null, 2));
    logger.info('❌ SendGrid Error:'+ JSON.stringify(error.response?.body, null, 2));
});

        logger.info("info3")
                console.log("Success Sent");
                resolve(true);
                logger.debug('Response Sent Successfully');               
            }
            catch (err) {
                logger.error('Exception caught inside sendemail catch block. Error:'+ err.message);
                reject(false);
                //await updateemaildetails(quoteID, name, mobNumber, emailType, emailID, false, error.message, true, name);
                //res.send('{"Status": "Failure", "Message": "' + err.message + '"}');
            }
        }
        else {
            reject(false);
            /*   await updateemaildetails(quoteID, name, mobNumber, emailType, emailID, false, "No Email ID", true, name);*/
        }
    });
};


