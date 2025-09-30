import type { Request, Response } from 'express';
import { CreateService } from '../product/product.service.js';

const CreateCategoryControlller = async(req:Request , res:Response) =>{
    try{
            const category = await CreateService.CreateProductService(req.body)
            res.status(201).json({
            success: true,
            status: 'success',
            message: 'category created successfully',
            data: category
        })
    }catch(error){
        console.log(error)
    }


}

export const CreateController ={
    CreateCategoryControlller
}