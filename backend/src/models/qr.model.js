import mongoose from "mongoose";

const qrSchema = new mongoose.Schema(
  {
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    qrUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const QR = mongoose.model("QR",qrSchema)
export default QR
