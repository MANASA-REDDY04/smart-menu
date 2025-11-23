import express from "express";
import {  getCategoriesByVendor,
  deleteCategory,
} from "../controllers/category.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();


// Get all categories for logged-in vendor
router.get("/", authMiddleware, getCategoriesByVendor);

// Delete a category
router.delete("/:categoryId", authMiddleware, deleteCategory);

export default router;
