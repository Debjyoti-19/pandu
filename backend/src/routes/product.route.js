import { Router } from 'express'
import { handleAddItem } from '../controllers/product.controller.js'

const router = Router()

router.post('/add-item', handleAddItem)

export default router