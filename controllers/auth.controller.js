import mongoose from "mongoose"
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import config from "../config/index.js"

export const signupUser = async (req, res, next) => { 
    try {
        // Create a  new user
        const { name, email, password, gender, dateOfBirth, country } = req.body
        
        // Check if user exist 
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            const error = new Error('User already exists')
            error.statusCode = 409;
            throw error
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user into database
        const newUsers = await User.create([{
            name, email, password: hashedPassword, gender, dateOfBirth, country
        }])
        
        // Generate token for user
        const token = jwt.sign({ userId: newUsers[0]._id }, config.env.jwt.secret, { expiresIn: config.env.jwt.expiresIn })

        // Retun success response
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
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            const error = new Error('User not found')
            error.statusCode = 404
            throw error
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        
        if (!isPasswordValid) {
            const error = new Error('Password is not valid')
            error.statusCode = 401
            throw error
        }

        const token = jwt.sign({ userId: user._id }, config.env.jwt.secret, { expiresIn: config.env.jwt.expiresIn })

        res.status(200).json({
            success: true,
            message: 'user signed in successfully',
            data: {
                token,
                user
            }
        })
    } catch (error) {
        next(error)
    }
    
}

export const signoutUser = async (req, res) => {
    
}
