import { Router } from "express";
import { signupUser, signinUser, signoutUser } from "../controllers/auth.controller.js";

const router = Router()

router.post('/sign-up', signupUser)
router.post('/sign-in', signinUser)
router.post('/sign-out', signoutUser)

export default router