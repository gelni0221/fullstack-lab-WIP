const express = require('express');
const router = express.Router();
const {validateUserInputs} = require('../middlewares/userMiddlewares');


router.post('/api/v1/register', validateUserInputs, async (req, res) =>{

    
});


module.exports = router; 