import { Router } from 'express'
import adminMiddleware from '../middlewares/admin.middleware.js'
import { getAllCategories,createCategory, updateCategory, deleteCateogry } from '../controllers/category.controller.js'

const router = Router()

router.get('/', getAllCategories)
router.post('/', adminMiddleware, createCategory)
router.put('/:id', adminMiddleware, updateCategory)
router.delete('/:id', adminMiddleware, deleteCateogry)

export default router