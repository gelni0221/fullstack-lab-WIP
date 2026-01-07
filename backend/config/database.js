require("dotenv").config();
const mysql = require("mysql2");


const database = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
}).promise();

module.exports = database;