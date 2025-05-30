import { Router } from "express";
import { handleAddItem } from "../controllers/product.controller.js";
import multer from "multer";
import { protectRoute } from "../middlewares/auth.middleware.js";


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.post("/add-item",protectRoute, upload.single("image"), handleAddItem);

export default router;
