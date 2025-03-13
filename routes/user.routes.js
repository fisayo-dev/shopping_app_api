import { Router } from "express";
import {createUser, getAllUsers, getParticularUser, updateUser, deleteUser} from '../controllers/user.controller.js'

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getParticularUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete("/:id", deleteUser)

export default router