import express from 'express';
const router = express.Router();

router.post('api/v1/auth/login', async (req,res) => {});

router.post('api/v1/auth/logout', async (req,res) => {});
router.post('api/v1/auth/forgotpassword', async (req,res) => {});

export default router;

// A. Auth layer (shared)

// Handles:

// login

// logout

// refresh token

// forgot password

// This is role-agnostic.