import express from 'express'
import { deleteUserController, getUserController, getUsersController, updateUserController } from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get("/check",verifyToken,(req,res,next) => {
    res.send("you are logged in")
})
//Update
router.put("/:id",verifyUser, updateUserController)

//Delete
router.delete("/:id",verifyUser, deleteUserController)

//Get Single

router.get("/:id",verifyUser, getUserController)

//Get All
router.get("/",  getUsersController)

export default router