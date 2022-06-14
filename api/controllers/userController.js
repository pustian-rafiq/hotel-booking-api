import User from "../models/user.js"
import bcrypt from 'bcryptjs'

export const createUserController = async (req, res, next) => {

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