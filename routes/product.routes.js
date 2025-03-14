import { Router } from "express";
import { getAllProducts, getParticularProduct, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js'
const router = Router()

router.get('/', getAllProducts)
router.get('/:id', getParticularProduct)
router.post("/", createProduct)
router.put("/:id/", updateProduct)
router.delete("/:id/", deleteProduct)



export default router