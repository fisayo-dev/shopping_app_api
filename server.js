import express from 'express'
import mongoose from 'mongoose'
import config from './config/index.js'
import authRouter from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import cartRoutes from './routes/cart.routes.js'
import adminRoutes from './routes/admin.routes.js'

const app = express()

// JSON middleware
app.use(express.json())

app.use('/api/v1/auth/', authRouter)
app.use('/api/v1/users/', userRoutes)
app.use('/api/v1/carts/', cartRoutes)
app.use('/api/v1/admin/', adminRoutes)

// Listen to port
app.listen(config.env.port, () => {
    mongoose.connect(config.env.mongodbUrl)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
console.log(`Server running on port ${config.env.port}`)
})

export default app


