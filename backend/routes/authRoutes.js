import express from 'express';
import {login, authenticate} from '../middlewares/authMiddlewares.js';
const router = express.Router();

router.post('/api/v1/login', login, async (req,res) => {});
router.post('/api/v1/logout', authenticate, async (req,res) => {});
router.post('/api/v1/forgotpassword', async (req,res) => {});

export default router;

// A. Auth layer (shared)

// Handles:

// login

// logout

// refresh token

// forgot password

// This is role-agnostic.