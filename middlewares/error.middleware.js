const errMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err }
        error.message = err.message
        console.error(err)

        // Mongoose bad objectId
        if (err.name === 'CastError') {
            const message = 'Resource not found';
            error = new Error(message)
            error.statusCode = 404
        }
        
        // Mongosoe Duplicate Key
        if (err.code === 11000) {
            const message = 'Duplicate field value entered'
            error = new Error(message)
            error.statusCode = 400
        }

        // Mongoose validation error
        if (err.name == 'ValidationError') {
            const message = Object.values(err.errors).map(value => value.message)
            error = new Error(message.join(', '))
            error.statusCode = 404
        }

        res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Server Error' })
    } catch (error) {
        next(error)
    }
}

export default errMiddleware