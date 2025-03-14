import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    env: {
        port: process.env.PORT,
        mongodbUrl: process.env.MONGODB_URL,
        jwt: {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    }
}


export default config