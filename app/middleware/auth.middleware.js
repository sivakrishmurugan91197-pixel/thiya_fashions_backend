const { AUTH } = require('../config/constants');
const logger = require('../utils/logger');
const { isNullOrUndefined } = require("util");
const jwt = require('jsonwebtoken');

const isValidClient = (clientId, clientSecret) => {
	logger.info("isvalidclient calling");
    return clientId == process.env['JWT_CLIENT_ID'] && clientSecret == process.env['JWT_SECRET'];
};


const validateHeaders = (req, res, next) => {
	logger.info("validateHeaderss method called");
	
    const token = req.get('authToken');
    const clientId = req.get('clientId');
    const clientSecret = req.get('clientSecret');
	logger.info("clientId"+clientId);
	logger.info("clientSecret"+clientSecret);
	logger.info("validateHeaders method calledend");
	logger.info("clientId"+clientId);
	logger.info("clientSecret"+clientSecret);

    try {
        if (token) {
            const decodedToken = jwt.decode(token);
            logger.info('Token validation', {
                expTime: decodedToken.exp,
                expDate: new Date(decodedToken.exp * 1000)
            });
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.decoded = decoded;
			logger.info("Decorded"+ decoded)
			logger.info("decoded.quote_id"+decoded.quote_id);
			logger.info("decoded.language_id"+decoded.language_id);
			req.quote_id = decoded.quote_id;

            req.body.quote_id = decoded.quote_id;
            req.body.language_id = decoded.language_id;
			logger.info("request body quote_id"+req.body.quote_id);
            next();
        } else if (clientId != null && clientSecret != null) {
            if (isValidClient(clientId, clientSecret)) {
                next();
            } else {
                return res.status(401).json({
                    is_success: false,
                    data: null,
                    message: "Mismatch clientId and clientSecret.. check the values"
                });
            }
        } else {
            return res.status(401).json({
                is_success: false,
                data: null,
                message: "Token or client id and secret not found for authorization"
            });
        }
    } catch (err) {
        logger.error(`Error in verifying json token: ${err.message}`);
        return res.status(401).json({
            is_success: false,
            data: null,
            message: `Error ${err.message}`
        });
    }
};


module.exports = {
    validateHeaders
};