import { Router } from "express";
import { getAllProducts, getParticularProduct, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js'
import adminMiddleware from "../middlewares/admin.middleware.js";
const router = Router()

router.get('/', getAllProducts)
router.get('/:id', getParticularProduct)
router.post("/", adminMiddleware, createProduct)
router.put("/:id/", updateProduct)
router.delete("/:id/", deleteProduct)



export default router