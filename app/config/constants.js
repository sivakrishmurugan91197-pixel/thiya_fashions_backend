require('dotenv').config();

exports.AUTH = {
    CLIENT_ID: process.env.CLIENT_ID,
    SECRET_KEY: process.env.SECRET_KEY
};

exports.LANGUAGE = {
    EN: 'en',
    TH: 'th'
};

exports.MESSAGES = {
    'en': {  
        SUCCESS: 'Successfully Fetched',
        FAILED: 'Unsuccessful',
    },
    'th': {  
        SUCCESS: 'Successfully Fetched',
        FAILED: 'Unsuccessful',
    }
};
exports.EMAILCONFIG ={
    app_path: "https://devdoctorshieldth.doctor.insure/",
    quote_pdf_template_file:"./app/AttachmentFiles/QuotationTemplate.html",
    Quotation_EmailType: "Quotation",
    email_header: `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
      <title>DoctorShield</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
         #outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
      </style>
      <link href="https://fonts.googleapis.com/css?family=Inter:700,400,600" rel="stylesheet" type="text/css">
      <style type="text/css">
      </style>
      <style type="text/css">
         @media only screen and (min-width:599px){.xc568{width:568px!important;max-width:568px;}.xc316{width:316px!important;max-width:316px;}.xc0{width:0px!important;max-width:0;}.xc248{width:248px!important;max-width:248px;}.xc36{width:36px!important;max-width:36px;}.xc536{width:536px!important;max-width:536px;}.xc559{width:559px!important;max-width:559px;}.xc378{width:378px!important;max-width:378px;}.xc16{width:16px!important;max-width:16px;}.xc142{width:142px!important;max-width:142px;}}
      </style>
      <style media="screen and (min-width:599px)">.moz-text-html .xc568{width:568px!important;max-width:568px;}.moz-text-html .xc316{width:316px!important;max-width:316px;}.moz-text-html .xc0{width:0px!important;max-width:0;}.moz-text-html .xc248{width:248px!important;max-width:248px;}.moz-text-html .xc36{width:36px!important;max-width:36px;}.moz-text-html .xc536{width:536px!important;max-width:536px;}.moz-text-html .xc559{width:559px!important;max-width:559px;}.moz-text-html .xc378{width:378px!important;max-width:378px;}.moz-text-html .xc16{width:16px!important;max-width:16px;}.moz-text-html .xc142{width:142px!important;max-width:142px;}</style>
      <style type="text/css">
         @media only screen and (max-width:598px){table.fwm{width:100%!important;}td.fwm{width:auto!important;}}
      </style>
      <style type="text/css">
         u+.emailify .gs{background:#000;mix-blend-mode:screen;display:inline-block;padding:0;margin:0;}u+.emailify .gd{background:#000;mix-blend-mode:difference;display:inline-block;padding:0;margin:0;}p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}u+.emailify a,#MessageViewBody a,a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important;}td.b .klaviyo-image-block{display:inline;vertical-align:middle;}
         @media only screen and (max-width:599px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}u+.emailify .glist{margin-left:1em!important;}td.ico.v>div.il>a.l.m,td.ico.v .mn-label{padding-right:0!important;padding-bottom:16px!important;}td.x{padding-left:0!important;padding-right:0!important;}.fwm img{max-width:100%!important;height:auto!important;}.aw img{width:auto!important;margin-left:auto!important;margin-right:auto!important;}.ah img{height:auto!important;}td.b.nw>table,td.b.nw a{width:auto!important;}td.stk{border:0!important;}td.u{height:auto!important;}br.sb{display:none!important;}.thd-1 .i-thumbnail{display:inline-block!important;height:auto!important;overflow:hidden!important;}.hd-1{display:block!important;height:auto!important;overflow:visible!important;}.ht-1{display:table!important;height:auto!important;overflow:visible!important;}.hr-1{display:table-row!important;height:auto!important;overflow:visible!important;}.hc-1{display:table-cell!important;height:auto!important;overflow:visible!important;}div.r.pr-16>table>tbody>tr>td,div.r.pr-16>div>table>tbody>tr>td{padding-right:16px!important}div.r.pl-16>table>tbody>tr>td,div.r.pl-16>div>table>tbody>tr>td{padding-left:16px!important}.hm-1{display:none!important;max-width:0!important;max-height:0!important;overflow:hidden!important;mso-hide:all!important;}div.g.mb-0>table>tbody>tr>td{padding-bottom:0px!important}td.x.al-c>div,td.x.al-c>div>p,td.x.al-c>p,td.x.al-c>div>h1,td.x.al-c>h1{text-align:center!important}td.b.fw-1>table{width:100%!important}td.fw-1>table>tbody>tr>td>a{display:block!important;width:100%!important;padding-left:0!important;padding-right:0!important;}td.b.fw-1>table{width:100%!important}td.fw-1>table>tbody>tr>td{width:100%!important;padding-left:0!important;padding-right:0!important;}div.r.s-32>table>tbody>tr>td>div.gtr>table>tbody>tr>td{padding-top:0!important;padding-right:0!important;padding-bottom:32px!important;padding-left:0!important;}div.c.p-100{width:100%!important;}div.g.mb-32>table>tbody>tr>td{padding-bottom:32px!important}}
         @media (prefers-color-scheme:light) and (max-width:599px){.ds-1.hd-1{display:none!important;height:0!important;overflow:hidden!important;}}
         @media (prefers-color-scheme:dark) and (max-width:599px){.ds-1.hd-1{display:block!important;height:auto!important;overflow:visible!important;}}
      </style>
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
   </head>`,
    email_footer: `<div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16 s-32" style="background:#f5f5f7;background-color:#f5f5f7;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f5f7;background-color:#f5f5f7;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:right;">
                                 <div class="xc378 ogf m c  p-100" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:bottom;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="left" class="a" style="background:transparent;font-size:0;padding:0;word-break:break-word;">
                                                <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Arial,sans-serif;font-size:13px;line-height:22px;table-layout:fixed;width:100%;border:none;">
                                                   <tr class="q " >
                                                      <td align="left" class="u" style="padding:0;height:40px;word-wrap:break-word;vertical-align:top;" width="42">
                                                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                               <td class="i  " align="left" width="100%"><img width="42" height="auto" style="display:block;width:42px;height:40px;" src="https://www.devcp.doctor.insure/assets/emails/footer-ja.png"></td>
                                                            </tr>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="16" style="font-size:0;padding:0;word-break:break-word;">
                                                <div style="height:16px;line-height:16px;">&#8202;</div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left" class="a" style="background:transparent;font-size:0;padding:0;word-break:break-word;">
                                                <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Arial,sans-serif;font-size:13px;line-height:22px;table-layout:fixed;width:100%;border:none;">
                                                   <tr class="q " >
                                                      <td align="left" class="u" style="padding:0;height:139px;word-wrap:break-word;vertical-align:middle;" width="378">
                                                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                               <td class="x  tm" align="left" width="100%" style="padding-bottom:8px;">
                                                                  <p style="Margin:0;text-align:left;px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#424245;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">2A-16-2, Plaza Sentral,&nbsp;</span></p>
                                                                  <p style="Margin:0;px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#424245;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Jalan Stesen Sentral 5,</span></p>
                                                                  <p style="Margin:0;px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#424245;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Kuala Lumpur 50470, Malaysia</span></p>
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td class="i  tm fwm" align="left" width="100%" style="padding-bottom:8px;"><img width="378" height="auto" style="display:block;width:378px;height:10px;" src="https://www.devcp.doctor.insure/assets/emails/body-line-bar.png"></td>
                                                            </tr>
                                                            <tr>
                                                               <td class="x  " align="left" width="100%">
                                                                  <p style="Margin:0;px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#6e6e73;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Whatsapp&nbsp;</span><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#424245;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">+60 1229 30700</span></p>
                                                                  <p style="Margin:0;px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#6e6e73;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Email&nbsp;</span><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#424245;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">quote@doctorshield.com</span></p>
                                                                  <p style="Margin:0;px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#6e6e73;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Website&nbsp;</span><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#424245;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">https://www.thedoctorshield.com</span></p>
                                                               </td>
                                                            </tr>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>

                                 <div class="xc16 ogf g mb-32 hm-1" style="font-size:0;text-align:left;direction:ltr;display:inline-block;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                       <tbody>
                                          <tr>
                                             <td style="padding:0;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                   <tbody></tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <div class="xc142 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:bottom;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="left" class="a" style="background:transparent;font-size:0;padding:0;word-break:break-word;">
                                                <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000000;font-family:Arial,sans-serif;font-size:13px;line-height:22px;table-layout:fixed;width:100%;border:none;">
                                                   <tr class="q " >
                                                      <td align="left" class="u" style="padding:0;height:59px;word-wrap:break-word;vertical-align:middle;" width="142">
                                                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                            <tr>
                                                               <td class="i  " align="left" width="100%"><img width="131" height="auto" style="display:block;width:131px;height:59px;" src="https://www.devcp.doctor.insure/assets/emails/footer-chubb.png"></td>
                                                            </tr>
                                                         </table>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td class="16" style="font-size:0;padding:0;word-break:break-word;">
                                                <div style="height:16px;line-height:16px;">&#8202;</div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="left" class="o" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                   <tbody>
                                                      <tr class="e  m">
                                                         <td style="padding:0 16px 0 0;vertical-align:middle;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:20px;">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="font-size:0;height:20px;vertical-align:middle;width:20px;"> <a href="https://www.linkedin.com/company/doctorshield/" target="_blank"> <img alt="Linkedin" title height="20" src="https://www.devcp.doctor.insure/assets/emails/footer-linkedin-icon.png" style="display:block;" width="20"></a></td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                   <tbody>
                                                      <tr class="e  m">
                                                         <td style="padding:0 16px 0 0;vertical-align:middle;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:20px;">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="font-size:0;height:20px;vertical-align:middle;width:20px;"> <a href="https://www.facebook.com/thedoctorshield/" target="_blank"> <img alt="Facebook" title height="20" src="https://www.devcp.doctor.insure/assets/emails/footer-facebook-icon.png" style="display:block;" width="20"></a></td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                   <tbody>
                                                      <tr class="e  ">
                                                         <td style="padding:0;padding-right:0;vertical-align:middle;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:20px;">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="font-size:0;height:20px;vertical-align:middle;width:20px;"> <a href="https://www.youtube.com/channel/UCjy18nlP45-RVQZOUAoVc1Q/featured" target="_blank"> <img alt="YouTube" title height="20" src="https://www.devcp.doctor.insure/assets/emails/footer-youtube-icon.png" style="display:block;" width="20"></a></td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                               
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                                   <tbody>
                                                      <tr class="e  m">
                                                         <td style="padding:0 16px 0 0;vertical-align:middle;">
                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:20px;">
                                                               <tbody>
                                                                  <tr>
                                                                     <td style="font-size:0;height:20px;vertical-align:middle;width:20px;"> </td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                         
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                 
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="x  m" style="font-size:0;padding-bottom:8px;word-break:break-word;">
                                                <div style="text-align:center;">
                                                   <p style="Margin:0;text-align:center;mso-line-height-alt:16px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#6e6e73;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Cancellation Terms:</span><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#6e6e73;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">&nbsp;For any cancellation of insurance policies that may occur, JA Assure Sdn. Bhd. retains the right to impose administrative charges amounting to 20% of the premium collected. Following the receipt of a cancellation request, the company will refund the remaining amount to your bank account only.</span></p>
                                                </div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="center" class="d  m" style="font-size:0;padding:0;padding-bottom:8px;word-break:break-word;">
                                                <p style="border-top:solid 1px #cccccc;font-size:1px;margin:0px auto;width:100%;"></p>
                                               
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="center" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                <div style="text-align:center;">
                                                   <p style="Margin:0;text-align:center;mso-line-height-alt:16px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:Inter,Arial,sans-serif;font-weight:600;color:#6e6e73;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">&copy; 2023 JA Assure Sdn Bhd. All rights reserved.</span></p>
                                                </div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
      </div>
   </body>
</html>`,
 Subject_Quotation: "DoctorShield : Individual Practitioners - Quote #",
    email_Quotation_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/indicative-quotation.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                                       <tr><td><br />
            <p>Dear <strong>#Name#,</strong><br /><br />
            <p style="Margin:0;text-align:left;mso-line-height-alt:22px;mso-ansi-font-size:14px;font-size:14px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#222222;line-height:150%;mso-line-height-alt:22px;mso-ansi-font-size:14px;">Exciting news! Introducing DoctorShield – your ultimate choice for medical professional indemnity insurance in Malaysia. Crafted exclusively for you in collaboration with Chubb, our policy offers:</p>
            <ul>
            <li style="margin-bottom: 15px;">Unlimited Retroactive Coverage: Peace of mind for any new claims arising from the past.</li>


            <li style="margin-bottom: 15px;">Unlimited Run-Off Coverage: Post-retirement protection.</li>


            <li style="margin-bottom: 15px;">Aggravated Damages Coverage: Coverage for more than just basics.</li>

            <li style="margin-bottom: 15px;">Complimentary Sole Proprietor Clinic Coverage: No extra cost for clinic owners.</li>

            <li style="margin-bottom: 15px;">Loss Mitigation Coverage: Proactive risk management.</li>

            <li style="margin-bottom: 15px;">Affordable Clinic Indemnity Insurance: Comprehensive coverage at low cost.</li>

            <li style="margin-bottom: 15px;">Freedom to Choose Your Lawyer: Empowering legal choices.</li>

            <li style="margin-bottom: 15px;">Free Personal Accident Insurance: RM100,000 safety net.</li>
            </ul>
            <h3>*NEW*</h3>
            <ul>
             
            <li style="margin-bottom: 15px;">Defence Cost (Limit in addition) Extension.</li>

            <li style="margin-bottom: 15px;">Coverage for Notices of Contribution and Indemnity (NCI).</li>

            <li style="margin-bottom: 15px;"> Comprehensive and Customizable Clinic Property Insurance.</li>

            </ul>
            <p>DoctorShield is the only premium version of <a href="https://www.chubb.com/my-en/business/medical-malpractice-insurance.html">Chubb's medical professional indemnity insurance</a></p>
            <br>
            <p>Discover the difference in just 90 seconds with our <a href="https://www.youtube.com/watch?v=6VV_bOfShjM"> video.</a></p>
            <p>Our standout feature includes unparalleled customer support, as evident in our <a href="https://g.page/r/CTHR7jDFGqVsEB0/review">5-star Google Reviews.</a></p>
            <br />
            <p>To purchase our policy online, today, click here:</p> 
            <br />
            <table>
            <tbody>
            <tr>
            <td style="width: 618px; height: 50px;text-align:center">  
             <a style="background: #2AA5B5;text-decoration: none;color: white!important; cursor: pointer;padding:10px;margin-bottom: 10px;margin-top: 10px; border-radius: 25px;" target="_blank" href="#QUT#">Continue from where you left</a> 
            </td>
            </tr>
            </tbody>
            </table>
            <br /><br />
            <p style="text-align: justify;">At DoctorShield, we're committed to offering more than just insurance; we provide peace of mind, ensuring you can focus on what you do best – caring for your patients.</p>
            <br/>
          </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
         #footer#`,
    Subject_User: "DoctorShield: Clinic Property - Thank you for your enquiry",
    email_User_body: `<html> #header#
            <p>Dear #name#,<br /><br />We have received you inquiry.<br /><br />
             #footer#</html>`,
    Subject_AdminUser: "DoctorShield: Clinic Property - Enquiry detail",
    email_AdminUser_body: `<html> #header#
            <p>Dear Admin,<br /><br />Customer has requested for clarification, please find the customer details below.Please call the customer to assist<br /><br />
            Customer Name : #name#<br /><br />
            Phone : #phone#<br /><br />
            Email : #email#<br /><br />
            Description : #description#<br /><br />
            Enquiry Page : #emailtype#<br /><br />
            </html>`,
    Neg_Declare_Approved_Cust_EmailType: "Negative_Declaration_Approved_Cust",
    Subject_Negative_Declaration_Approved_Cust: "DoctorShield: Individual Practitioners - Approved - Quote #",
    email_Neg_Declare_Approved_Cust_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/process-application.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                                       <tr><td><br/>
            <p>Dear <strong>#Name#,</strong>
            <br />
            <br />
            <p style="text-align: justify;">Your application has been approved. Please click the below button to make a payment.</p>
            <br />
            <table>
            <tbody>
            <tr>
            <td style="width: 618px; height: 50px;text-align:center">  
             <a style="background: #2AA5B5;text-decoration: none;color: white!important; cursor: pointer;padding:10px;margin-bottom: 10px;margin-top: 10px; border-radius: 25px;" target="_blank" href="#QUNDT#">Buy Now</a> 
            </td>
            </tr>
            </tbody>
            </table>
            <p style="text-align: justify;">Should you need further assistance, do call us at our hotline or WhatsApp our friendly consultants at +60 1229 30700.</p>
            <br />
            <p style="text-align: justify;">Please note that this quote is valid for today only.</p>
            <br /> 
         </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,
    Neg_Declare_Rejected_Cust_EmailType: "Negative_Declaration_Rejected_Cust",
    Subject_Negative_Declaration_Rejected_Cust: "DoctorShield: Individual Practitioners - Declined - Quote #",
    email_Neg_Declare_Rejected_Cust_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/process-application.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                                       <tr><td><br/>
            <p>Dear <strong>#Name#,</strong>
            <br />
            <br />
            <p style="text-align: justify;">We are sorry to say that your application has been declined.</p>
            <br />
            <p style="text-align: justify;">Should you need further assistance, do call us at our hotline or WhatsApp our friendly consultants at +60 1229 30700.</p>
            <br />
         </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,                
    Neg_Declare_Cust_EmailType: "Negative_Declaration_Cust",
    Subject_Negative_Declaration_Cust: "DoctorShield: Need More Information - Quote #",
    email_Neg_Declare_Cust_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/process-application.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                                       <tr><td><br/>
            <p>Dear <strong>#Name#,</strong>
            <br />
            <br />
            <p style="text-align: justify;">Thank you for choosing DoctorShield for your Clinic Property insurance. We need more details to process your application, considering the nature of the claims reported.</p>
            <br />
            <p style="text-align: justify;">Our friendly relationship manager will contact you soon to help with the necessary information and guide you through the next steps.</p>
            <br />
            <p style="text-align: justify;">Your case is important to us, and we're committed to efficient and prompt service.</p>
            <br /> 
            <p style="text-align: justify;">For any immediate queries, please reach out to us at WhatsApp <a href="https://api.whatsapp.com/send?phone=60122930700">+60 12-293 0700</a> or reply to this email.</p>
            <br />
         </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,
    Neg_Declare_Internal_EmailType: "Negative_Declaration_Internal",
    Subject_Negative_Declaration_Internal: "DoctorShield: Clinic Property - Internal follow up on negative declaration - Quote #",
    email_Neg_Declare_Internal_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/process-application.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                              <br />
                                       <tr><td>                
            <p>Dear Customer Care Team,<br /><br />
            <p style="text-align: justify;">We need to address a concern regarding a recent application from DoctorShield Clinic property (<strong>#QUOTEID#</strong>). It appears that the customer in question has triggered a negative declaration by responding 'Yes' to a crucial claim question.</p><br />
            <p style="text-align: justify;">Attached, please find the customer details for your immediate attention and review.</p><br />
            <p style="text-align: justify;">Your swift action in this matter is greatly appreciated.</p><br />
            <p style="text-align: justify;">Thank you for your attention to this urgent matter.</p><br /> </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,
    Blocklist_Declare_Cust_EmailType: "Blocklist_Declaration_Cust",
    Subject_Blocklist_Declaration_Cust: "DoctorShield: Clinic Property - Need More Information - Quote #",
    email_Blocklist_Declare_Cust_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/process-application.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                                       <tr><td><br/>
            <p>Dear <strong>#Name#,</strong>
            <br />
            <br />
            <p style="text-align: justify;">We have received your request and we need more information and time to process your Insurance Application.</p>
            <br />
            <p style="text-align: justify;">Our friendly relationship manager will contact you shortly to work with you on your case.</p>
            <br />
            <p style="text-align: justify;">Should you have any queries, do call us at our hotline or whatsapp our friendly consultants at <a href="https://api.whatsapp.com/send?phone=60122930700">+60 12-293 0700</a></p>
            <br />
         </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,
    Payment_Successful_EmailType: "Payment_Successful",
    Subject_Payment_Successful: "DoctorShield : Individual Practitioners - Premium Receipt & Policy Document #",
    email_Payment_Successful_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0;text-align:left;">
                     
                              <div class="xc316 ogf m c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                    <tbody>
                                       <tr>
                                          <td align="left" class="i  fw-1" style="font-size:0;padding:0;word-break:break-word;">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;" class="fwm">
                                                <tbody>
                                                   <tr>
                                                      <td style="width:316px;" class="fwm"> <img alt src="https://www.devcp.doctor.insure/assets/emails/cp-building1.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto"></td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                             
                              <div class="xc0 ogf g mb-0" style="font-size:0;text-align:left;direction:ltr;display:inline-block;width:100%;">
                                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                       <tr>
                                          <td style="padding:0;">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                <tbody></tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              
                              <div class="xc248 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                       <tr>
                                          <td style="border:none;vertical-align:middle;padding:8px 8px 8px 8px;">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                <tbody>
                                                   <tr>
                                                      <td align="left" class="x  al-c m" style="font-size:0;padding-bottom:8px;word-break:break-word;">
                                                         <div style="text-align:left;">
                                                            <p style="Margin:0;text-align:left;mso-line-height-alt:30px;mso-ansi-font-size:24px;"><span style="font-size:24px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:121%;mso-line-height-alt:30px;mso-ansi-font-size:24px;">We greatly appreciate your trust in&nbsp;</span><span style="font-size:24px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#08a4b4;line-height:121%;mso-line-height-alt:30px;mso-ansi-font-size:24px;">our insurance coverage</span></p>
                                                         </div>
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td class="s" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;" aria-hidden="true">
                                                         <div style="height:4px;line-height:4px;">&#8202;</div>
                                                      </td>
                                                   </tr>
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                             
                              <div class="xc36 ogf" style="font-size:0;text-align:left;direction:ltr;display:inline-block;width:100%;">
                                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                       <tr>
                                          <td style="padding:0;">
                                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                                <tbody></tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                              <br />
                                       <tr><td>
                               <p>Dear <strong>#Name#</strong>,
            <br /><br />
            <p style="text-align: justify;">Congratulations on making the right choice with DoctorShield for your clinic's insurance needs. We are delighted to confirm that your DoctorShield Clinic Property Insurance is now fully active. Please find your Confirmation of Insurance and Premium Receipt attached for your records.</p>
            <br />
            <p style="text-align: justify;">Your decision to trust DoctorShield ensures that your clinic is protected with a policy tailored to meet the unique demands of your profession. If you're satisfied with your experience, a quick review would be greatly appreciated and help others make informed decisions.</p><br />
            <p style="text-align: justify;">Should you have any questions or require further assistance, we're just a call or message away at <a href="https://api.whatsapp.com/send?phone=60122930700">+60 1229 30700</a>, or you can simply reply to this email.</p><br />
            <p style="text-align: justify;">Thank you for choosing DoctorShield. We are committed to providing you with exceptional service and support.</p><br />
         </td></tr>
         </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                           <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                              <tbody>
                                 <tr>
                                    <td style="border:none;direction:ltr;font-size:0;padding:20px 20px 20px 21px;text-align:left;">
                                       <!--[if mso | IE]>
                                       <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                          <tr>
                                             <td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:559px;">
                                                <![endif]-->
                                                <div class="xc559 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                                      <tbody>
                                                         <tr>
                                                            <td align="center" class="i  fw-1 m" style="font-size:0;padding:0;padding-bottom:8px;word-break:break-word;">
                                                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;" class="fwm">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td style="width:513px;" class="fwm"> <img alt src="https://www.devcp.doctor.insure/assets/google-review.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="513" height="auto"></td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                         <tr>
                                                            <td align="center" vertical-align="middle" class="b  fw-1" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
                                                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:238px;line-height:100%;">
                                                                  <tbody>
                                                                     <tr>
                                                                        <td align="center" bgcolor="#db3236" role="presentation" style="border:none;border-radius:37px 37px 37px 37px;cursor:auto;mso-padding-alt:14px 0px 15px 0px;background:#db3236;" valign="middle"> <a href="https://g.page/r/CTHR7jDFGqVsEB0/review" style="display:inline-block;width:238px;background:#db3236;color:#ffffff;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:normal;line-height:100%;margin:0;text-decoration:none;text-transform:none;padding:14px 0px 15px 0px;mso-padding-alt:0;border-radius:37px 37px 37px 37px;" target="_blank"> <span style="font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#ffffff;line-height:113%;mso-line-height-alt:18px;mso-ansi-font-size:16px;">write a review</span></a></td>
                                                                     </tr>
                                                                  </tbody>
                                                               </table>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </div>
                                                <!--[if mso | IE]>
                                             </td>
                                          </tr>
                                       </table>
                                       <![endif]-->
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
            #footer#`,
    Payment_Pending_EmailType: "Payment_Pending",
    Subject_Payment_Pending: "DoctorShield : Individual Practitioners - Premium Receipt  #",
    email_Payment_Pending_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/payment-pending.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                              <br />
                                       <tr><td>
            <br />
            <p>Dear <strong>#Name#,</strong><br /><br />
            <p style="text-align: justify;">Greetings from DoctorShield!</p><br />
            <p style="text-align: justify;">We would like to acknowledge the receipt of your payment for the Clinic Property Insurance. We are currently awaiting confirmation of the successful transaction from your bank/payment gateway provider.</p><br />
            <p style="text-align: justify;">As soon as we have verified the payment, we will promptly process and issue your Insurance Certificate and send all relevant documents to you.</p><br />
            <p style="text-align: justify;">Should you have any questions or require assistance in the meantime, please feel free to contact WhatsApp at <a href="https://api.whatsapp.com/send?phone=60122930700">+60 1229 30700</a> or reply to this email. We are here to ensure a smooth and hassle-free experience for you.</p><br />
            <p style="text-align: justify;">Thank you for choosing DoctorShield for your clinic's insurance needs. We are committed to providing you with comprehensive protection and peace of mind.</p><br />
         </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,
    Payment_Cancel_EmailType: "Payment_Cancel",
    Subject_Payment_Cancel: "DoctorShield: Clinic Property - Payment Cancel - Premium Receipt #",
    email_Payment_Cancel_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/payment-cancelled.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                              <br />
                                       <tr><td>
            <p>Dear #Name#,<br /><br />Greetings from JA Assure.Your insurance policy is successful cancelled as per your request. We have attached your cancelled Invoice.<br /><br />
          </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,
    Payment_Cancelled_EmailType: "Payment_Cancelled",
    Subject_Payment_Cancelled: "DoctorShield : Individual Practitioners - Premium Receipt  #",
    email_Payment_Cancelled_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/payment-cancelled.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                              <br />
                                       <tr><td>
            <p>Dear #Name#,<br /><br />We noticed your payment was cancelled.<br /><br /> 
          </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
            #footer#`,
    Payment_Rejected_EmailType: "Payment_Rejected",
    Subject_Payment_Rejected: "DoctorShield : Individual Practitioners - Premium Receipt  #",
    email_Payment_Rejected_body: `#header# 
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/payment-rejected.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                              <br />
                                       <tr><td>
   <p>Dear <strong>#Name#</strong>,<br /><br />
            <p style="text-align: justify;">We've noticed an issue with processing your payment for the DoctorShield Clinic Property Insurance. To ensure that your policy is activated without delay, we offer an alternative payment method via direct bank transfer.</p>
            <br/>
            <p style="text-align: justify;"><strong>Please use the following banking details for the transfer:</strong></p>
            <br/>
            <table style="border: 1px solid;padding:5px;padding-top: 10px;font-size:14px;line-height:1.5;margin-bottom:5px;letter-spacing:0.1px;width:100%;" aria-describedby="bankdetails_desc">
                 <tr style="display:none;">
                     <th scope="col" style="display:none;"></th>
                 </tr>
                 <tr>
                     <td>
                       <strong>Account No</strong>  
                     </td>
                     <td>
                        21401360030588  
                     </td>
                 </tr>
                 <tr><td colspan="2" style="padding:0px"><hr></td></tr>
                 <tr>
                     <td>
                       <strong>Bank Recipient Name</strong>  
                     </td>
                     <td>
                        JA Assure Sdn Bhd  
                     </td>
                 </tr>
                 <tr><td colspan="2" style="padding:0px"><hr></td></tr>
                 <tr>
                     <td>
                       <strong>Bank Name</strong>  
                     </td>
                     <td>
                        RHB Bank Berhad  
                     </td>
                 </tr>
                 <tr><td colspan="2" style="padding:0px"><hr></td></tr>
                 <tr>
                     <td>
                       <strong>Swift Code</strong>  
                     </td>
                     <td>
                        RHBBMYKL  
                     </td>
                 </tr>
            </table>
            <br />
            <p style="text-align: justify;">After completing the transfer, kindly forward the quote number and the payment receipt to our support team at query@thedoctorshield.com. This will enable us to swiftly verify your transaction and issue your Clinic Property Insurance policy.</p>
            <br/>
            <p style="text-align: justify;"><strong>Prefer to Try Online Payment Again?</strong> No problem! You can resume the payment process by <a target="_blank" href="#QT#">clicking here.</a></p>
            <br/>
            <p style="text-align: justify;"><strong>Need Assistance?</strong> Our friendly consultants are just a WhatsApp message away at <a href="https://api.whatsapp.com/send?phone=60122930700">+60 1229 30700</a>, or you can reply to this email for any queries</p>
            <br/>
            <p style="text-align: justify;">Please note, this offer is valid for the next 14 days, so don’t delay in securing comprehensive protection for your clinic.</p>
            <br/>
            <p style="text-align: justify;">Thank you for choosing DoctorShield for your clinic’s insurance needs. We're committed to offering you peace of mind with our tailored insurance solutions.</p>
            <br/>
   </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>#footer#`,
    Payment_Failed_EmailType: "Payment_Failed",
    Subject_Payment_Failed: "DoctorShield : Individual Practitioners - Premium Receipt  #",
    email_Payment_Failed_body: `#header#
   <body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#e6e6e6;">
      <div class="bg" style="background-color:#e6e6e6;" lang="en">
                  <div class="r  pr-16 pl-16 hm-1" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:20px;line-height:20px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" class="i" style="font-size:0;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:352px;"> <img alt src="https://devdoctorshieldth.doctor.insure/image/emails/header-banner-th.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="352" height="auto"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                               
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                
                  <div class="r  pr-16 pl-16" style="background:#fbfbfb;background-color:#fbfbfb;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbfbfb;background-color:#fbfbfb;width:100%;">
                        <tbody>
                           <tr>
                              <img alt src="https://www.devcp.doctor.insure/assets/emails/payment-rejected.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title width="316" height="auto">
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 32px 50px 32px;text-align:left;">
                                 <div class="xc536 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                  <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <table style="padding: 5px;font-size:14px;line-height: 1.5;margin-bottom:5px;letter-spacing: 0.1px;width: 100%"aria-describedby="mail_contend_desc">
                                       <tr style="display:none;">
                                         <th scope="col" style="display:none;"></th>
                                       </tr>
                              <br />
                                       <tr><td>
                                       <p>Dear <strong>#Name#</strong>,<br /><br />
            <p style="text-align: justify;">We've noticed an issue with processing your payment for the DoctorShield Clinic Property Insurance. To ensure that your policy is activated without delay, we offer an alternative payment method via direct bank transfer.</p>
            <br/>
            <p style="text-align: justify;"><strong>Please use the following banking details for the transfer:</strong></p>
            <br/>
            <table style="border: 1px solid;padding:5px;padding-top: 10px;font-size:14px;line-height:1.5;margin-bottom:5px;letter-spacing:0.1px;width:100%;" aria-describedby="bankdetails_desc">
                 <tr style="display:none;">
                     <th scope="col" style="display:none;"></th>
                 </tr>
                 <tr>
                     <td>
                       <strong>Account No</strong>  
                     </td>
                     <td>
                        21401360030588  
                     </td>
                 </tr>
                 <tr><td colspan="2" style="padding:0px"><hr></td></tr>
                 <tr>
                     <td>
                       <strong>Bank Recipient Name</strong>  
                     </td>
                     <td>
                        JA Assure Sdn Bhd  
                     </td>
                 </tr>
                 <tr><td colspan="2" style="padding:0px"><hr></td></tr>
                 <tr>
                     <td>
                       <strong>Bank Name</strong>  
                     </td>
                     <td>
                        RHB Bank Berhad  
                     </td>
                 </tr>
                 <tr><td colspan="2" style="padding:0px"><hr></td></tr>
                 <tr>
                     <td>
                       <strong>Swift Code</strong>  
                     </td>
                     <td>
                        RHBBMYKL  
                     </td>
                 </tr>
            </table>
            <br />
            <p style="text-align: justify;">After completing the transfer, kindly forward the quote number and the payment receipt to our support team at query@thedoctorshield.com. This will enable us to swiftly verify your transaction and issue your Clinic Property Insurance policy.</p>
            <br/>
            <p style="text-align: justify;"><strong>Prefer to Try Online Payment Again?</strong> No problem! You can resume the payment process by <a target="_blank" href="#QT#">clicking here.</a></p>
            <br/>
            <p style="text-align: justify;"><strong>Need Assistance?</strong> Our friendly consultants are just a WhatsApp message away at <a href="https://api.whatsapp.com/send?phone=60122930700">+60 1229 30700</a>, or you can reply to this email for any queries</p>
            <br/>
            <p style="text-align: justify;">Please note, this offer is valid for the next 14 days, so don’t delay in securing comprehensive protection for your clinic.</p>
            <br/>
            <p style="text-align: justify;">Thank you for choosing DoctorShield for your clinic’s insurance needs. We're committed to offering you peace of mind with our tailored insurance solutions.</p>
            <br/>
   </td></tr>
                                   </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="r  pr-16 pl-16" style="background:#e6e6e6;background-color:#e6e6e6;margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#e6e6e6;background-color:#e6e6e6;width:100%;">
                        <tbody>
                           <tr>
                              <td style="border:none;direction:ltr;font-size:0;padding:0px 16px 0px 16px;text-align:left;">
                                 <div class="xc568 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td class="s" style="font-size:0;padding:0;word-break:break-word;" aria-hidden="true">
                                                <div style="height:3px;line-height:3px;">&#8202;</div>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>#footer#`,
    Payment_Success: "Thank you for choosing DoctorShield professional medical indemnity insurance for Individual Practitioners.",
    Payment_Failure: "We're sorry, but your payment could not be processed. The payment has failed.",
    Payment_Cancelled: "We're sorry, but your payment could not be processed because you have cancelled your payment",
    Payment_Rejected: "Your payment has been rejected.",
    Payment_Pending: "Thanks for the payment! We'll process your Insurance certificate once payment is confirmed and send it your way.",
    paid_svg:` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 117" fill="none">
                            <g clip-path="url(#clip0_56_1354)">
                                <path d="M95.2902 31.8812C92.4996 31.205 89.992 28.3177 89.723 25.4632C89.45 22.61 86.8952 20.5365 84.037 20.8527C81.1788 21.1689 77.8311 19.3122 76.599 16.7268C75.3658 14.1373 72.2449 13.0634 69.6722 14.3387C67.0942 15.6112 63.312 15.0097 61.2646 13.0013C59.2212 10.9917 55.9195 11.0465 53.9323 13.1182C51.9464 15.1939 48.1819 15.9208 45.5662 14.7316C42.9546 13.5412 39.8687 14.7178 38.7128 17.3471C37.5557 19.9723 34.2651 21.9405 31.4004 21.7155C28.5356 21.4904 26.0387 23.6479 25.8494 26.5105C25.6641 29.3719 23.2433 32.3407 20.4704 33.1078C17.6974 33.8748 16.0906 36.7528 16.8952 39.5048C17.6998 42.2567 16.4417 45.8668 14.0991 47.5309C11.7564 49.1949 11.2306 52.4479 12.9316 54.7569C14.6326 57.0659 14.6886 60.8867 13.0559 63.2471C11.4244 65.6116 12.0443 68.8442 14.4358 70.429C16.8245 72.0191 18.19 75.5882 17.4644 78.3636C16.7388 81.1391 18.4297 83.9635 21.2243 84.6385C24.0189 85.3134 26.5225 88.202 26.7955 91.0553C27.0645 93.9097 29.6233 95.982 32.4815 95.6658C35.3384 95.3456 38.6862 97.2022 39.9195 99.7917C41.1527 102.381 44.2695 103.456 46.8463 102.18C49.4243 100.907 53.2065 101.509 55.2539 103.517C57.3013 105.526 60.599 105.472 62.5849 103.396C64.5708 101.32 68.3353 100.594 70.947 101.784C73.5586 102.975 76.6445 101.798 77.8004 99.1686C78.9576 96.5434 82.2481 94.5752 85.1128 94.8002C87.9776 95.0252 90.4745 92.8678 90.6598 90.0064C90.8451 87.145 93.2658 84.1762 96.0388 83.4092C98.8118 82.6421 100.419 79.7641 99.614 77.0122C98.8093 74.2602 100.067 70.6501 102.409 68.982C104.751 67.3179 105.277 64.065 103.578 61.76C101.877 59.451 101.821 55.6302 103.452 53.2657C105.085 50.9053 104.465 47.6727 102.072 46.0839C99.6835 44.4938 98.3179 40.9247 99.0435 38.1492C99.7691 35.3738 98.0742 32.5506 95.2836 31.8744L95.2902 31.8812ZM79.8723 93.4891C60.3388 105.433 34.8275 99.3404 22.8874 79.8794C10.9526 60.4212 17.1062 34.966 36.6357 23.0238C56.1691 11.0803 81.6804 17.1725 93.6205 36.6335C105.559 56.0904 99.407 81.5497 79.8735 93.4931L79.8723 93.4891Z" fill="#058540"/>
                                <path d="M37.7592 24.852C19.2404 36.1749 13.4037 60.3094 24.7234 78.7595C36.0432 97.2095 60.2349 102.987 78.7484 91.661C97.2672 80.3381 103.103 56.1995 91.7801 37.7548C80.4604 19.3047 56.2699 13.5315 37.7552 24.8532L37.7592 24.852ZM77.9623 90.3697C60.1602 101.256 36.9058 95.7037 26.0211 77.9638C15.1388 60.2319 20.7474 37.0286 38.5494 26.142C56.3514 15.2555 79.6058 20.808 90.4906 38.548C101.374 56.2839 95.7615 79.4885 77.9594 90.375L77.9623 90.3697Z" fill="#058540"/>
                                <path d="M40.7535 74.0389L39.3172 74.9169L38.0559 72.8572C38.6127 72.6068 39.1284 72.3382 39.5909 72.0549C40.5946 71.4422 41.4263 70.8027 42.0858 70.1366C42.7454 69.4704 43.2441 68.7565 43.5781 67.9826C43.9135 67.2128 44.0172 66.3816 43.8907 65.4929C43.7642 64.6043 43.3962 63.6793 42.7919 62.7209C42.4454 62.1692 42.0794 61.6985 41.6968 61.3036C41.3143 60.9086 40.9362 60.6007 40.5533 60.3781C40.1757 60.1583 39.7794 59.9929 39.3695 59.8846C38.9597 59.7763 38.5563 59.7322 38.1512 59.7549C37.7502 59.7764 37.3388 59.8364 36.9118 59.9321C36.4901 60.0306 36.0687 60.1732 35.6515 60.3586C35.2343 60.5441 34.81 60.7494 34.3788 60.9612C33.9488 61.1771 33.5209 61.4144 33.099 61.6852C32.6757 61.952 32.2513 62.2147 31.8191 62.4666C31.7144 62.5297 31.6327 62.5812 31.581 62.6148C31.5252 62.6495 31.4544 62.6933 31.3687 62.7461C31.283 62.7989 31.2042 62.8452 31.1335 62.889L24.7324 66.8054L26.8534 70.2664L28.3387 69.3601L33.8164 78.2877L32.2835 79.2263L34.4433 82.7415L42.9118 77.5635L40.7519 74.0482L40.7535 74.0389ZM33.8406 65.9934L34.6649 65.4887C35.1763 65.1772 35.6911 65.0501 36.2066 65.1127C36.7221 65.1754 37.1586 65.5007 37.5204 66.0876C38.3261 67.3993 37.9849 68.511 36.4969 69.4226L36.0942 69.6698L33.8406 65.9934Z" fill="#058540"/>
                                <path d="M62.6931 60.6239L61.8458 61.1401C61.7492 61.2007 61.6377 61.2128 61.5154 61.1752C61.3931 61.1377 61.2821 61.079 61.181 60.9952C61.08 60.9114 60.9438 60.7853 60.7673 60.6143L50.6778 50.9378L40.8996 56.9153L43.0206 60.3762L45.1057 59.1003L47.4963 66.7891C47.7403 67.5843 47.8752 68.0817 47.897 68.2826C47.9844 68.9139 47.8104 69.4442 47.3776 69.8818C47.188 70.0725 46.9464 70.2526 46.6594 70.429L48.8192 73.9443L55.4895 69.8657L53.3297 66.3504L52.5054 66.8551C52.3679 66.9415 52.1912 66.8853 51.9736 66.6959C51.756 66.5066 51.5919 66.3184 51.4826 66.1355C51.4044 65.9961 51.3482 65.8853 51.3072 65.8095C51.2703 65.7325 51.2565 65.644 51.2547 65.5518C51.2599 65.4531 51.3045 65.382 51.3902 65.3292L54.0943 63.6734C54.535 63.4057 55.0835 63.8071 55.7399 64.8777L54.5606 65.5973L56.7286 69.1101L64.8542 64.1432L62.6944 60.628L62.6931 60.6239ZM50.1536 62.7142L48.2024 57.0636L52.4073 61.338L50.1536 62.7142Z" fill="#058540"/>
                                <path d="M66.4006 46.082L64.2796 42.621L55.7812 47.8171L57.9022 51.278L59.3086 50.418L64.7864 59.3456L63.342 60.2261L65.499 63.7466L73.9783 58.5608L71.8185 55.0456L70.4339 55.89L64.9574 46.9665L66.4006 46.082Z" fill="#058540"/>
                                <path d="M65.7459 41.725L67.8631 45.1738L69.5267 44.1554L75.011 53.0898L73.4073 54.0722L75.5671 57.5875L83.4534 52.7647C84.7782 51.9563 85.8414 51.0029 86.6414 49.9138C87.4414 48.8247 87.9517 47.7009 88.1733 46.5464C88.395 45.3919 88.392 44.2269 88.1694 43.0541C87.9456 41.8773 87.506 40.7623 86.8508 39.6958C85.2639 37.1089 83.3873 35.556 81.2198 35.0331C79.0522 34.5102 76.6164 35.0766 73.9164 36.7311L65.754 41.7225L65.7459 41.725ZM78.0845 40.2793C78.461 40.4376 78.8391 40.6882 79.2125 41.0241C79.5858 41.36 79.9094 41.7068 80.1765 42.0576C80.4477 42.4072 80.7217 42.809 80.9971 43.2589C81.2647 43.6979 81.4938 44.1267 81.6855 44.5492C81.8772 44.9718 82.0305 45.4282 82.1415 45.9198C82.2525 46.4113 82.2919 46.8718 82.2532 47.2944C82.2145 47.717 82.0716 48.1318 81.8203 48.5402C81.569 48.9485 81.2067 49.2982 80.7252 49.5917L80.3824 49.8029L74.8981 40.8685L75.3605 40.5853C75.8461 40.2905 76.3258 40.1212 76.7994 40.0907C77.2758 40.0549 77.6987 40.1195 78.0792 40.2765L78.0845 40.2793Z" fill="#058540"/>
                                <path d="M28.9538 55.363L28.783 57.3833L29.8969 57.475L30.0677 55.4547L28.9538 55.363Z" fill="#058540"/>
                                <path d="M26.9073 51.8461L32.3353 53.1615L32.6944 51.7043L27.2531 50.3885L27.5737 49.08L26.2676 48.7653L25.2665 52.8663L26.5819 53.1826L26.9073 51.8461Z" fill="#058540"/>
                                <path d="M34.1393 47.7497L31.496 46.4851L32.0992 45.2311L34.7465 46.4945L35.3951 45.1428L29.1383 42.1516L28.4897 43.5034L30.8776 44.6432L30.2688 45.9077L27.8768 44.7691L27.2271 46.1168L33.4839 49.108L34.1393 47.7497Z" fill="#058540"/>
                                <path d="M36.9937 42.8591L36.3056 41.9882L37.4502 40.5638L38.4397 41.0595L39.3562 39.917L32.8509 36.9535L31.8998 38.142L36.0797 44.0097L36.9962 42.8672L36.9937 42.8591ZM33.6894 38.6174L36.4442 40.0289L35.6038 41.0729L33.6757 38.6305L33.6882 38.6134L33.6894 38.6174Z" fill="#058540"/>
                                <path d="M41.4973 38.116L38.8122 34.6648L38.8312 34.6545L42.9098 37.0157L44.1635 36.048L39.9002 30.5724L38.7773 31.447L41.4183 34.8411L41.3965 34.8566L37.3774 32.5303L36.0813 33.5331L40.3446 39.0086L41.4973 38.116Z" fill="#058540"/>
                                <path d="M45.6307 31.3578L45.6497 31.3476L48.3817 33.9409L49.8248 33.2727L46.8688 30.6422L46.8168 27.0366L45.4197 27.6817L45.5417 31.1113L45.5227 31.1215L44.1934 28.248L42.8154 28.8829L45.7231 35.1674L47.1012 34.5326L45.6307 31.3578Z" fill="#058540"/>
                                <path d="M53.9874 32.2692L53.3307 29.2775L54.0211 25.1747L52.5639 25.4938L52.2074 27.8115L50.8709 25.8676L49.2897 26.2159L51.876 29.6047L52.5302 32.5883L53.9874 32.2692Z" fill="#058540"/>
                                <path d="M57.0996 31.164C57.5467 31.7113 58.1493 31.9857 58.9021 31.9844C59.6415 31.9827 60.2415 31.7147 60.7035 31.1843C61.1695 30.6526 61.4011 29.6894 61.3997 28.2986C61.3992 27.6186 61.3472 27.0737 61.2383 26.661C61.1294 26.2484 60.9612 25.9025 60.7297 25.6246C60.4982 25.3467 60.2464 25.1325 59.9767 24.99C59.7058 24.8435 59.3513 24.7712 58.9092 24.7744C58.3734 24.7754 57.9337 24.9015 57.5818 25.1553C57.2339 25.4077 56.9519 25.7593 56.7422 26.2167C56.5313 26.6701 56.4277 27.3864 56.4249 28.3589C56.424 29.6842 56.6497 30.6219 57.0968 31.1693L57.0996 31.164ZM58.0831 29.8066C58.034 29.5744 58.0111 29.0956 58.0092 28.3674L58.0109 27.9252C58.0125 27.3241 58.0823 26.8875 58.2204 26.6155C58.3612 26.3382 58.5897 26.2018 58.9085 26.2012C59.1255 26.2008 59.3137 26.28 59.4638 26.4371C59.6139 26.5942 59.7185 26.805 59.7657 27.0599C59.8182 27.3176 59.8396 27.7483 59.8392 28.3535C59.8384 29.0295 59.8106 29.5017 59.7491 29.7635C59.693 30.0281 59.5849 30.2246 59.4384 30.3535C59.2918 30.4824 59.1255 30.5467 58.9487 30.548C58.7317 30.5483 58.5431 30.4825 58.387 30.3493C58.2269 30.2174 58.127 30.0361 58.0779 29.8038L58.0831 29.8066Z" fill="#058540"/>
                                <path d="M63.5994 31.7707C63.8907 32.229 64.3851 32.541 65.0857 32.7014C65.7622 32.8559 66.329 32.7968 66.7951 32.5257C67.2601 32.2505 67.5687 31.7981 67.7158 31.1655L68.8479 26.3221L67.3697 25.9807L66.2993 30.5491C66.2347 30.8295 66.1223 31.0406 65.9608 31.1785C65.7993 31.3164 65.6174 31.359 65.4083 31.3127C65.1846 31.2622 65.031 31.137 64.9463 30.9334C64.8629 30.7337 64.8586 30.4744 64.9295 30.1568L65.9808 25.6561L64.5078 25.3176L63.3986 30.048C63.2381 30.7377 63.3 31.3149 63.5913 31.7732L63.5994 31.7707Z" fill="#058540"/>
                                <path d="M69.7909 30.9138L69.3544 31.9411L71.2296 32.7309L71.666 31.7036L69.7909 30.9138Z" fill="#058540"/>
                                <path d="M45.2257 84.758L44.7454 85.7657L46.5809 86.6333L47.0611 85.6256L45.2257 84.758Z" fill="#058540"/>
                                <path d="M53.3886 84.9217L53.7637 83.6318L49.6981 82.468L49.3215 83.7672L50.6474 84.1464L49.0966 89.5026L50.5383 89.9126L52.0907 84.5471L53.3886 84.9217Z" fill="#058540"/>
                                <path d="M57.9089 84.0159L57.7427 86.6506L56.3397 86.5688L56.5034 83.926L55.0055 83.8381L54.5692 90.7469L56.0777 90.8405L56.2619 87.9177L57.6568 88.0019L57.4727 90.9248L58.9678 91.018L59.4069 84.1038L57.9089 84.0159Z" fill="#058540"/>
                                <path d="M61.8079 90.8885L63.2542 90.6346L63.3126 89.5257L65.1154 89.2066L65.5318 90.2315L66.9781 89.9776L64.0613 83.4617L62.5613 83.7277L61.8092 90.8925L61.8079 90.8885ZM63.5864 85.2636L64.7121 88.1379L63.3924 88.3706L63.5649 85.2658L63.5852 85.2596L63.5864 85.2636Z" fill="#058540"/>
                                <path d="M71.778 85.2761L71.755 85.2876L68.4035 82.0762L66.9081 82.7471L69.7479 89.0702L71.0766 88.477L69.2862 84.4906L69.3065 84.4844L72.7089 87.7464L74.1582 87.0985L71.3172 80.7713L70.0195 81.3506L71.778 85.2761Z" fill="#058540"/>
                                <path d="M76.2075 77.1727L74.9905 78.1159L75.883 81.4283L75.8652 81.4426L73.9198 78.9436L72.7193 79.8685L76.968 85.3396L78.1713 84.4095L76.0249 81.6453L76.0398 81.6363L79.2885 83.5455L80.545 82.5725L77.0697 80.6755L76.2075 77.1727Z" fill="#058540"/>
                                <path d="M79.9652 72.7425L79.0203 73.8937L80.1845 75.9258L77.9248 75.2324L76.9009 76.4873L81.0458 77.5341L83.4193 79.4645L84.3589 78.3105L81.9801 76.3773L79.9652 72.7425Z" fill="#058540"/>
                                <path d="M84.0985 68.5105C83.6827 68.4261 83.297 68.4252 82.9413 68.5079C82.5897 68.5893 82.285 68.7225 82.0341 68.9011C81.7832 69.0797 81.5605 69.3645 81.3631 69.7607C81.1247 70.2402 81.0452 70.6886 81.1136 71.1136C81.1821 71.5387 81.3781 71.9467 81.6926 72.336C82.007 72.7254 82.6022 73.1345 83.4741 73.5648C84.6649 74.1533 85.6079 74.3674 86.303 74.2071C86.9941 74.048 87.5094 73.6337 87.8424 72.9574C88.171 72.2957 88.1967 71.643 87.9263 70.9928C87.6559 70.3426 86.8948 69.7105 85.6418 69.0925C85.0317 68.7939 84.5156 68.599 84.0985 68.5105ZM86.6256 71.7497C86.6757 71.9419 86.662 72.1139 86.583 72.2751C86.4883 72.472 86.3443 72.6089 86.152 72.69C85.9639 72.7698 85.7559 72.7851 85.5244 72.7236C85.2981 72.665 84.8542 72.4744 84.2018 72.1534L83.8049 71.9572C83.2677 71.6937 82.9057 71.4382 82.719 71.1907C82.5323 70.9433 82.5122 70.6756 82.6559 70.393C82.7505 70.1962 82.9064 70.0688 83.1157 70.0002C83.3263 69.9356 83.5567 69.9355 83.8122 70.0029C84.0636 70.0714 84.4652 70.2397 85.0078 70.506C85.6178 70.8046 86.0271 71.0412 86.2385 71.2104C86.45 71.3796 86.5807 71.5603 86.6296 71.7484L86.6256 71.7497Z" fill="#058540"/>
                                <path d="M83.9982 61.9032L83.668 63.3825L88.2555 64.3994C88.5366 64.4633 88.7469 64.571 88.8889 64.7306C89.0256 64.8874 89.0732 65.0715 89.0265 65.2802C88.9754 65.5035 88.8509 65.6609 88.6506 65.7445C88.4515 65.8321 88.1928 65.8408 87.8732 65.7666L83.3534 64.7687L83.0248 66.2387L87.7776 67.2888C88.4716 67.4424 89.048 67.3715 89.5027 67.0774C89.9574 66.7832 90.2658 66.2867 90.4226 65.5849C90.5747 64.9111 90.5112 64.3432 90.2321 63.8812C89.9529 63.4192 89.497 63.1174 88.8603 62.9772L83.9929 61.9004L83.9982 61.9032Z" fill="#058540"/>
                                <path d="M88.1155 58.6588L88.0339 60.6845L89.1509 60.7273L89.2325 58.7016L88.1155 58.6588Z" fill="#058540"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_56_1354">
                                    <rect width="93.2562" height="93.2562" fill="white" transform="translate(0 27.3589) rotate(-17.06)"/>
                                </clipPath>
                            </defs>
                        </svg>`,
    pending_svg:`<svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_8_327)">
                    <path d="M59.08 104.7C84.83 104.7 105.71 83.8199 105.71 58.0699C105.71 32.3199 84.84 11.4399 59.08 11.4399C33.32 11.4399 12.45 32.3099 12.45 58.0699C12.45 83.8299 33.33 104.7 59.08 104.7Z" stroke="#F7912D" stroke-width="0.88" stroke-miterlimit="10"/>
                    <path d="M59.08 102.34C83.53 102.34 103.36 82.52 103.36 58.06C103.36 33.6 83.54 13.79 59.08 13.79C34.62 13.79 14.81 33.61 14.81 58.07C14.81 82.53 34.63 102.35 59.09 102.35L59.08 102.34Z" stroke="#F7912D" stroke-width="0.88" stroke-miterlimit="10"/>
                    <path d="M59.08 96.1999C80.14 96.1999 97.21 79.1299 97.21 58.0699C97.21 37.0099 80.14 19.9399 59.08 19.9399C38.02 19.9399 20.95 37.0099 20.95 58.0699C20.95 79.1299 38.02 96.1999 59.08 96.1999Z" stroke="#F7912D" stroke-width="1.8" stroke-miterlimit="10"/>
                    <path d="M59.08 94.2701C79.07 94.2701 95.28 78.0601 95.28 58.0701C95.28 38.0801 79.08 21.8701 59.08 21.8701C39.08 21.8701 22.88 38.0701 22.88 58.0701C22.88 78.0701 39.09 94.2701 59.08 94.2701Z" stroke="#F7912D" stroke-width="0.6" stroke-miterlimit="10"/>
                    <path d="M100.21 29.9199L7.93 58.8899C5.73 59.5799 4.5 61.9299 5.19 64.1299L11.26 83.4699C11.95 85.6699 14.3 86.8999 16.5 86.2099L108.77 57.2399C110.97 56.5499 112.2 54.1999 111.51 51.9999L105.44 32.6599C104.75 30.4599 102.4 29.2299 100.2 29.9199H100.21Z" fill="#F7912D"/>
                    <path d="M15.25 84.64C14.19 84.64 13.26 83.96 12.94 82.94L6.87999 63.61C6.47999 62.34 7.18999 60.98 8.45999 60.58L100.73 31.61C100.97 31.54 101.21 31.5 101.46 31.5C102.52 31.5 103.45 32.18 103.77 33.2L109.84 52.54C110.03 53.16 109.97 53.81 109.68 54.38C109.38 54.95 108.88 55.37 108.26 55.57L15.98 84.53C15.74 84.6 15.5 84.64 15.25 84.64Z" stroke="white" stroke-width="0.44" stroke-miterlimit="10"/>
                    <path d="M21.03 77.0401L16.87 63.6001L22.17 61.9601C23.19 61.6401 24.12 61.5701 24.95 61.7301C25.79 61.9001 26.5 62.2601 27.09 62.8301C27.68 63.4001 28.11 64.1301 28.39 65.0201C28.67 65.9101 28.72 66.7601 28.54 67.5601C28.37 68.3601 27.97 69.0701 27.36 69.6701C26.75 70.2801 25.93 70.7401 24.89 71.0601L21.51 72.1101L20.8 69.8301L23.72 68.9301C24.27 68.7601 24.69 68.5301 24.99 68.2201C25.29 67.9201 25.47 67.5701 25.54 67.1801C25.61 66.7901 25.58 66.3701 25.44 65.9301C25.3 65.4801 25.09 65.1201 24.81 64.8401C24.53 64.5601 24.18 64.3801 23.76 64.3101C23.34 64.2301 22.86 64.2801 22.31 64.4501L20.39 65.0401L23.83 76.1601L20.99 77.0401H21.03Z" fill="white"/>
                    <path d="M33 73.3401L28.84 59.9001L37.9 57.1001L38.62 59.4401L32.4 61.3601L33.39 64.5601L39.14 62.7801L39.87 65.1201L34.12 66.9001L35.11 70.1101L41.35 68.1801L42.07 70.5201L32.99 73.3301L33 73.3401Z" fill="white"/>
                    <path d="M51.41 52.9101L55.57 66.3501L53.11 67.1101L44.65 60.4601L44.55 60.4901L47.17 68.9501L44.33 69.8301L40.17 56.3901L42.66 55.6201L51.08 62.2801L51.2 62.2401L48.59 53.7801L51.42 52.9001L51.41 52.9101Z" fill="white"/>
                    <path d="M62.68 64.1599L57.91 65.6299L53.75 52.1899L58.55 50.6999C59.9 50.2799 61.15 50.1899 62.29 50.4199C63.43 50.6499 64.42 51.1899 65.26 52.0299C66.1 52.8699 66.73 53.9899 67.16 55.3799C67.59 56.7799 67.7 58.0699 67.49 59.2399C67.28 60.4099 66.76 61.4199 65.94 62.2599C65.12 63.0999 64.03 63.7299 62.67 64.1599H62.68ZM60 62.3199L61.81 61.7599C62.65 61.4999 63.31 61.1299 63.79 60.6499C64.27 60.1699 64.56 59.5699 64.66 58.8499C64.75 58.1299 64.65 57.2699 64.34 56.2599C64.03 55.2699 63.64 54.4999 63.15 53.9599C62.66 53.4199 62.09 53.0899 61.42 52.9699C60.75 52.8499 60 52.9199 59.16 53.1799L57.35 53.7399L60 62.3099V62.3199Z" fill="white"/>
                    <path d="M70.04 47.1501L74.2 60.5901L71.36 61.4701L67.2 48.0301L70.04 47.1501Z" fill="white"/>
                    <path d="M83.63 42.9499L87.79 56.3899L85.33 57.1499L76.87 50.4999L76.77 50.5299L79.39 58.9899L76.55 59.8699L72.39 46.4299L74.88 45.6599L83.3 52.3199L83.42 52.2799L80.81 43.8199L83.64 42.9399L83.63 42.9499Z" fill="white"/>
                    <path d="M96.23 43.81C96.04 43.52 95.82 43.27 95.58 43.08C95.34 42.88 95.07 42.74 94.78 42.64C94.49 42.54 94.18 42.49 93.84 42.49C93.51 42.49 93.16 42.55 92.79 42.66C92.1 42.87 91.55 43.23 91.14 43.73C90.73 44.23 90.48 44.85 90.39 45.59C90.3 46.33 90.4 47.17 90.69 48.1C90.98 49.04 91.37 49.79 91.86 50.36C92.35 50.93 92.9 51.3 93.53 51.49C94.16 51.68 94.82 51.65 95.53 51.43C96.17 51.23 96.69 50.95 97.07 50.58C97.45 50.21 97.71 49.77 97.82 49.28C97.93 48.78 97.9 48.25 97.72 47.68L98.32 47.59L94.85 48.66L94.19 46.52L99.81 44.78L100.33 46.47C100.7 47.65 100.76 48.74 100.52 49.74C100.28 50.74 99.8 51.61 99.06 52.33C98.33 53.06 97.4 53.6 96.27 53.95C95.01 54.34 93.81 54.4 92.69 54.14C91.57 53.88 90.58 53.31 89.72 52.45C88.87 51.58 88.23 50.44 87.79 49.02C87.45 47.93 87.31 46.91 87.36 45.96C87.41 45 87.63 44.14 88.02 43.37C88.41 42.6 88.94 41.94 89.6 41.39C90.27 40.84 91.04 40.43 91.93 40.16C92.69 39.92 93.43 39.82 94.16 39.83C94.88 39.85 95.56 39.98 96.2 40.22C96.83 40.47 97.4 40.81 97.89 41.27C98.39 41.72 98.78 42.27 99.08 42.9L96.19 43.79L96.23 43.81Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_8_327">
                    <rect width="106.72" height="94.14" fill="white" transform="translate(5 11)"/>
                    </clipPath>
                    </defs>
                </svg>`,

    rejected_svg:`<svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.1423 105.26C84.8953 105.26 105.772 84.383 105.772 58.6299C105.772 32.8769 84.8953 11.9999 59.1423 11.9999C33.3893 11.9999 12.5123 32.8769 12.5123 58.6299C12.5123 84.383 33.3893 105.26 59.1423 105.26Z" stroke="#C13130" stroke-width="0.875972" stroke-miterlimit="10"/>
                    <path d="M59.1423 102.906C83.5955 102.906 103.419 83.0832 103.419 58.6299C103.419 34.1767 83.5955 14.3534 59.1423 14.3534C34.6891 14.3534 14.8658 34.1767 14.8658 58.6299C14.8658 83.0832 34.6891 102.906 59.1423 102.906Z" stroke="#C13130" stroke-width="0.875972" stroke-miterlimit="10"/>
                    <path d="M59.1423 90.3178C76.643 90.3178 90.8302 76.1307 90.8302 58.6299C90.8302 41.1292 76.643 26.9421 59.1423 26.9421C41.6416 26.9421 27.4544 41.1292 27.4544 58.6299C27.4544 76.1307 41.6416 90.3178 59.1423 90.3178Z" stroke="#C13130" stroke-width="1.79786" stroke-miterlimit="10"/>
                    <path d="M59.1423 88.7182C75.7596 88.7182 89.2306 75.2472 89.2306 58.6299C89.2306 42.0127 75.7596 28.5417 59.1423 28.5417C42.525 28.5417 29.054 42.0127 29.054 58.6299C29.054 75.2472 42.525 88.7182 59.1423 88.7182Z" stroke="#C13130" stroke-width="0.595285" stroke-miterlimit="10"/>
                    <path d="M96.5796 51.6509L95.9519 54.2136L93.3793 54.8L95.6227 56.1893L95.3859 58.8173L97.4002 57.1128L99.8262 58.1505L98.8277 55.7078L100.564 53.7211L97.9329 53.9162L96.5796 51.6509Z" fill="#C13130"/>
                    <path d="M93.4977 42.1988L93.5546 44.8372L91.2215 46.0695L93.7482 46.8307L94.1995 49.4304L95.7041 47.2627L98.3158 47.6367L96.7194 45.5363L97.8823 43.1677L95.3911 44.0369L93.4977 42.1988Z" fill="#C13130"/>
                    <path d="M21.7051 65.609L22.3332 63.0463L24.9053 62.4594L22.6624 61.0705L22.8993 58.4426L20.8849 60.1466L18.4589 59.1094L19.457 61.5516L17.7207 63.5388L20.3522 63.3437L21.7051 65.609Z" fill="#C13130"/>
                    <path d="M24.7874 75.0605L24.7305 72.4227L27.0631 71.1904L24.537 70.4292L24.0857 67.8295L22.581 69.9967L19.9693 69.6226L21.5658 71.7236L20.4028 74.0922L22.8941 73.223L24.7874 75.0605Z" fill="#C13130"/>
                    <path d="M36.9065 87.4155C37.2795 87.5767 37.772 87.8662 38.217 88.1767C38.9067 88.6587 39.2631 89.0954 39.3779 89.5947C39.4744 89.9933 39.3768 90.4326 39.1076 90.8181C38.6464 91.4781 37.9259 91.6252 37.2748 91.4353L37.2591 91.4578C37.5513 91.8605 37.5325 92.377 37.2884 92.9791C36.9644 93.7899 36.7463 94.3549 36.7155 94.6199L36.0482 94.1535C36.0649 93.9558 36.2543 93.4481 36.5486 92.7266C36.8819 91.9336 36.7964 91.4875 36.2267 91.056L35.6188 90.6314L34.1058 92.7965L33.461 92.3457L36.9065 87.4155ZM35.9611 90.142L36.6211 90.6032C37.3103 91.0853 38.012 91.0127 38.4111 90.4415C38.8619 89.7966 38.5916 89.1883 37.9149 88.7041C37.6035 88.4866 37.3604 88.3608 37.2357 88.318L35.9611 90.142Z" fill="#C13130"/>
                    <path d="M47.3169 96.3307L45.086 95.5319L44.3452 97.6011L46.8317 98.4911L46.6089 99.1125L43.3816 97.9569L45.4361 92.2174L48.5357 93.3271L48.3134 93.949L45.9547 93.1049L45.3052 94.9184L47.536 95.7171L47.3164 96.3302L47.3169 96.3307Z" fill="#C13130"/>
                    <path d="M55.7912 94.7233L56.5738 94.8031L56.1611 98.8616C55.9973 100.472 55.1553 100.886 54.1113 100.78C53.8233 100.751 53.479 100.653 53.2891 100.551L53.4711 99.9243C53.6266 100.004 53.8551 100.081 54.116 100.108C54.8177 100.179 55.2638 99.9066 55.3848 98.7186L55.7912 94.7233Z" fill="#C13130"/>
                    <path d="M66.4553 97.4711L64.1106 97.8149L64.4294 99.9895L67.0427 99.6065L67.1382 100.26L63.7465 100.757L62.8627 94.7253L66.1203 94.2479L66.2158 94.9011L63.7371 95.2642L64.0162 97.1706L66.3608 96.8268L66.4553 97.4711Z" fill="#C13130"/>
                    <path d="M78.2556 96.2587C78.049 96.5081 77.5779 96.8738 76.8991 97.1733C75.3266 97.8666 73.7056 97.3955 72.8985 95.5669C72.1285 93.8207 72.7895 92.1152 74.5195 91.3524C75.2145 91.0456 75.719 91.0013 75.9532 91.0164L76.0388 91.6806C75.7075 91.6686 75.2745 91.7411 74.8112 91.9451C73.5037 92.5216 73.0034 93.7409 73.6498 95.2058C74.2519 96.5712 75.4252 97.1018 76.7822 96.5029C77.221 96.3093 77.6274 96.0213 77.8549 95.7526L78.2556 96.2576V96.2587Z" fill="#C13130"/>
                    <path d="M81.9118 87.6894L80.4635 88.8476L80.0456 88.3248L83.5704 85.506L83.9883 86.0287L82.5332 87.1927L85.9228 91.4312L85.3015 91.9284L81.9118 87.6899V87.6894Z" fill="#C13130"/>
                    <path d="M91.8903 80.7656L90.4832 82.6725L92.2518 83.9778L93.8201 81.8528L94.3512 82.2452L92.3155 85.0035L87.4102 81.3838L89.3651 78.7345L89.8963 79.1263L88.4083 81.1422L89.9583 82.2864L91.3654 80.3795L91.8892 80.7661L91.8903 80.7656Z" fill="#C13130"/>
                    <path d="M92.3917 73.4604C92.4903 72.9857 92.6369 72.4326 92.8534 71.8473C93.2457 70.7871 93.7711 70.123 94.4227 69.7953C95.0775 69.4588 95.8491 69.4066 96.7736 69.7489C97.707 70.0943 98.3633 70.665 98.692 71.3939C99.0285 72.1259 98.9909 73.115 98.5798 74.2263C98.3852 74.7522 98.1969 75.1837 98.0164 75.5416L92.3922 73.4609L92.3917 73.4604ZM97.7205 74.5926C97.8233 74.4183 97.9324 74.1501 98.0388 73.8616C98.6226 72.2839 98.057 71.1007 96.5133 70.5294C95.1677 70.0218 94.0283 70.4683 93.4513 72.0293C93.3099 72.4112 93.2374 72.7123 93.2076 72.923L97.7205 74.5926Z" fill="#C13130"/>
                    <path d="M100.266 30.4847L7.99156 59.4547C5.78707 60.1468 4.56104 62.495 5.25315 64.6995L11.3247 84.0382C12.0168 86.2427 14.365 87.4687 16.5695 86.7766L108.844 57.8066C111.048 57.1145 112.274 54.7663 111.582 52.5619L105.51 33.2231C104.818 31.0186 102.47 29.7926 100.266 30.4847Z" fill="url(#paint0_radial_117_128)"/>
                    <path d="M15.3145 85.2039C14.2528 85.2039 13.3257 84.522 13.0069 83.5078L6.93509 64.1691C6.53545 62.8961 7.24604 61.5349 8.51956 61.1353L100.794 32.1651C101.031 32.0905 101.275 32.0529 101.52 32.0529C102.581 32.0529 103.509 32.7348 103.827 33.7495L109.899 53.0877C110.092 53.7044 110.034 54.3597 109.735 54.9325C109.436 55.5054 108.932 55.9274 108.315 56.121L16.0407 85.0917C15.8039 85.1663 15.5592 85.2039 15.3145 85.2039Z" stroke="white" stroke-width="0.440856" stroke-miterlimit="10"/>
                    <path d="M16.4852 64.265C17.3293 63.7913 18.5903 63.2785 19.8232 62.8892C21.7337 62.2867 23.0782 62.2533 24.1921 62.7771C25.0889 63.1851 25.7828 64.025 26.1266 65.1139C26.7146 66.9775 25.9545 68.576 24.6543 69.5386L24.6742 69.6012C25.8611 69.6409 26.8153 70.4454 27.6062 71.8071C28.6794 73.6326 29.4375 74.8899 29.8966 75.3438L28.0481 75.9271C27.6965 75.6005 27.0052 74.4835 26.0599 72.8479C25.0347 71.0302 24.0637 70.5309 22.4214 70.9801L20.7372 71.5118L22.6666 77.6258L20.8797 78.1898L16.4862 64.2661L16.4852 64.265ZM20.3006 70.1292L22.1287 69.5522C24.0392 68.9496 24.9141 67.4992 24.4049 65.8871C23.83 64.0652 22.2852 63.6781 20.3887 64.2536C19.5258 64.5259 18.9363 64.804 18.6749 64.9787L20.3 70.1297L20.3006 70.1292Z" fill="white"/>
                    <path d="M37.0103 65.8234L31.6287 67.5216L33.2341 72.6095L39.2318 70.7166L39.7139 72.2453L31.9292 74.7016L27.4763 60.589L34.9531 58.2297L35.4357 59.7584L29.7458 61.5536L31.1529 66.0133L36.5345 64.3151L37.0103 65.8229V65.8234Z" fill="white"/>
                    <path d="M40.786 56.3896L42.5729 55.8257L45.5525 65.2688C46.7352 69.0169 45.2911 70.7386 42.9084 71.4904C42.251 71.698 41.4037 71.8039 40.8924 71.758L40.6905 70.1871C41.1063 70.2168 41.6802 70.1741 42.276 69.9862C43.8782 69.4807 44.592 68.4498 43.7196 65.6857L40.786 56.3891V56.3896Z" fill="white"/>
                    <path d="M55.0854 60.1199L49.7038 61.8182L51.3091 66.906L57.3069 65.0132L57.7889 66.5418L50.0038 68.9981L45.5509 54.8855L53.0277 52.5263L53.5103 54.0549L47.8204 55.8502L49.2275 60.3099L54.609 58.6116L55.0848 60.1194L55.0854 60.1199Z" fill="white"/>
                    <path d="M69.6399 62.2966C69.0884 62.8392 67.8796 63.5889 66.1949 64.1205C62.2919 65.3518 58.5621 63.7663 57.1018 59.1391C55.7078 54.7212 57.7002 50.7999 61.993 49.4455C63.7183 48.9008 64.9261 48.9342 65.4776 49.0365L65.5151 50.659C64.7315 50.538 63.687 50.5912 62.5366 50.9543C59.291 51.9785 57.802 54.7739 58.9712 58.4797C60.061 61.9345 62.713 63.5383 66.0817 62.475C67.1706 62.1317 68.2067 61.551 68.8135 60.9683L69.6388 62.2966H69.6399Z" fill="white"/>
                    <path d="M71.264 48.4767L67.0532 49.8055L66.5643 48.256L76.8141 45.0218L77.3029 46.5713L73.0718 47.9064L77.0358 60.4695L75.2281 61.0397L71.264 48.4767Z" fill="white"/>
                    <path d="M87.8887 49.769L82.5071 51.4672L84.1125 56.555L90.1102 54.6622L90.5923 56.1908L82.8076 58.6471L78.3547 44.5345L85.8315 42.1753L86.3141 43.7039L80.6242 45.4992L82.0313 49.9589L87.4129 48.2607L87.8887 49.7684V49.769Z" fill="white"/>
                    <path d="M88.52 41.5352C89.5556 41.0239 90.8103 40.4901 92.2273 40.043C94.7947 39.2328 96.8148 39.2631 98.3899 40.0326C99.9859 40.7954 101.22 42.2014 101.94 44.4839C102.667 46.7873 102.563 48.892 101.679 50.5985C100.801 52.3259 98.8892 53.7122 96.1987 54.561C94.9251 54.9627 93.8374 55.2372 92.9003 55.4177L88.52 41.5357V41.5352ZM94.2443 53.4503C94.7227 53.3913 95.3863 53.205 96.0849 52.9849C99.9055 51.7792 101.293 48.9473 100.091 45.1361C99.0608 41.8002 96.5446 40.2689 92.7652 41.4616C91.8407 41.7532 91.1687 42.0574 90.7295 42.3115L94.2443 53.4508V53.4503Z" fill="white"/>
                    <path d="M19.974 45.216C20.0371 44.8148 20.1941 44.2654 20.3846 43.7567C20.6793 42.9689 21.0132 42.5145 21.4682 42.2787C21.8303 42.0856 22.28 42.0705 22.7203 42.2354C23.4742 42.5171 23.7966 43.1786 23.7752 43.8558L23.8008 43.8652C24.118 43.4818 24.623 43.3712 25.2663 43.4572C26.1324 43.5684 26.7339 43.6388 26.9984 43.6028L26.7136 44.3656C26.5179 44.3984 25.979 44.3421 25.2074 44.2367C24.3559 44.1115 23.9453 44.3056 23.6699 44.9655L23.41 45.66L25.884 46.585L25.6086 47.3222L19.975 45.216H19.974ZM22.8507 45.4518L23.1325 44.6979C23.4273 43.9101 23.182 43.2486 22.5294 43.0049C21.7922 42.7294 21.271 43.1426 20.971 43.919C20.8379 44.2748 20.7769 44.5414 20.7665 44.6729L22.8507 45.4518Z" fill="#C13130"/>
                    <path d="M29.5804 34.146L28.1556 36.0394L29.9117 37.3609L31.4999 35.2505L32.0273 35.6476L29.9665 38.3866L25.0952 34.7215L27.0746 32.0905L27.6021 32.4875L26.0959 34.4893L27.6355 35.6476L29.0603 33.7542L29.5804 34.1455V34.146Z" fill="#C13130"/>
                    <path d="M33.6796 25.7677L34.301 25.2851L36.8026 28.5073C37.7955 29.786 37.472 30.6672 36.6435 31.3105C36.415 31.4879 36.0973 31.6543 35.8902 31.7122L35.5891 31.1331C35.7566 31.083 35.9757 30.9818 36.1828 30.8211C36.74 30.3886 36.8746 29.8831 36.1421 28.9403L33.6791 25.7682L33.6796 25.7677Z" fill="#C13130"/>
                    <path d="M45.3813 22.9395L43.1958 23.8551L44.0452 25.8825L46.4811 24.862L46.7362 25.4709L43.5746 26.7955L41.219 21.1729L44.2555 19.9009L44.5106 20.5098L42.1999 21.4776L42.9444 23.2546L45.1299 22.339L45.3813 22.9395Z" fill="#C13130"/>
                    <path d="M56.8785 23.2979C56.6057 23.4721 56.0454 23.6766 55.3076 23.7544C53.5985 23.9344 52.1987 22.9906 51.989 21.0028C51.7891 19.1048 52.9395 17.6831 54.8198 17.4848C55.5753 17.405 56.0694 17.5167 56.2874 17.6033L56.1659 18.2617C55.8539 18.149 55.4198 18.0859 54.9158 18.1386C53.4946 18.2883 52.6458 19.2963 52.8138 20.8886C52.9703 22.3729 53.9251 23.2363 55.4005 23.0808C55.8774 23.0308 56.3526 22.8805 56.6511 22.6942L56.8785 23.2979Z" fill="#C13130"/>
                    <path d="M64.7226 18.6796L62.8976 18.3509L63.0166 17.692L67.4585 18.4923L67.3396 19.1512L65.5057 18.821L64.5432 24.1618L63.7601 24.0205L64.7226 18.6796Z" fill="#C13130"/>
                    <path d="M75.9485 25.2225L73.822 24.177L72.8521 26.1491L75.2223 27.3141L74.9312 27.9068L71.8551 26.3943L74.5446 20.9235L77.4991 22.376L77.208 22.9687L74.9599 21.8631L74.11 23.5921L76.2365 24.6377L75.9491 25.222L75.9485 25.2225Z" fill="#C13130"/>
                    <path d="M84.126 26.9917C84.5231 27.2697 84.9728 27.624 85.4246 28.0544C86.2432 28.8344 86.6449 29.5794 86.6882 30.3077C86.7378 31.0423 86.4806 31.7712 85.8002 32.4849C85.1142 33.2054 84.33 33.5826 83.5302 33.5956C82.7247 33.6149 81.8315 33.1887 80.9738 32.3717C80.5679 31.9851 80.246 31.6407 79.9893 31.3334L84.126 26.9922V26.9917ZM80.9769 31.4373C81.0959 31.6006 81.2993 31.8066 81.5221 32.019C82.7403 33.1793 84.0504 33.1287 85.1857 31.9366C86.1842 30.9015 86.2249 29.6785 85.0203 28.5308C84.7255 28.2501 84.4782 28.0638 84.2961 27.9532L80.9769 31.4367V31.4373Z" fill="#C13130"/>
                    <defs>
                    <radialGradient id="paint0_radial_117_128" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.4177 58.6304) scale(42.7207 42.7207)">
                    <stop stop-color="#DE0808"/>
                    <stop offset="1" stop-color="#B11E19"/>
                    </radialGradient>
                    </defs>
                </svg>`,
    failed_svg:`<svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.1424 105.26C84.8954 105.26 105.772 84.383 105.772 58.6299C105.772 32.8769 84.8954 11.9999 59.1424 11.9999C33.3893 11.9999 12.5124 32.8769 12.5124 58.6299C12.5124 84.383 33.3893 105.26 59.1424 105.26Z" stroke="#C13130" stroke-width="0.875972" stroke-miterlimit="10"/>
                        <path d="M59.1424 102.906C83.5956 102.906 103.419 83.0832 103.419 58.6299C103.419 34.1767 83.5956 14.3534 59.1424 14.3534C34.6891 14.3534 14.8658 34.1767 14.8658 58.6299C14.8658 83.0832 34.6891 102.906 59.1424 102.906Z" stroke="#C13130" stroke-width="0.875972" stroke-miterlimit="10"/>
                        <path d="M59.1424 90.3178C76.6431 90.3178 90.8302 76.1307 90.8302 58.6299C90.8302 41.1292 76.6431 26.9421 59.1424 26.9421C41.6416 26.9421 27.4545 41.1292 27.4545 58.6299C27.4545 76.1307 41.6416 90.3178 59.1424 90.3178Z" stroke="#C13130" stroke-width="1.79786" stroke-miterlimit="10"/>
                        <path d="M59.1424 88.7182C75.7597 88.7182 89.2306 75.2472 89.2306 58.6299C89.2306 42.0127 75.7597 28.5417 59.1424 28.5417C42.5251 28.5417 29.0541 42.0127 29.0541 58.6299C29.0541 75.2472 42.5251 88.7182 59.1424 88.7182Z" stroke="#C13130" stroke-width="0.595285" stroke-miterlimit="10"/>
                        <path d="M96.5796 51.6508L95.952 54.2135L93.3794 54.8L95.6228 56.1893L95.3859 58.8172L97.4003 57.1128L99.8263 58.1505L98.8277 55.7078L100.564 53.721L97.933 53.9162L96.5796 51.6508Z" fill="#C13130"/>
                        <path d="M93.4978 42.1988L93.5547 44.8372L91.2215 46.0695L93.7482 46.8307L94.1995 49.4304L95.7042 47.2627L98.3159 47.6367L96.7194 45.5363L97.8824 43.1677L95.3911 44.0369L93.4978 42.1988Z" fill="#C13130"/>
                        <path d="M21.7051 65.609L22.3333 63.0463L24.9054 62.4594L22.6625 61.0705L22.8994 58.4426L20.885 60.1466L18.459 59.1094L19.457 61.5516L17.7207 63.5388L20.3523 63.3437L21.7051 65.609Z" fill="#C13130"/>
                        <path d="M24.7875 75.0605L24.7306 72.4227L27.0632 71.1904L24.537 70.4292L24.0858 67.8295L22.5811 69.9967L19.9694 69.6226L21.5658 71.7236L20.4029 74.0922L22.8941 73.223L24.7875 75.0605Z" fill="#C13130"/>
                        <path d="M55.2628 94.6977L58.5393 94.9085L58.497 95.5674L56.0058 95.4072L55.8759 97.4289L58.1777 97.5771L58.136 98.2271L55.8341 98.079L55.6573 100.832L54.8721 100.781L55.2634 94.6977H55.2628Z" fill="#C13130"/>
                        <path d="M61.7828 98.979L61.3268 100.946L60.5161 101.02L62.0233 94.7603L62.9692 94.6737L65.5961 100.556L64.7582 100.632L63.9349 98.7817L61.7823 98.9784L61.7828 98.979ZM63.7173 98.1844L62.9629 96.4914C62.7918 96.1074 62.6687 95.7552 62.5461 95.4125L62.5283 95.414C62.4715 95.7824 62.4057 96.1611 62.3228 96.5409L61.8887 98.3519L63.7173 98.1844Z" fill="#C13130"/>
                        <path d="M68.1233 93.7534L69.5633 99.677L68.7984 99.8627L67.3585 93.9391L68.1233 93.7534Z" fill="#C13130"/>
                        <path d="M70.8999 92.9536L71.6334 92.6687L73.5998 97.7362L76.0284 96.794L76.2674 97.4096L73.1052 98.6367L70.8999 92.9536Z" fill="#C13130"/>
                        <path d="M80.5043 91.8757L78.4612 93.0762L79.5746 94.9711L81.8519 93.6334L82.1863 94.2026L79.2308 95.9389L76.1427 90.6825L78.9814 89.0151L79.3158 89.5843L77.1559 90.8531L78.132 92.5143L80.1751 91.3138L80.5048 91.8752L80.5043 91.8757Z" fill="#C13130"/>
                        <path d="M81.1476 87.6231C81.4627 87.2548 81.8577 86.8406 82.3298 86.432C83.1844 85.6922 83.9649 85.3636 84.6937 85.3902C85.4294 85.411 86.1306 85.7371 86.7759 86.4827C87.427 87.235 87.7276 88.0515 87.6639 88.8481C87.606 89.6521 87.0963 90.4999 86.2005 91.2757C85.7763 91.643 85.4033 91.93 85.0725 92.1564L81.1471 87.6231H81.1476ZM85.2713 91.1834C85.4455 91.0806 85.6699 90.898 85.9026 90.6966C87.1745 89.5953 87.2491 88.2862 86.1718 87.0419C85.2374 85.9489 84.0238 85.7908 82.766 86.8802C82.4582 87.1468 82.2495 87.3753 82.1216 87.5454L85.2713 91.1829V91.1834Z" fill="#C13130"/>
                        <path d="M100.266 30.4847L7.99162 59.4547C5.78713 60.1468 4.5611 62.495 5.25322 64.6995L11.3247 84.0382C12.0168 86.2427 14.365 87.4687 16.5695 86.7766L108.844 57.8066C111.048 57.1145 112.274 54.7663 111.582 52.5619L105.51 33.2231C104.818 31.0186 102.47 29.7926 100.266 30.4847Z" fill="url(#paint0_radial_117_207)"/>
                        <path d="M15.3145 85.2039C14.2528 85.2039 13.3257 84.522 13.0069 83.5078L6.93514 64.1691C6.5355 62.8961 7.24608 61.5349 8.51961 61.1353L100.794 32.1651C101.031 32.0905 101.275 32.0529 101.52 32.0529C102.582 32.0529 103.509 32.7348 103.827 33.7495L109.899 53.0877C110.092 53.7044 110.034 54.3597 109.735 54.9325C109.436 55.5054 108.932 55.9274 108.315 56.121L16.0408 85.0917C15.8039 85.1663 15.5592 85.2039 15.3145 85.2039Z" stroke="white" stroke-width="0.440856" stroke-miterlimit="10"/>
                        <path d="M30.8239 59.5444L38.2803 57.1915L38.7629 58.7201L33.0939 60.5091L34.574 65.1994L39.8121 63.5466L40.2879 65.0544L35.0498 66.7072L37.0647 73.0936L35.2778 73.6576L30.8249 59.545L30.8239 59.5444Z" fill="white"/>
                        <path d="M44.5165 65.8604L44.4794 70.7531L42.631 71.3364L42.8814 55.7395L45.0382 55.0592L54.2158 67.6807L52.3053 68.2833L49.4259 64.3109L44.5165 65.8599V65.8604ZM48.6068 63.004L45.9695 59.3696C45.3705 58.5453 44.901 57.7727 44.4377 57.0209L44.3965 57.0339C44.4554 57.9365 44.5003 58.8662 44.5039 59.8089L44.4366 64.3198L48.6062 63.004H48.6068Z" fill="white"/>
                        <path d="M53.583 52.3629L58.0359 66.4755L56.249 67.0395L51.7961 52.9269L53.583 52.3629Z" fill="white"/>
                        <path d="M56.7049 51.3774L58.4918 50.8134L62.4627 63.3974L68.3785 61.5306L68.8611 63.0593L61.1583 65.49L56.7054 51.3774H56.7049Z" fill="white"/>
                        <path d="M75.9341 53.5524L70.5525 55.2507L72.1578 60.3385L78.1556 58.4457L78.6376 59.9743L70.8525 62.4306L66.3996 48.318L73.8764 45.9588L74.359 47.4874L68.6691 49.2827L70.0762 53.7424L75.4577 52.0441L75.9336 53.5519L75.9341 53.5524Z" fill="white"/>
                        <path d="M76.5654 45.3181C77.601 44.8068 78.8557 44.2731 80.2727 43.826C82.8401 43.0158 84.8597 43.046 86.4353 43.8156C88.0313 44.5783 89.2657 45.9844 89.9856 48.2669C90.7124 50.5703 90.6086 52.6749 89.7243 54.3815C88.8462 56.1089 86.9351 57.4951 84.2441 58.344C82.9706 58.7457 81.8828 59.0201 80.9457 59.2006L76.5654 45.3186V45.3181ZM82.2902 57.2332C82.7686 57.1743 83.4323 56.988 84.1309 56.7678C87.9514 55.5621 89.3387 52.7302 88.1367 48.919C87.1068 45.5832 84.591 44.0519 80.8111 45.2446C79.8866 45.5362 79.2147 45.8404 78.7754 46.0944L82.2902 57.2337V57.2332Z" fill="white"/>
                        <path d="M30.4857 30.3978L32.8768 28.1476L33.3291 28.6287L31.5114 30.3394L32.8997 31.8148L34.5792 30.234L35.0252 30.7083L33.3458 32.2891L35.2365 34.2982L34.6637 34.8377L30.4857 30.3984V30.3978Z" fill="#C13130"/>
                        <path d="M38.3475 29.1963L38.8797 31.1444L38.2015 31.5942L36.5591 25.3685L37.3505 24.8436L42.453 28.7748L41.7518 29.2396L40.1496 28.0016L38.3481 29.1963H38.3475ZM39.6738 27.5795L38.2067 26.4469C37.8738 26.1902 37.5984 25.9387 37.3281 25.6945L37.313 25.7044C37.4377 26.0561 37.5597 26.4202 37.6667 26.7943L38.1436 28.5943L39.6738 27.5795Z" fill="#C13130"/>
                        <path d="M42.8891 21.8531L45.4112 27.4032L44.6948 27.7287L42.1728 22.1786L42.8891 21.8531Z" fill="#C13130"/>
                        <path d="M46.4572 20.4486L47.2127 20.2274L48.7392 25.4446L51.2393 24.7132L51.4245 25.3471L48.1695 26.2997L46.4577 20.4491L46.4572 20.4486Z" fill="#C13130"/>
                        <path d="M56.6344 21.7174L54.2794 21.9783L54.5215 24.1627L57.1463 23.8716L57.2188 24.5279L53.8119 24.9057L53.1405 18.8469L56.4127 18.4843L56.4852 19.1406L53.9951 19.4166L54.2074 21.3314L56.5624 21.0705L56.6344 21.718V21.7174Z" fill="#C13130"/>
                        <path d="M60.2766 18.4634C60.7602 18.4321 61.3325 18.4269 61.9544 18.4801C63.0808 18.5766 63.8608 18.9069 64.3497 19.4479C64.8479 19.99 65.103 20.7199 65.019 21.7023C64.934 22.6936 64.5584 23.4782 63.9427 23.9885C63.3266 24.5076 62.3629 24.7335 61.1823 24.6323C60.6235 24.5843 60.1571 24.517 59.7648 24.4382L60.2771 18.4634H60.2766ZM60.6 23.9019C60.7952 23.9551 61.0826 23.9885 61.3894 24.0151C63.0657 24.1586 64.0559 23.2993 64.1968 21.6595C64.3288 20.2274 63.5958 19.2476 61.9372 19.1057C61.5318 19.0707 61.2225 19.0806 61.0112 19.1078L60.6 23.9019Z" fill="#C13130"/>
                        <defs>
                        <radialGradient id="paint0_radial_117_207" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.4177 58.6304) scale(42.7207 42.7207)">
                        <stop stop-color="#DE0808"/>
                        <stop offset="1" stop-color="#B11E19"/>
                        </radialGradient>
                        </defs>
                    </svg>`,
    cancelled_svg:`<svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.1425 105.26C84.8955 105.26 105.772 84.383 105.772 58.63C105.772 32.877 84.8955 12 59.1425 12C33.3894 12 12.5125 32.877 12.5125 58.63C12.5125 84.383 33.3894 105.26 59.1425 105.26Z" stroke="#C13130" stroke-width="0.875972" stroke-miterlimit="10"/>
                            <path d="M59.1424 102.907C83.5957 102.907 103.419 83.0832 103.419 58.63C103.419 34.1768 83.5957 14.3535 59.1424 14.3535C34.6892 14.3535 14.8659 34.1768 14.8659 58.63C14.8659 83.0832 34.6892 102.907 59.1424 102.907Z" stroke="#C13130" stroke-width="0.875972" stroke-miterlimit="10"/>
                            <path d="M59.1424 90.3179C76.6432 90.3179 90.8303 76.1307 90.8303 58.63C90.8303 41.1293 76.6432 26.9421 59.1424 26.9421C41.6417 26.9421 27.4546 41.1293 27.4546 58.63C27.4546 76.1307 41.6417 90.3179 59.1424 90.3179Z" stroke="#C13130" stroke-width="1.79786" stroke-miterlimit="10"/>
                            <path d="M59.1424 88.7183C75.7597 88.7183 89.2307 75.2473 89.2307 58.63C89.2307 42.0127 75.7597 28.5417 59.1424 28.5417C42.5252 28.5417 29.0542 42.0127 29.0542 58.63C29.0542 75.2473 42.5252 88.7183 59.1424 88.7183Z" stroke="#C13130" stroke-width="0.595285" stroke-miterlimit="10"/>
                            <path d="M46.9258 99.0312C46.6044 99.0687 46.0107 99.0072 45.3136 98.7547C43.6979 98.1688 42.8522 96.7079 43.533 94.8287C44.1836 93.0345 45.8401 92.2592 47.6176 92.9035C48.3318 93.1623 48.7273 93.479 48.8859 93.6517L48.4883 94.1906C48.2572 93.9527 47.8946 93.706 47.4183 93.5333C46.0748 93.046 44.8707 93.5813 44.325 95.0864C43.8163 96.4893 44.2973 97.6836 45.6919 98.1891C46.1427 98.3524 46.6357 98.4255 46.9858 98.3889L46.9263 99.0312H46.9258Z" fill="#C13130"/>
                            <path d="M51.5889 98.3524L50.6582 100.145L49.8547 100.015L52.8713 94.3268L53.8088 94.4781L54.8904 100.828L54.0598 100.694L53.7228 98.6973L51.5889 98.3524ZM53.6602 98.0639L53.3508 96.2363C53.2803 95.8216 53.2485 95.4501 53.2156 95.0875L53.1979 95.0849C53.0508 95.4276 52.8937 95.7777 52.7184 96.1252L51.8477 97.7712L53.6602 98.0639Z" fill="#C13130"/>
                            <path d="M58.3463 101.023L58.1386 94.9299L58.9974 94.9007L61.0551 97.9168C61.5314 98.6154 61.906 99.2451 62.2164 99.8592L62.2341 99.8498C62.134 99.0385 62.0907 98.2982 62.0583 97.3486L61.9712 94.7995L62.7126 94.7744L62.9202 100.867L62.1246 100.894L60.0846 97.8683C59.6365 97.2046 59.2061 96.5227 58.8763 95.8732L58.8497 95.8831C58.9212 96.65 58.964 97.3815 58.9984 98.3942L59.0871 100.998L58.3457 101.023H58.3463Z" fill="#C13130"/>
                            <path d="M70.9224 99.1637C70.673 99.3703 70.1419 99.6416 69.4193 99.8096C67.7451 100.198 66.2399 99.4324 65.7886 97.4853C65.3577 95.6259 66.3255 94.0738 68.1672 93.647C68.9075 93.4754 69.4109 93.526 69.6384 93.5844L69.5982 94.2528C69.2748 94.1792 68.836 94.1693 68.343 94.2841C66.951 94.607 66.2321 95.7115 66.5936 97.2709C66.9307 98.725 67.9846 99.4648 69.4292 99.1298C69.8962 99.0213 70.3495 98.8142 70.6234 98.593L70.9229 99.1642L70.9224 99.1637Z" fill="#C13130"/>
                            <path d="M76.0316 94.3534L73.8508 95.28L74.7101 97.3027L77.1408 96.2702L77.399 96.878L74.2437 98.2183L71.8599 92.6077L74.8901 91.3206L75.1483 91.9285L72.8423 92.9083L73.5957 94.6816L75.7765 93.755L76.0311 94.3545L76.0316 94.3534Z" fill="#C13130"/>
                            <path d="M77.193 90.0883L77.8592 89.6694L80.7537 94.2705L82.9585 92.8832L83.3102 93.442L80.4391 95.2482L77.193 90.0883Z" fill="#C13130"/>
                            <path d="M81.7189 86.5615L82.3325 86.0544L86.4244 91.0034L85.8108 91.5106L81.7189 86.5615Z" fill="#C13130"/>
                            <path d="M89.2051 84.2732L87.593 86.01L89.2041 87.5053L91.0009 85.5697L91.485 86.0189L89.1529 88.5315L84.6849 84.3843L86.9247 81.9714L87.4088 82.4206L85.7044 84.257L87.1167 85.5676L88.7288 83.8308L89.2062 84.2737L89.2051 84.2732Z" fill="#C13130"/>
                            <path d="M88.5984 80.0175C88.794 79.5741 89.0528 79.0633 89.3872 78.5364C89.9924 77.5816 90.6451 77.0421 91.3504 76.8575C92.061 76.6655 92.8264 76.7755 93.6591 77.3035C94.4996 77.8362 95.0223 78.5317 95.1908 79.3132C95.3672 80.0994 95.1235 81.0589 94.4891 82.0595C94.1891 82.5333 93.9142 82.9157 93.6632 83.2277L88.5984 80.0175ZM93.573 82.2385C93.7102 82.0898 93.8725 81.8503 94.0373 81.5905C94.9378 80.1693 94.6326 78.8943 93.2417 78.0131C92.0318 77.2357 90.8245 77.434 89.9334 78.84C89.7154 79.1838 89.5813 79.4629 89.5082 79.6628L93.5725 82.2385H93.573Z" fill="#C13130"/>
                            <path d="M30.671 39.3581C30.6501 39.681 30.4832 40.2539 30.1096 40.8946C29.2436 42.3789 27.6539 42.9486 25.9275 41.9412C24.2794 40.9791 23.814 39.2099 24.7672 37.5775C25.1501 36.9211 25.5326 36.5893 25.7308 36.4646L26.1899 36.9524C25.9145 37.1371 25.6067 37.4496 25.351 37.8874C24.6305 39.1218 24.9409 40.4026 26.3235 41.2092C27.6127 41.9615 28.8737 41.7027 29.6213 40.4214C29.8629 40.0071 30.023 39.5355 30.0502 39.1844L30.671 39.3581Z" fill="#C13130"/>
                            <path d="M31.5866 35.4092L32.592 37.1606L32.0489 37.7669L28.8909 32.1562L29.5248 31.4488L35.4531 33.9677L34.8918 34.5943L33.0292 33.7997L31.5866 35.4097V35.4092ZM32.4626 33.5101L30.7576 32.7839C30.3705 32.6195 30.0408 32.4453 29.7178 32.2773L29.7058 32.2909C29.915 32.5997 30.1248 32.9211 30.3225 33.256L31.2376 34.8776L32.4631 33.5101H32.4626Z" fill="#C13130"/>
                            <path d="M37.252 32.3801L33.6652 27.4508L34.3601 26.9453L37.7544 28.2897C38.5407 28.6012 39.2038 28.9132 39.8048 29.2476L39.8142 29.2299C39.2768 28.6143 38.8261 28.0252 38.2673 27.2573L36.7668 25.1949L37.3668 24.7587L40.9536 29.688L40.3098 30.1565L36.9249 28.7937C36.182 28.4953 35.4432 28.1718 34.8062 27.8186L34.7895 27.8421C35.2783 28.4374 35.7239 29.0191 36.3202 29.8382L37.853 31.9444L37.2531 32.3806L37.252 32.3801Z" fill="#C13130"/>
                            <path d="M47.2686 26.3578C47.0635 26.6082 46.594 26.9766 45.9168 27.2792C44.348 27.9804 42.7244 27.5171 41.9084 25.6921C41.13 23.9495 41.7827 22.2414 43.5085 21.4698C44.2019 21.1599 44.7064 21.1129 44.9406 21.127L45.0293 21.7906C44.698 21.7802 44.2655 21.8548 43.8028 22.0614C42.4979 22.6447 42.0039 23.8661 42.6571 25.3274C43.2659 26.6896 44.4419 27.2145 45.7958 26.6093C46.2335 26.4136 46.6389 26.1235 46.8648 25.8538L47.2681 26.3573L47.2686 26.3578Z" fill="#C13130"/>
                            <path d="M52.1743 22.2946L49.8678 22.8398L50.3733 24.9789L52.9439 24.3716L53.0957 25.0144L49.7593 25.8027L48.3569 19.8697L51.5613 19.1121L51.7131 19.7549L49.2746 20.3314L49.7175 22.2065L52.0241 21.6613L52.1738 22.2952L52.1743 22.2946Z" fill="#C13130"/>
                            <path d="M55.0934 18.3087L55.8864 18.2372L56.4613 24.633L55.6683 24.7045L55.0934 18.3087Z" fill="#C13130"/>
                            <path d="M59.7257 18.4104L60.5115 18.4495L60.2428 23.8791L62.8446 24.008L62.8117 24.6674L59.4242 24.4999L59.7252 18.4109L59.7257 18.4104Z" fill="#C13130"/>
                            <path d="M68.9248 22.9431L66.614 22.4183L66.1273 24.5615L68.703 25.1464L68.5569 25.7902L65.2143 25.0311L66.5645 19.086L69.7752 19.8154L69.6291 20.4592L67.1859 19.9041L66.7591 21.7828L69.0698 22.3077L68.9253 22.9426L68.9248 22.9431Z" fill="#C13130"/>
                            <path d="M73.4434 21.0702C73.9103 21.2006 74.4524 21.3848 75.0216 21.6404C76.0531 22.1037 76.6796 22.6729 76.9624 23.3454C77.2535 24.0215 77.253 24.7947 76.8487 25.6942C76.4407 26.6015 75.8266 27.2181 75.0769 27.4962C74.3236 27.7826 73.3396 27.6773 72.2586 27.1915C71.7473 26.9615 71.3294 26.7439 70.985 26.5399L73.4434 21.0702ZM71.9513 26.3093C72.1177 26.4241 72.378 26.5509 72.6587 26.6766C74.1931 27.3663 75.4119 26.8827 76.087 25.3812C76.6849 24.0732 76.3165 22.9061 74.7988 22.2242C74.4274 22.0573 74.1321 21.9644 73.9239 21.92L71.9513 26.3088V26.3093Z" fill="#C13130"/>
                            <path d="M100.266 30.4843L7.99164 59.4543C5.78714 60.1464 4.56112 62.4946 5.25323 64.6991L11.3247 84.0378C12.0169 86.2423 14.365 87.4683 16.5695 86.7762L108.844 57.8062C111.048 57.1141 112.274 54.7659 111.582 52.5615L105.51 33.2227C104.818 31.0182 102.47 29.7922 100.266 30.4843Z" fill="url(#paint0_radial_117_57)"/>
                            <path d="M15.3146 85.2045C14.2529 85.2045 13.3258 84.5226 13.007 83.5084L6.93523 64.1697C6.53559 62.8967 7.24618 61.5355 8.5197 61.1358L100.794 32.1656C101.031 32.091 101.275 32.0535 101.52 32.0535C102.582 32.0535 103.509 32.7354 103.827 33.7501L109.899 53.0883C110.092 53.705 110.034 54.3602 109.735 54.9331C109.436 55.5059 108.932 55.928 108.315 56.1216L16.0409 85.0918C15.804 85.1664 15.5593 85.204 15.3146 85.204V85.2045Z" stroke="white" stroke-width="0.440856" stroke-miterlimit="10"/>
                            <path d="M12.9116 71.9282C11.8859 68.6611 13.4688 65.5955 16.5866 64.6162C18.3172 64.0731 19.9757 64.3006 21.3082 65.2433L20.2877 67.1967C19.3528 66.5716 18.373 66.4031 17.3718 66.7172C15.4983 67.3052 14.6156 69.1474 15.2573 71.1915C15.899 73.2356 17.6765 74.2425 19.55 73.654C20.5512 73.3399 21.2587 72.6414 21.6635 71.5786L23.6174 72.5981C23.0675 74.1486 21.8367 75.2834 20.0916 75.8312C16.9878 76.8057 13.9368 75.1947 12.9111 71.9276L12.9116 71.9282Z" fill="white"/>
                            <path d="M31.3895 69.5293L26.7414 70.9885L26.5839 73.5898L24.21 74.3354L25.2691 62.0952L27.5574 61.3768L35.437 70.8106L33.0058 71.5739L31.39 69.5298L31.3895 69.5293ZM30.0622 67.8535L27.1719 64.202L26.887 68.8505L30.0622 67.8535Z" fill="white"/>
                            <path d="M42.2596 56.7607L45.6628 67.6L43.7606 68.1973L36.7032 63.1836L38.7692 69.7646L36.481 70.483L33.0778 59.6437L34.994 59.0421L42.0373 64.0606L39.9713 57.4796L42.2596 56.7612V56.7607Z" fill="white"/>
                            <path d="M45.706 61.6325C44.6803 58.3649 46.2632 55.2998 49.3811 54.3205C51.1116 53.7774 52.7702 54.0049 54.1026 54.9476L53.0822 56.901C52.1472 56.2759 51.1674 56.1074 50.1663 56.4215C48.2927 57.0095 47.41 58.8517 48.0517 60.8958C48.6934 62.9399 50.4709 63.9468 52.3444 63.3583C53.3456 63.0443 54.0531 62.3457 54.4579 61.2829L56.4118 62.3024C55.8619 63.8529 54.6312 64.9877 52.8865 65.5355C49.7828 66.5101 46.7318 64.899 45.706 61.632V61.6325Z" fill="white"/>
                            <path d="M65.64 59.1162L66.2718 61.129L58.5201 63.5629L55.1169 52.7235L62.6829 50.3481L63.3147 52.361L58.0516 54.0132L58.7903 56.3667L63.4384 54.9075L64.0509 56.8587L59.4028 58.318L60.1906 60.8264L65.6395 59.1157L65.64 59.1162Z" fill="white"/>
                            <path d="M64.7134 49.7111L67.0304 48.9839L69.7919 57.7791L74.8119 56.2029L75.4536 58.247L68.1166 60.5504L64.7134 49.7111Z" fill="white"/>
                            <path d="M73.3521 46.9987L75.6691 46.2714L78.4306 55.0666L83.4506 53.4905L84.0923 55.5346L76.7553 57.838L73.3521 46.9987Z" fill="white"/>
                            <path d="M92.5129 50.6794L93.1447 52.6923L85.393 55.1261L81.9898 44.2868L89.5553 41.9114L90.1871 43.9242L84.9239 45.5765L85.6627 47.93L90.3107 46.4707L90.9232 48.422L86.2752 49.8812L87.063 52.3897L92.5119 50.6789L92.5129 50.6794Z" fill="white"/>
                            <path d="M91.5869 41.2738L96.1347 39.8459C99.4101 38.8176 102.326 40.2497 103.357 43.5324C104.387 46.8151 102.813 49.6569 99.5379 50.6852L94.99 52.1131L91.5869 41.2738ZM98.7767 48.6614C100.764 48.0374 101.663 46.3434 101.011 44.2685C100.36 42.1936 98.6546 41.3171 96.6669 41.9411L94.5502 42.6058L96.6601 49.3261L98.7767 48.6614Z" fill="white"/>
                            <defs>
                            <radialGradient id="paint0_radial_117_57" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.4175 58.6298) scale(42.7207)">
                            <stop stop-color="#DE0808"/>
                            <stop offset="1" stop-color="#B11E19"/>
                            </radialGradient>
                            </defs>
                        </svg>`        
}