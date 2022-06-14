import User from "../models/user.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js";

//Register
export const registerUserController = async (req, res, next) => {

    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash ,
        })
        await newUser.save();
        res.status(201).json({
            "message": "New user has been created successfully",
            "data": newUser
        })

    } catch (err) {
        next(err)
    }
}

//Login
export const loginUserController = async (req, res, next) => {

    try {
       const user = await User.findOne({username: req.body.username});
       if(!user){
        return next(createError(404,"User not found "))
       }
       const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
       if(!isPasswordCorrect){
        return next(createError(404,"Username or password not found "))
       }
        res.status(200).json({
            "message": "Login successfull",
            "user": user
        })

    } catch (err) {
        next(err)
    }
}