import Product from "../models/product.model.js"

const getAllProducts = async () => {

}

const getParticularProduct = async () => {

}

const createProduct = async (req, res, next) => {
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

const updateProduct = async () => {

}

const deleteProduct = async () => {

}

export { createProduct, deleteProduct, updateProduct, getAllProducts, getParticularProduct }

