
import type { Types } from "mongoose";

export interface ICategory {
  categoryID: string;
  name: string;
  slug?: string;
  description?: string;
  parentId?: string | Types.ObjectId;
  image?: string;
  banner?: string;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
