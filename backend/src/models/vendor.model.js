import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
    },
    stallName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    resetPasswordOTP: {
      type: String,
      default: null,
    },
    resetPasswordOTPExpires: {
      type: Date,
      default: null,
    },
    resetPasswordVerified: {
      type: Boolean,
      default: false,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  { timestamps: true }
);

vendorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

vendorSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

vendorSchema.methods.generateOTP = async function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  this.resetPasswordOTP = otp;
  this.resetPasswordOTPExpires = Date.now() + 10 * 60 * 1000; // 10mins
  this.resetPasswordVerified = false;

  return otp;
};

vendorSchema.methods.verifyOTP = async function (otp) {
  if (!otp.trim()) return false;
  if (this.resetPasswordOTP === otp && resetPasswordOTPExpires > Date.now()){
    this.resetPasswordVerified = true
    return true
  }
  return false;
};

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;
