import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import MenuItem from "../models/menuItem.model.js";
import Category from "../models/category.model.js";

// Add Menu Item
const addMenuItem = asyncHandler(async (req, res) => {
  const { categoryType1, categoryType2, itemName, price, description } = req.body;
  const vendorId = req.vendor._id;

  if (!itemName || !price || !categoryType1 || !categoryType2) {
    return res.status(400).json(new ApiError(400, "All fields are required"));
  }

  // Check if category already exists
  let category = await Category.findOne({ vendorId, categoryType1, categoryType2 });

  // Create category only if first item
  if (!category) {
    category = await Category.create({
      vendorId,
      categoryType1,
      categoryType2,
      items: [],
    });
  }

  // Create item
  const newItem = await MenuItem.create({
    vendorId,
    categoryId: category._id,
    itemName,
    price,
    description,
  });

  // Add reference
  if (!category.items.includes(newItem._id)) {
    category.items.push(newItem._id);
    await category.save();
  }

  res.status(201).json(
    new ApiResponse(201, { category, item: newItem }, "Item added successfully")
  );
});


const getItemsByCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;

  const items = await MenuItem.find({ categoryId, vendorId: req.vendor._id });

  return res
    .status(200)
    .json(new ApiResponse(200, items, "Items fetched"));
});

// Update item
const updateMenuItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;

  const updatedItem = await MenuItem.findOneAndUpdate(
    { _id: itemId, vendorId: req.vendor._id },
    req.body,
    { new: true }
  );

  if (!updatedItem) {
    throw new ApiError(404, "Item not found or unauthorized");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedItem, "Item updated"));
});

// Delete item
const deleteMenuItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;

  const item = await MenuItem.findOne({ _id: itemId, vendorId: req.vendor._id });

  if (!item) throw new ApiError(404, "Item not found");

  await Category.findByIdAndUpdate(item.categoryId, {
    $pull: { items: item._id },
  });

  await item.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Item deleted"));
});

// Toggle availability
const toggleAvailability = asyncHandler(async (req, res) => {
  const { itemId } = req.params;

  const item = await MenuItem.findOne({ _id: itemId, vendorId: req.vendor._id });

  if (!item) throw new ApiError(404, "Item not found");

  item.isAvailable = !item.isAvailable;
  await item.save();

  return res
    .status(200)
    .json(new ApiResponse(200, item, "Availability toggled"));
});

export {addMenuItem, getItemsByCategory, updateMenuItem, deleteMenuItem, toggleAvailability}