import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import Category from "../models/category.model.js";
import Vendor from "../models/vendor.model.js"



const getCategoriesByVendor = asyncHandler(async (req, res) => {
  const vendorId = req.vendor._id;

  const categories = await Category.find({ vendorId }).populate("items");

  return res
    .status(200)
    .json(new ApiResponse(200, categories, "Categories fetched"));
});

const deleteCategory = asyncHandler (async (req,res) => {
    const vendorId = req.vendor._id
    const categoryId = req.params.categoryId

    const category = await Category.findById(categoryId)
    if(!category){
        return res.status(400).json(new ApiError(400, 'category not found'))
    }

    if(String(category.vendorId) !== String(vendorId)){
         return res.status(401).json(new ApiError(401, 'Unauthorized action'))
    }

    await category.deleteOne()
    return res.status(200).json(new ApiResponse(200, {}, 'Category deleted successfully'))
})

export { getCategoriesByVendor, deleteCategory}