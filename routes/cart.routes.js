import { Router } from "express";
import { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart, deleteAllItemsFromCart } from '../controllers/cart.controller.js'
import authorize from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/users/:user_id', authorize, getAllItemsInCart)
router.post('/', authorize, addItemToCart)
router.put('/:id/', authorize, updateItemInCart)
router.delete('/remove/:id/', authorize, deleteItemFromCart)
router.delete('/clear/', authorize, deleteAllItemsFromCart)

export default router