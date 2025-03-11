import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    env: {
        port: process.env.PORT,
        mongodbUrl: process.env.MONGODB_URL
    }
}


export default config