import Category from "../models/category.model.js"

export const getAllCategories = async (req,res,next) => {
    try {
        const categories = await Category.find()
        res.status(200).json({
            success: true,
            message: 'Found all categories',
            length: categories.length,
            categories,
        })
    } catch (error) {
        next(error)
    }
}
export const createCategory = async (req,res,next) => {
    try {
        const {text} = req.body; 
        const categoryExist = await Category.findOne({ text })
        if (categoryExist) {
            const error = new Error("The category name has already been taken")
            error.statusCode = 404
            throw error
        }
        const newCategory = await Category.create({ ...req.body })
        res.status(201).json({
            success: true,
            message: `🆗 ${req.body.text} is now a category!`,
            data: {
                newCategory 
            }
        })
    } catch (error) {
        next(error)
    }
}
export const updateCategory = async (req, res, next) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, {...req.body})
        if (!updatedCategory) {
            const error = new Error("The category doesn't exist")
            error.statusCode = 404
            throw error
        }

        const currentCategory = await Category.findById(req.params.id)

        res.status(200).json({
            success: true,
            message: 'Category successfully updated',
            data: {
                currentCategory
            }

        })
    } catch (error) {
        next(error)
    }

}
export const deleteCateogry = async (req,res,next) => {
    try {   
        const categoryExist = await Category.findByIdAndDelete(req.params.id)
        if (!categoryExist) {
            const error = new Error('Oops, category does not exist')
            error.statusCode = 404
            throw error
        }
        res.status(200).json({
            success: true,
            message: "Your category has been successfully deleted"
        })
    } catch (error) {
        next(error)
    }
}