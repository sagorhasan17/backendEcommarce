import type { ICategory } from "./category.interface.js";
import CategoryModel from "./category.model.js";


const CreateCategoryService = async(payLoad:ICategory) =>{
    const category = await CategoryModel.create(payLoad)
    return category
}

export const CreateService ={
    CreateCategoryService
}