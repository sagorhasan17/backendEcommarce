import type { Types } from "mongoose";

export interface IUser {
  userId: string; 
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: "customer" | "admin";
  addresses?:string; 
  wishlist?: string[]; 
  cart?: string;
  orders?: string[]; 
  createdAt?: Date;
  updatedAt?: Date;
}