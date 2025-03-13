import express from 'express'
import mongoose from 'mongoose'
import config from './config/index.js'
import userRoutes from './routes/user.routes.js'

const app = express()

// JSON middleware
app.use(express.json())

app.use('/api/v1/auth/', userRoutes)

// Listen to port
app.listen(config.env.port, () => {
    mongoose.connect(config.env.mongodbUrl)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
console.log(`Server running on port ${config.env.port}`)
})


