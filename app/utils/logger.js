const winston = require('winston');
const path = require('path');
const fs = require('fs');

const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
   fs.mkdirSync(logsDir);
}

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
   return `${timestamp} ${level}: "${message}"`;
});

const logger = winston.createLogger({
   level: 'info', 
   format: winston.format.combine(
       winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss.SSSZ' }), 
       logFormat
   ),
   transports: [
       new winston.transports.File({
           filename: path.join(logsDir, 'combined.log'), 
           handleExceptions: true 
       })
   ]
});

module.exports = logger;
