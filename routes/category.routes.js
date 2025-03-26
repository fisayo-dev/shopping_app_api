import { Router } from 'express'

const router = Router()

router.get('/', getAllCategories)
router.post('/', createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCateogry)

export default router