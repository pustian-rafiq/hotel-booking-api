import User from "../models/user.js"



export const createUserController = async (req,res,next) => {
 
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        await newUser.save();
        res.status(201).json({
            "message": "New user has been created successfully",
            "data": newUser
        })

    }catch(err){
        next(err)
    }
}