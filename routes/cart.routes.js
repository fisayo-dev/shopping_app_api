import { Router } from "express";
import { deleteItemFromCart, updateItemInCart, addItemToCart, getAllItemsInCart,  } from '../controllers/cart.controller.js'
import authorize from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/users/:user_id', authorize, getAllItemsInCart)
router.post('/', authorize, addItemToCart)
router.put('/:id/', authorize, updateItemInCart)
router.delete('/:id/users/:user_id', authorize, deleteItemFromCart)

export default router