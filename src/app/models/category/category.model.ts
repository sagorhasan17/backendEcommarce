
import { Schema, model } from "mongoose";
import type { ICategory } from "./category.interface.js";

const CategorySchema = new Schema<ICategory>(
  {
    categoryID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, index: true },
    description: { type: String },
    parentId: { type: Schema.Types.ObjectId, ref: "Category" },
    image: { type: String },
    banner: { type: String },
    meta: {
      title: { type: String },
      description: { type: String },
      keywords: [{ type: String }],
    },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
);

const CategoryModel = model<ICategory>("Category", CategorySchema);

export default CategoryModel;
