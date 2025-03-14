import mongoose from "mongoose";
import config from '../config/index.js'

const DB_URI = config.env.mongodbUrl

if (!DB_URI) {
    throw new Error('Pls define the mongodb_uri environment variable inside .env')
}

// Connect ro DB

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log('Connected to database!')
    } catch (error) {
        console.log('Error connecting to database',error)
    }
}

export default connectToDatabase