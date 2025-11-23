import express from "express";
import {
  generateQrForVendor,
  getQrForVendor
} from "../controllers/qr.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// Generate QR for vendor menu
router.post("/generate", authMiddleware, generateQrForVendor);

// Get existing QR code of vendor
router.get("/", authMiddleware, getQrForVendor);

export default router;
