import express from 'express'
import { createUserController } from '../controllers/userController.js';

const router = express.Router();

//User routes here
//register new user
router.post("/register", createUserController)

export default router