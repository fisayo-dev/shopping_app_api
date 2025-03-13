import { Router } from "express";
import { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart,  } from '../controllers/cart.controller.js'


const router = Router()

router.get('/users/:user_id', getAllItemsInCart)
router.post('/', addItemToCart)
router.put('/:id/', updateItemInCart)
router.delete('/:id/', deleteItemFromCart)

export default router