const Crypto = require('crypto-js');

const crypto = require('crypto');
var encrypt = ((val) => {
  let cipher = crypto.createCipheriv('aes-256-gcm', process.env['ENC_KEY'], process.env['IV']);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
});

var decrypt = ((encrypted) => {
  encrypted = encrypted.replace(new RegExp(' ', 'g'), '+');
  let decipher = crypto.createCipheriv('aes-256-gcm', process.env['ENC_KEY'], process.env['IV']);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  return (decrypted + decipher.final('utf8'));
});

module.exports = {
  encrypt,
  decrypt
 
};
