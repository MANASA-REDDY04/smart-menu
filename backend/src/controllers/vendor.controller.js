import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Vendor from "../models/vendor.model.js";
import { generateToken, cookieOptions } from "../utils/generateToken.js";


const registerVendor = asyncHandler(async (req, res) => {
  const { name, email, password, stallName, location } = req.body;

  if (!name || !email || !password || !stallName || !location)
    return res.status(400).json(new ApiError(400, "All fields are required"));

  const userExists = await Vendor.findOne({ email });
  if (userExists)
    return res.status(400).json(new ApiError(400, "Email already registered"));

  const vendor = await Vendor.create({ name, email, password, stallName, location });


  res.status(201).json(new ApiResponse(201, vendor, "Registered successfully"));
});


// Login
const loginVendor = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const vendor = await Vendor.findOne({ email });

  if (!vendor || !(await vendor.comparePassword(password)))
    return res.status(400).json(new ApiError(400, "Invalid credentials"));

  const token = generateToken(vendor._id);

  res.cookie("token", token, cookieOptions).json(
    new ApiResponse(200, {
      _id: vendor._id,
      name: vendor.name,
      email: vendor.email,
      stallName: vendor.stallName,
      location: vendor.location
    }, "Login successful")
  );
});


const logoutVendor = asyncHandler(async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) }).json(new ApiResponse(200, null, "Logged out"));
});

const getVendorProfile = asyncHandler(async (req, res) => {
  res.json(new ApiResponse(200, req.vendor));
});

export {
  registerVendor,
  loginVendor,
  logoutVendor,
  getVendorProfile
}
