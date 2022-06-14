import Hotel from "../models/hotel.js"

//Create hotel controller
export const createHotelController = async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json("Something wrong");
    }

}

//Update hotel controller
export const updateHotelController = async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true
            }
        )
        res.status(200).json(updatedHotel);
    } catch (err) {
        res.status(500).json("Something wrong");
    }
}
//Delete hotel controller
export const deleteHotelController = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(
            req.params.id,
        )
        res.status(200).json("Hotel deleted successfully");
    } catch (err) {
        res.status(500).json("Something wrong");
    }
}

//Get single hotel controller
export const getSingleHotelController = async (req, res) => {
    try {
        const hotel = await Hotel.findById(
            req.params.id
        )
        res.status(200).json({ hotel });
    } catch (err) {
        res.status(500).json("Something wrong");
    }
}

//Get all hotel controller
export const getAllHotelController = async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.status(200).json({ hotels });
    } catch (err) {
        res.status(500).json("Something wrong");
    }
}