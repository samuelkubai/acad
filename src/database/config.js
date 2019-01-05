const env = require('../config/environment');

const defaultConfig = {
  "username": env.POSTGRES_USER,
  "password": env.POSTGRES_PASSWORD,
  "database": env.POSTGRES_DATABASE,
  "host": env.POSTGRES_HOST,
  "dialect": env.POSTGRES_DIALECT,
  "port": env.POSTGRES_PORT
};


const database = {
  development: { ...defaultConfig },
  test: { ...defaultConfig },
  staging: { ...defaultConfig },
  production: { ...defaultConfig }
};

module.exports = database;
