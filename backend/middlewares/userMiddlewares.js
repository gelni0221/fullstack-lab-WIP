const bcrypt = require('bcrypt');


async function validateUserInputs(req, res, next){
    const {first_name, 
            last_name,
            gender,
            username,
            password,
            month,
            day,
            year
    } = req.body;
    try{

    }
    catch(err){
        console.error(err.message);
        console.error(err.stack);
        res.status(500).json({error: "Internal Server Error" });


    }


    next();
}