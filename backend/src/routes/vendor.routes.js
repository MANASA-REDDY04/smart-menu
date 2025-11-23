import express from "express";
import {
  registerVendor,
  loginVendor,
  logoutVendor,
  getVendorProfile,
} from "../controllers/vendor.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerVendor);
router.post("/login", loginVendor);
router.post("/logout", logoutVendor);


router.get("/profile", authMiddleware, getVendorProfile);

export default router;
