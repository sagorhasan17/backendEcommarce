import type { IProduct } from "./product.interface.js";
import ProductModel from "./product.model.js";


const CreateProductService = async (payLoad: IProduct) => {
    const product = await ProductModel.create(payLoad)
    return product
}
const GetAllProductService = async () => {
    const product = await ProductModel.find({})
    return product
}

export const CreateService = {
    CreateProductService,
    GetAllProductService
}