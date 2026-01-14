import express from 'express';
const router = express.Router();
import validateUserInputs from '../middlewares/userMiddlewares.js';


router.post('/api/v1/register', validateUserInputs, async (req, res) =>{});


export default router;