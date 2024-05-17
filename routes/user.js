import express from "express";
import { register, login, profile } from "../controllers/user.js";
import { Authenticate } from "../middleware/auth.js";

const router = express.Router();

// user Register
router.post("/register", register);

// user Login
router.post("/login", login);

// profile
router.get('/user' , Authenticate , profile)

export default router;
