import { Schema, model, type Document } from "mongoose";
import type { IUser } from "./user.interface.js";


const userSchema = new Schema<IUser>(
  {
    userId: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
      required: true,
    },
    addresses: { type: String }, 
    wishlist: [{ type: String }],
    cart: { type: String }, 
    orders: [{ type: String }], 

  },
  { timestamps: true }
);

export const UserModel = model<IUser>("User", userSchema);