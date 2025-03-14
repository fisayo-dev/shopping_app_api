import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import Admin from '../models/admin.models.js'

const adminMiddleware = async (req, res, next) => {
    try {
        let token

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { 
            token = req.headers.authorization.split(' ')[1]
        }
        
        if (!token) return res.status(401).json({ message: 'Unauthorized' })
        
        const decoded = jwt.verify(token, config.env.jwt.secret)

        const admin = await Admin.findById(decoded.adminId)

        // If admin doesn't exist in database
        if (!admin) return res.status(401).json({ message: 'Unathorized' })
        
        next()

    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message})
    }
}

export default adminMiddleware
