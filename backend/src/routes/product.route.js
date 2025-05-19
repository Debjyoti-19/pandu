import { Router } from "express";
import {
  handleAddItem,
} from "../controllers/product.controller.js";
import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = Router();

router.post('/add-item', upload.single('image'), handleAddItem)

export default router;
