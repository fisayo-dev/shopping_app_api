import Admin from "../models/admin.models.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import config from "../config/index.js"

const signinAdmin = async (req, res) => {
    
}

const signoutAdmin = async (req, res) => {
    
}

const signupAdmin = async (req, res, next) => {
    try {
        
        const { name, email, password } = req.body
        
        const adminExist = await Admin.findOne({ email })
        if (adminExist) {
            const error = new Error('This admin already exist')
            error.statusCode = 401
            throw error
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create new user into database
        const newAdmins = await Admin.create([{
            name, email, password: hashedPassword
        }])
        
        // Generate token for user
        const token = jwt.sign({ userId: newAdmins[0]._id }, config.env.jwt.secret, { expiresIn: config.env.jwt.expiresIn })

        // Return success response
        res.status(201).json({
            success: true,
            message: 'Admin created succesfully',
            data: {
                token,
                user: newAdmins[0],
            }
        })
    } catch (error) {
        next(error)
    }
}

export { signinAdmin, signoutAdmin, signupAdmin }