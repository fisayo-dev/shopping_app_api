import { Router } from "express";
import { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart, getParticularItemInCart } from '../controllers/cart.controller.js'


const router = Router()

router.get('/users/:user_id', getAllItemsInCart)
router.get('/:id/users/:user_id', getParticularItemInCart)
router.post('/users/:user_id', addItemToCart)
router.put('/:id/users/:user_id', updateItemInCart)
router.delete('/:id/users/:user_id', deleteItemFromCart)

export default router