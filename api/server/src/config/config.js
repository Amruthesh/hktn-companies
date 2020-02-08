require('dotenv').config();

module.exports = {
  development: {
    database: 'hkcompanies',
    username: null,
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'hkcompanies',
    username: null,
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};