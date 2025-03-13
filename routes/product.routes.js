import { Router } from "express";

const router = Router()

router.get('', getAllProducts)
router.get('/:id', getParticularProduct)
router.post('/admin/:admin_id', createProduct)
router.put('/:id/admin/:admin_id', updateProduct)
router.delete("/:id/admin/:admin_id", deleteProduct)

export default router