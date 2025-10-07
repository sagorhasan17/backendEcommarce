import type { Request, Response } from 'express';
import { CreateService } from '../product/product.service.js';
import { error } from 'console';

const CreateUserController = async(req:Request, res:Response) =>{
    try{
        const user = CreateService.CreateProductService(req.body)
        res.status(201).json({
            success: true,
            status: 'success',
            message: 'Course created successfully',
            data: user
        })
    }catch{error}{
        console.log(error)
    }
}

export const CreateController ={
    CreateUserController
}