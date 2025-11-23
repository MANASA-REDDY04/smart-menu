import express from "express";
import {
  addMenuItem,
  getItemsByCategory,
  updateMenuItem,
  deleteMenuItem,
  toggleAvailability
} from "../controllers/menuItem.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// Add new item
router.post("/", authMiddleware, addMenuItem);

// Get items by category
router.get("/:categoryId", authMiddleware, getItemsByCategory);

// Update item details
router.put("/:itemId", authMiddleware, updateMenuItem);

// Delete item
router.delete("/:itemId", authMiddleware, deleteMenuItem);

// Toggle availability
router.patch("/:itemId/toggle", authMiddleware, toggleAvailability);

export default router;
