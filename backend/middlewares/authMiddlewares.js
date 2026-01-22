import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {getOneUsername} from '../models/userModels.js'
import dotenv from 'dotenv';
dotenv.config();

const jwt_secret = process.env.JWT_SECRET

export async function login (req,res,next){
    try{
    const {username, password} = req.body;
    const user = await getOneUsername(username);
    if (!user){
            res.status(401).json({ error: "Invalid Username" });
            return;
        }
    bcrypt.compare(password, user.password, (err, result) => {
        if(err){
            console.error(err);
            return res.status(500).json({error:"Internal Server Error"});
        }
        if (result === false){
            res.status(401).json({ error: "Invalid Password" });
            return;
        }
        if(result){
        const token = jwt.sign(
        { id: user.user_id, username: user.username, gender: user.gender, date_of_birth: user.date_of_birth },  // Data you want in the token
        jwt_secret,                // Secret key from .env
        { expiresIn: '24h' }       // Token expires in 24 hours
        );
        res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
        });
        return res.status(200).json({success:"Login Successful"});
        }

    }
    );
    }catch(err){
    return res.status(500).json({error: "Internal Server Error" });
    }
};




export function authenticate (req, res, next){
    const token = req.cookies.token;
    if (!token){
        return res.status(401).json({ error: 'Not Authenticated' });
    }
    try{
        const decoded = jwt.verify(token, jwt_secret);
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(403).json({error: "Invalid Token"})
    }
};


