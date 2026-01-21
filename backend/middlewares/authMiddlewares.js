import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {getOneUsername} from '../models/userModels.js'


export async function login (req,res,next){
    try{
    const {username, password} = req.body;
    const user = await getOneUsername(username);
    bcrypt.compare(password, user.password, (err, result) => {
        if (err){
            console.error(err);
            return;
        }
        if(result){
            //This is where you should:

            // Generate your JWT

            // Set cookies or send the token in the response

            // Return success status
        }

    }

    );

    }catch(err){
    res.status(401).json({error: ""})
    }
};




export function authenticate (req, res, next){
    const token = req.cookies.token;
    if (!token){
        return res.status(401).json({ error: 'Not Authenticated' });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(403).json({error: "Invalid Token"})
    }
};


