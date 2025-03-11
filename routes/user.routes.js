import express from "express";
import { signupUser } from "../controllers/user.controllers.js";

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Route is working'})
})

router.post('/signup', signupUser)

export default router