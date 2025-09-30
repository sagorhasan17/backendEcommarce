import type { Request, Response } from 'express';
import { CreateService } from './product.service.js';


const CreateProductController = async (req: Request, res: Response) => {
    try {
        const product = await CreateService.CreateProductService(req.body)
        res.status(201).json({
            success: true,
            status: 'success',
            message: 'Course created successfully',
            data: product
        })
    }catch(error){
        console.log(error)
    }
}
const GetAllProductController = async (req: Request, res: Response) => {
    try {
        const GetProduct = await CreateService.GetAllProductService()
        res.status(201).json({
            success: true,
            status: 'success',
            message: 'Product Add Succefull',
            data: GetProduct
        })
    }catch(error){
        console.log(error)
    }
}

export const CreateController = {
    CreateProductController,
    GetAllProductController
}