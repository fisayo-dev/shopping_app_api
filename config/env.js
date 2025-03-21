import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    env: {
        port: process.env.PORT,
        mongodbUrl: process.env.MONGODB_URL,
        jwt: {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRES_IN
        },
        nodemailer: {
            app_password: process.env.APP_PASSWORD,
            user: process.env.USER
        }
    }
}


export default config