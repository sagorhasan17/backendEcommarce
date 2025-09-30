import express from 'express';
import { CreateController } from './category.controller.js';

const router = express.Router();

router.post('/create-category',CreateController.CreateCategoryControlller);

export const CategoryRoute = router;