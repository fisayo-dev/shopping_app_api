import mongoose from "mongoose"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import config from "../config/index.js"

export const signupUser = async (req, res, next) => { 
    // A mongoose transaction session
    const session = await mongoose.startSession()
    session.startTransaction()

    try {
        // Create a  new user
        const { name, email, password, gender, dateOfBirth, country } = req.body
        
        // Check if suer exist
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(400).json({
                success: false,
                message: 'Oops, the user alreasy exist'
            })
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user into database
        const newUsers = await User.create([{
            name, email, password: hashedPassword, gender, dateOfBirth, country
        }], { session })
        
        // Generate token for user
        const token = jwt.sign({ userId: newUsers[0]._id }, config.env.jwt.secret, { expiresIn: config.env.jwt.expiresIn })

        await session.commitTransaction();
        session.endSession();


        res.status(201).json({
            success: true,
            message: 'User created succesfully',
            data: {
                token,
                user: newUsers[0],
            }
        })

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error)
    }
}

export const signinUser = async (req, res) => {
    
}

export const signoutUser = async (req, res) => {
    
}
