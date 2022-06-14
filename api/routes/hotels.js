import express from 'express'
import { createHotelController, deleteHotelController, getAllHotelController, getSingleHotelController, updateHotelController } from '../controllers/hotelController.js';


const router = express.Router();

//Hotel routes here

//Create
router.post("/", createHotelController)

//Update
router.put("/:id", updateHotelController)

//Delete
router.delete("/:id", deleteHotelController)

//Get Single

router.get("/:id", getSingleHotelController)

//Get All
router.get("/", getAllHotelController)


export default router