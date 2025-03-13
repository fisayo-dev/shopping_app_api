import { Router } from "express";

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getParticularUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete("/:id", deleteUser)

export default router