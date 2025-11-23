import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },

    categoryType1: {
      type: String,
      enum: ["Veg", "Non-Veg", "Drinks", "Desserts"],
      required: true,
    },
    categoryType2: {
      type: String,
      required: true,
      trim: true,
    },

    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
      },
    ],
  },
  { timestamps: true }
);

categorySchema.index({ vendorId: 1, categoryType1: 1, categoryType2: 1 }, { unique: true });

const Category = mongoose.model("Category", categorySchema);
export default Category;
