import dotenv from 'dotenv';
dotenv.config();
import mysql from "mysql2";

const database = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
}).promise();

export default database;