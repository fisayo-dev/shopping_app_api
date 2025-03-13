import { Router } from "express";
import { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart, getParticularItemInCart } from '../controllers/cart.controller.js'


const router = Router()

router.get('/all-items/user/:user_id', getAllItemsInCart)
router.get('/all-items/:id/user/:user_id', getParticularItemInCart)
router.post('/', addItemToCart)
router.put('/:id', updateItemInCart)
router.delete('/:id', deleteItemFromCart)

export default router