import { Router } from "express";
import { getAllProducts, getParticularProduct } from '../controllers/product.controller.js'
const router = Router()

router.get('/', getAllProducts)
router.get('/:id', getParticularProduct)


export default router