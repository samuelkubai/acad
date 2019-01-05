require('dotenv').config();
const envExists = require('./utils');

const env = {
  ...process.env
};

module.exports = envExists(env);
