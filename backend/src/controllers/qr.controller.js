import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import QRCode from "qrcode";
import QR from "../models/qr.model.js";

// Generate QR for vendor
const generateQrForVendor = asyncHandler(async (req, res) => {
  const vendorId = req.vendor._id;

  const menuUrl = `${process.env.FRONTEND_URL}/menu/${vendorId}`;

  const qrImage = await QRCode.toDataURL(menuUrl);

  // Check if QR already exists
  let qrDoc = await QR.findOne({ vendorId });

  if (qrDoc) {
    qrDoc.qrUrl = qrImage;
    await qrDoc.save();
  } else {
    qrDoc = await QR.create({
      vendorId,
      qrUrl: qrImage,
    });
  }

  return res
    .status(201)
    .json(new ApiResponse(201, qrDoc, "QR generated successfully"));
});

// Get QR for vendor
 const getQrForVendor = asyncHandler(async (req, res) => {
  const vendorId = req.vendor._id;

  const qrDoc = await QR.findOne({ vendorId });

  if (!qrDoc) throw new ApiError(404, "QR not generated");

  return res
    .status(200)
    .json(new ApiResponse(200, qrDoc, "QR fetched"));
});

export {generateQrForVendor, getQrForVendor}