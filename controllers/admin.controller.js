import Admin from "../models/admin.models.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import config from "../config/index.js"

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
        const token = jwt.sign({ adminId: newAdmins[0]._id }, config.env.jwt.secret, { expiresIn: config.env.jwt.expiresIn })

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

const signinAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const admin = await Admin.findOne({ email })
        if (!admin) {
            const error = new Error('User not found')
            error.statusCode = 404
            throw error
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password)
        
        if (!isPasswordValid) {
            const error = new Error('Password is not valid')
            error.statusCode = 401
            throw error
        }

        const token = jwt.sign({ adminId: admin._id }, config.env.jwt.secret, { expiresIn: config.env.jwt.expiresIn })

        res.status(200).json({
            success: true,
            message: 'Admin signed in successfully',
            data: {
                token,
                admin
            }
        })
    } catch (error) {
        next(error)
    }
}

const signoutAdmin = async (req, res) => {
    
}



export { signinAdmin, signoutAdmin, signupAdmin }