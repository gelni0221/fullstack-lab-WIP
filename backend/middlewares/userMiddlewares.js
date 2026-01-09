const bcrypt = require('bcrypt');
const { getOneUsername } = require('../models/userModels');
import bcrypt from "bcrypt";

async function hashPassword(password){
const saltRounds = 10;
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return salt;
    }
    catch(err){
    console.error(err);
    throw err;
    }}

    // made it arrow func cuz why not
const monthNameToNumber = (month) => {
    let month_num;
    switch (month){
        case "January":
        month_num = "01";
        break;
        case "February":
        month_num = "02";
        break;
        case "March":
        month_num = "03";
        break;
        case "April":
        month_num = "04";
        break;
        case "May":
        month_num = "05";
        break;
        case "June":
        month_num = "06";
        break;
        case "July":
        month_num = "07";
        break;

        case "August":
        month_num = "08";
        break;

        case "September":
        month_num = "09";
        break;

        case "October":
        month_num = "10";
        break;

        case "November":
        month_num = "11";
        break;

        case "December":
        month_num = "12";
        break;
    }};
 

const valid_months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

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
                return res.status(400).json({ error:"Please fill up all the fields "});
            }
            else if(validate_acc.length > 0){
                return res.status(409).json({error: "Username already exists!"});
            }
            else if(username.length < 6 || username.length > 12){
                return res.status(400).json({error: "Username must be 6 to 12 characters" });
            }
            else if(password.length < 8 || password.length > 20){
                return res.status(400).json({error: "Password must be 8 to 20 characters" });
            }
            else if (gender !== "Male" && gender !== "Female"){
                return res.status(400).json({ error: "Invalid Gender Value."});
            }
            else if(!Number.isFinite(day) || !Number.isFinite(year)){
                return res.status(400).json({error: "Invalid Type!"});
            }
            else if(!valid_months.includes(month)){
                return res.status(400).json({error: "Please select a valid Month."})
            }

            const fullname = `${first_name} ${last_name}`;
            const hash_password = await hashPassword(password);
            const month_num = monthNameToNumber(month);
            const day_padded = String(day).padStart(2,"0");
            const date = `${year}-${month_num}-${day_padded}`;

            
    next();
    }
    catch(err){
        console.error(err.message);
        console.error(err.stack);
        res.status(500).json({error: "Internal Server Error" });
    }
}