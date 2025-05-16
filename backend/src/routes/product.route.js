<<<<<<< HEAD
import { Router } from 'express'
import { handleAddItem } from '../controllers/product.controller.js'

const router = Router()

router.post('/add-item', handleAddItem)

export default router
=======
import { Router } from "express";
import {
  handleAddItem,
} from "../controllers/product.controller.js";

const router = Router();

router.post('/add-item', handleAddItem)

export default router;
>>>>>>> d17c47592df4f517830b0c5da974286816165be4
