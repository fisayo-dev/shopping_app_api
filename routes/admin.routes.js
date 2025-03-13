import { Router } from "express";

const router = Router()

router.post("/sign-up", signupAdmin)
router.post("/sign-in", signinAdmin)
router.post("/sign-out", signoutAdmin)

export default router;