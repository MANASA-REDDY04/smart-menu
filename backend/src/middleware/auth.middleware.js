import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import Vendor from "../models/vendor.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json(new ApiError(401, "Unauthorized user"));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.vendor = await Vendor.findById(decoded.id).select("-password");
    next();

  } catch (error) {
    res.status(401).json(new ApiError(401, "Invalid token"));
  }
};

export { authMiddleware };
