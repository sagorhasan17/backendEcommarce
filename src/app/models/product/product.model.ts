import { Schema, model } from "mongoose";
import type { IProduct } from "./product.interface.js";

const productSchema = new Schema<IProduct>(
  {
    productId: { type: String, index: true },
    title: { type: String, required: true },
    slug: { type: String, index: true },
    shortDescription: { type: String, required: true},
    description: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    compareAtPrice: { type: Number },
    currency: { type: String, default: "BDT" },
    images: { type: String }, 
    sku: { type: String },
    stock: { type: Number, default: 0, required: true},
    available: { type: Boolean},
    weight: { type: Number },
    dimensions: {
      length: { type: Number },
      width: { type: Number },
      height: { type: Number },
    },
    tags: [{ type: String }],
    attributes: { type: Map, of: Schema.Types.Mixed },
    rating: { type: Number, default: 0 },
    reviews: { type: String }, 
    meta: { type: Map, of: Schema.Types.Mixed },
    sellerId: { type: Schema.Types.ObjectId},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true, required: true},
  },
  {
    timestamps: true, //
  }
);


const ProductModel = model<IProduct>("Product", productSchema);

export default ProductModel;