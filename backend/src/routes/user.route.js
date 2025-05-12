import { Router } from "express";
import { handleLogin, handleSignup, handleLogout, checkAuth } from "../controllers/user.controller.js";
import { protectRoute } from '../middlewares/auth.middleware.js'

const router = Router();

router.post('/signup', handleSignup)
router.post('/login', handleLogin)
router.post('/logout', handleLogout)

router.get('/check', protectRoute, checkAuth)

export default router