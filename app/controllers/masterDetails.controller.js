const logger = require('../utils/logger');
const constants = require('../config/constants');
const { sequelize, Sequelize } = require("../models");

const getMasterDetails = async (req, res) => {
   try {
       const language_id = req.body.language_id || constants.LANGUAGE.EN;

       logger.info('Request received', {
           endpoint: '/masterdetails',
           method: 'POST',
           languageId: language_id
       });
       
       if (![constants.LANGUAGE.EN, constants.LANGUAGE.TH].includes(language_id)) {
           logger.warn('Invalid language_id provided', { language_id });
           return res.status(400).json({
               is_success: false,
               message: constants.MESSAGES[constants.LANGUAGE.EN].FAILED,
               data: null
           });
       }

       logger.info('Data processing started');
       
       const result = await sequelize.query('CALL GetMasterDetails(:language_id)', {
        replacements: {
            language_id: req.body.language_id
            },
        raw: true,
           type: Sequelize.QueryTypes.SELECT
       });

       const ClassificationArray = Object.values(result[0]);
       const LiabilitiesArray = Object.values(result[1]);

       return res.status(200).json({
           is_success: true,
           message: constants.MESSAGES[language_id].SUCCESS,
           data: {
               classifications: ClassificationArray,
               liabilities: LiabilitiesArray
           }
       });

   } catch (error) {
       logger.error('Error processing request', {
           error: error.message,
           stack: error.stack
       });
       return res.status(400).json({
           is_success: false,
           message: constants.MESSAGES[constants.LANGUAGE.EN].FAILED,
           data: null
       });
   }
};

module.exports = { getMasterDetails };
