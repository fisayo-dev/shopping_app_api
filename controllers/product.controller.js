import Product from "../models/product.model.js"

const getAllProducts = async () => {

}

const getParticularProduct = async (req, res, next) => {
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

