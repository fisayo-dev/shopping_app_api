import { Router } from "express";
import { signinAdmin, signoutAdmin, signupAdmin } from "../controllers/admin.controller.js";
const router = Router()

router.post("/sign-up", signupAdmin)
router.post("/sign-in", signinAdmin)
router.post("/sign-out", signoutAdmin)

export default router;