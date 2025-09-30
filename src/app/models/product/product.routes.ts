import express from 'express';
import { CreateController } from './product.controller.js';

const router = express.Router();

router.post('/create-product', CreateController.CreateProductController);
router.get('/', CreateController.GetAllProductController);

export const ProductRoute = router;