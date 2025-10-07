import type { Types } from "mongoose";


export interface IProduct { 
  productId?: string;           
  title: string;
  slug?: string;                 
  shortDescription?: string;
  description?: string;
  category: Types.ObjectId; 
  brand?: string;
  price: number;
  compareAtPrice?: number;
  currency?: string;          
  images?: string;
  sku?: string;                  
  stock?: number;               
  available?: boolean;           
  weight?: number;              
  dimensions?: { length?: number; width?: number; height?: number }; 
  tags?: string[];
  attributes?: Record<string, string | number | boolean>; 
  rating?: number;               
  reviews?: string;           
  meta?: Record<string, any>;    
  sellerId?: string | Types.ObjectId; 
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}