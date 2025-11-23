import express from "express";
import Vendor from "../models/vendor.model.js";
import Category from "../models/category.model.js";
import MenuItem from "../models/menuItem.model.js";

const router = express.Router();

// GET Public Menu
router.get("/menu/:vendorId", async (req, res) => {
  try {
    const { vendorId } = req.params;

    // 1) Check vendor exists
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
      return res.status(404).json({
        statusCode: 404,
        message: "Vendor not found"
      });
    }

    // 2) Fetch categories linked to vendor
    const categories = await Category.find({ vendorId });

    // 3) Fetch items for each category
    const result = [];

    for (let cat of categories) {
      const items = await MenuItem.find({ categoryId: cat._id });

      result.push({
        _id: cat._id,
        categoryType1: cat.categoryType1,
        categoryType2: cat.categoryType2,
        items
      });
    }

    return res.status(200).json({
      statusCode: 200,
      data: {
        vendor: {
          name: vendor.name,
          stallName: vendor.stallName,
          location: vendor.location,
          _id: vendor._id,
        },
        categories: result,
      },
    });
  } catch (error) {
    console.log("PUBLIC MENU ERROR:", error);
    return res.status(500).json({
      statusCode: 500,
      message: "Server error fetching public menu",
    });
  }
});

export default router;
