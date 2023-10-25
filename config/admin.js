const crypto = require('crypto');

// Generate a secret key
const secret = crypto.randomBytes(16).toString('base64');


module.exports = ({ env }) => ({
  auth: {
    secret: secret,
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
