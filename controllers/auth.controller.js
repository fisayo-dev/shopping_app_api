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
            const error = new Error('User already exists')
            error.statusCode = 409;
            throw error
        }

        // Hash password
        const salt = bcrypt.genSalt(10)
        const hashedPassword = bcrypt.hash(password, salt)

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
    // const { email, fullName, password, gender, telephone, dateOfBirth, country } = req.body
    
    // if (!email || !fullName || !password || !gender || !telephone || !dateOfBirth || !country) return res.status(400).json({ message: 'Ensure all field are provided with data' })
    
    // const hashedPassword = bcrypt.hashSync(password, 10)

    // try {
        
    //     const newUser = new User({
    //         email, fullName, hashedPassword, gender, telephone, dateOfBirth, country
    //     })
        
    //     const createdUser = await newUser.save()
        
    //     res.status(201).send({
    //         message: 'Your account has been successfully created',
    //         userId: createdUser._id
    //     })
    // } catch (err) {
    //     res.status(500).json({ message: 'Error occurred when trying to create user', error: err.message })
    // }
}

export const signinUser = async (req, res) => {
    
}

export const signoutUser = async (req, res) => {
    
}
