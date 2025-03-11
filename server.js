import express from 'express'
import mongoose from 'mongoose'
import config from './config'

const app = express()

// Listen to port
app.listen(config.env.port, () => {
    mongoose.connect(config.env.mongodbUrl)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
console.log(`Server running on port ${PORT}`)
})


