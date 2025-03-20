import { Router } from 'express'
import { makeOrders, getOrder, getOrders } from '../controllers/order.controller'

const router = Router()

router.get('/my-orders', getOrders)
router.get('/my-orders/:id', getOrder)
router.post('/make', makeOrders)

export default router