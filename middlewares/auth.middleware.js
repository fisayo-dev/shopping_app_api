import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import User from '../models/user.model.js'

const authorize = async (req, res, next) => {
    try {
        let token

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { 
            token = req.headers.authorization.split(' ')[1]
        }
        
        if (!token) return res.status(401).json({ message: 'Unauthorized' })
        
        const decoded = jwt.verify(token, config.env.jwt.secret)

        const user = await User.findById(decoded.userId)

        if (!user) return res.status(401).json({ message: 'Unathorized' })
        
        next()

    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message})
    }
}

export default authorize
