import bcrypt from 'bcrypt';
import { getOneUsername, insertUserAccount } from '../models/userModels.js';


async function hashPassword(password){
const saltRounds = 10;
    try{
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
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
    }
        return month_num;
    };
 

const valid_months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

export default async function validateUserInputs(req, res, next){
        const {firstname, 
                lastname,
                gender,
                username,   
                password,
                month,
                day,
                year
        } = req.body;

        const validate_acc = await getOneUsername(username.toLowerCase().trim());
        const dayNum = Number(day);
        const yearNum = Number(year);
        const currentYear = new Date().getFullYear();
        const age =  currentYear - yearNum;
        // Ensures username starts with a letter, contains only letters, numbers, or underscores, and is 6–12 characters long
        const username_regex = /^[A-Za-z][A-Za-z0-9_]{5,11}$/;
        // Ensures password has at least one lowercase, one uppercase, one number, a special character, is 8–20 characters long, and contains only letters and digits
        const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,20}$/;
        // Allows letters (A–Z, a–z), optional hyphens or apostrophes, and a length of 1–50 characters
        const name_regex = /^[A-Za-z]+([-' ][A-Za-z]+)*$/;

        try{
            if (!firstname || !lastname || !gender || !username || !password || !month || !dayNum || !yearNum){
                return res.status(400).json({ error:"Please fill up all the fields "});
            }
            else if(validate_acc){
                return res.status(409).json({error: "Username already exists!"});
            }
            else if(username.length < 6 || username.length > 12){
                return res.status(400).json({error: "Username must be 6 to 12 characters" });
            }
            else if(!username_regex.test(username)){
                return res.status(400).json({error:"Username can only contain letters, numbers, and underscores, and must start with a letter."});
            }
            else if(!password_regex.test(password)){
                return res.status(400).json({error: "Password has at least one lowercase, one uppercase, one number, a special character, is 8–20 characters long, and contains only letters and digits"})
            }
            else if(password.length < 8 || password.length > 20){
                return res.status(400).json({error: "Password must be 8 to 20 characters" });
            }
            else if(password.toLowerCase().trim() == username.toLowerCase().trim()){
                return res.status(400).json({error: "Username and Password cannot be the same"})
            }
            else if (gender !== "Male" && gender !== "Female"){
                return res.status(400).json({ error: "Invalid Gender Value."});
            }
            else if(!Number.isInteger(dayNum) || !Number.isInteger(yearNum)){
                return res.status(400).json({error: "Invalid Type!"});
            }
            else if(dayNum < 0 || dayNum > 31){
                return res.status(400).json({error: "Invalid Day!" })
            }
            else if(age < 13){
                return res.status(400).json({error: "Invalid Year!" })
            }
            else if(yearNum > currentYear){
                return res.status(400).json({error: "Invalid Year!" })
            }
            else if(!valid_months.includes(month)){
                return res.status(400).json({error: "Please select a valid Month."})
            }
            else if(!name_regex.test(firstname.trim()) || !name_regex.test(lastname.trim())){
                return res.status(400).json({error: "Name can only contain letters, optional hyphens or apostrophes, and must be 1–50 characters long"})
            }

            const fullname = `${firstname.trim()} ${lastname.trim()}`;
            const hash_password = await hashPassword(password);
            const month_num = monthNameToNumber(month);
            const day_padded = String(dayNum).padStart(2,"0");
            const date = `${yearNum}-${month_num}-${day_padded}`;
            const result = await insertUserAccount(fullname,username,hash_password,gender,date);
            res.status(201).json({success: true, user: result});
    }
    catch(err){
        console.error(err.message);
        console.error(err.stack);
        res.status(500).json({error: "Internal Server Error" });
    }
}