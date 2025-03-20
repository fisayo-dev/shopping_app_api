import { Router } from "express";
import { createUser, getAllUsers, getParticularUser, updateUser, deleteUser } from '../controllers/user.controller.js'
import authorize from '../middlewares/auth.middleware.js'
import adminMiddleware from '../middlewares/admin.middleware.js'


const router = Router()

router.get('/', adminMiddleware, getAllUsers)
router.get('/:id', authorize, getParticularUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete("/:id", deleteUser)

export default router