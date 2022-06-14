import express from 'express'
import { deleteUserController, getUserController, getUsersController, updateUserController } from '../controllers/userController.js';

const router = express.Router();

//Update
router.put("/:id", updateUserController)

//Delete
router.delete("/:id", deleteUserController)

//Get Single

router.get("/:id", getUserController)

//Get All
router.get("/", getUsersController)

export default router