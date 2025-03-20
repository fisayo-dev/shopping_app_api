import { Router } from 'express'
import { makeOrders, getOrder, getOrders } from '../controllers/order.controller'
import authorize from '../middlewares/auth.middleware'

const router = Router()

router.get('/my-orders', authorize, getOrders)
router.get('/my-orders/:id', authorize, getOrder)
router.post('/make', authorize, makeOrders)

export default router