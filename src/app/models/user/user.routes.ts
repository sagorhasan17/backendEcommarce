import express from 'express';
import { CreateController } from './user.controller.js';

const router = express.Router();

router.post('/create-user',CreateController.CreateUserController);

export const UserRoute = router;