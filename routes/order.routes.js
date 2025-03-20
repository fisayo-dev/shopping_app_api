import { Router } from 'express'

const router = Router()

router.get('/my-orders', getOrder)
router.post('/make', makeOrders)

export default router