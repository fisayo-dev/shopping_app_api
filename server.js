import express from 'express'
import cookieParser from 'cookie-parser'
import config from './config/env.js'
// Routes
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import cartRoutes from './routes/cart.routes.js'
import productRoutes from './routes/product.routes.js'
import adminRoutes from './routes/admin.routes.js'
import categoryRoutes from './routes/category.routes.js'
import orderRoutes from './routes/order.routes.js'
// Database
import connectToDatabase from './database/mongodb.js'
// Middleware
import arcjetMiddleware from './middlewares/arcjet.middleware.js'
import errMiddleware from './middlewares/error.middleware.js'

const app = express()

// Arcjet Middleware
app.use(arcjetMiddleware)

// JSON middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// API Routes (endpoints)
app.use('/api/v1/auth/', authRoutes)
app.use('/api/v1/users/', userRoutes)
app.use('/api/v1/carts/', cartRoutes)
app.use('/api/v1/admin/', adminRoutes)
app.use('/api/v1/orders/', orderRoutes)
app.use('/api/v1/products/', productRoutes)
app.use('/api/v1/category/', categoryRoutes)

// Error Middleware 
app.use(errMiddleware)

// Listen to port
app.listen(config.env.port, async() => {
    console.log(`Server running on port ${config.env.port}`)
    await connectToDatabase()
})

export default app


