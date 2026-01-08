const bcrypt = require('bcrypt');
const { getOneUsername } = require('../models/userModels');
import bcrypt from "bcrypt";

async function hashPassword(password){
const saltRounds = 10;
    try{
        const salt = bcrypt.genSalt(saltRounds);
        const hash = bcrypt.hash(password, salt);
        return salt;
    }
    catch(err){
    console.error(err);
    throw err;
    }}

export async function validateUserInputs(req, res, next){
        const {first_name, 
                last_name,
                gender,
                username,
                password,
                month,
                day,
                year
        } = req.body;

        const validate_acc = await getOneUsername(username);
        try{
            if (!first_name || !last_name || !gender || !username || !password || !month || !day || !year){
                return res.status(400).json({ error:"Please fill up all the fields "})
            }
            else if(validate_acc){
                return res.status(409).json({error: "Username already exists!"});
            }
            else if(username.length < 6 || username.length > 12){
                return res.status(400).json({error: "Username must be 6 to 12 characters" })
            }
            else if(password.length < 8 || password.length > 20){
                return res.status(400).json({error: "Password must be 8 to 20 characters" })
            }
            

            const hash_password = hashPassword(password);
            

            
    next();
    }
    catch(err){
        console.error(err.message);
        console.error(err.stack);
        res.status(500).json({error: "Internal Server Error" });
    }
}