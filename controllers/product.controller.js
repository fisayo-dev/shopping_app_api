import Product from "../models/product.model.js"

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            success: true,
            message: 'Got all products',
            data: {
                length: products.length > 0 ? products.length : 'The product database is empty!',
                products: products.sort((a,b) => b.createdAt - a.createdAt)
            }
        })

    } catch (error) {
        next(error)
    }
}

export const getParticularProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        const productExist = await Product.findById(id)
        if (!productExist) {
            const error = new Error('Oops, product does not exist')
            error.statusCode = 404
            throw error
        }
        
        res.status(200).json({
            success: true,
            message: 'Got the product your are looking for',
            data: {
                product: productExist
            }
        })

    } catch (error) {
        next(error)
    }
}

export const createProduct = async (req, res, next) => {
    try {
        // Create product
        const newProduct = await Product.create([{
            ...req.body
        }])
        res.status(201).json({
            success: true,
            message: "Product was created successfully",
            data: {
                product: newProduct[0]
            }
        })
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const productExist = await Product.findByIdAndUpdate(id, { ...req.body })
        if (!productExist) {
            const error = new Error('Oops, product does not exist')
            error.statusCode = 404
            throw error
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({
            success: true,
            message: 'Your product has been successfully updated',
            data: {
                product: updatedProduct
            }
        })
    } catch (error) {
        next(error)
    }

}

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        // Check if product exist
        const productExist = await Product.findByIdAndDelete(id)
        if (!productExist) {
            const error = new Error('Oops, product does not exist')
            error.statusCode = 404
            throw error
        }
        res.status(200).json({
            success: true,
            message: "Your product has been successfully deleted"
        })
    } catch (error) {
        next(error)
    } 

}
