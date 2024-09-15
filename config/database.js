const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

let HOST = process.env.DB_HOST;
let USER = process.env.DB_USER;
let PASSWORD = process.env.DB_PASS;
let DIALECT = "postgres";
let DB = process.env.LIVE_DB;
let max_connection =10;

// Set up Sequelize connection to PostgreSQL
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    operatorsAliases: 0,
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    },
    timezone: '+05:30',
    logging: false,
    pool: {
        max: max_connection,
        min: 0,
        idle: 10000,
        acquire: 120000
    },
    retry: {
        max: 5
    },
});

module.exports = {
    sequelize
};
