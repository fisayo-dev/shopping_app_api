import { Router } from "express";
import { getAllUsers, getParticularUser, updateUser, deleteUser } from '../controllers/user.controller.js'
import authorize from '../middlewares/auth.middleware.js'
import adminMiddleware from '../middlewares/admin.middleware.js'


const router = Router()

router.get('/', adminMiddleware, getAllUsers)
router.get('/:id', authorize, getParticularUser)
router.put('/:id', updateUser)
router.delete("/:id", authorize, deleteUser)

export default router