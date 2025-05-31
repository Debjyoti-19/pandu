import { Router } from "express";
import { handleAddItem, handleGetItem, handleGetItemByAdminId } from "../controllers/product.controller.js";
import multer from "multer";
import { protectRoute } from "../middlewares/auth.middleware.js";


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.post("/add-item", protectRoute, upload.single("image"), handleAddItem);
router.post("/get-admin-product", protectRoute, handleGetItemByAdminId);
router.get("/get-items", protectRoute, handleGetItem)

export default router;
