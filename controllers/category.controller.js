import Category from "../models/category.model.js"

export const getAllCategories = async (req,res,next) => {
    try {
        const categories = await Category.find()
        res.status(200).json({
            success: true,
            message: 'Found all categories',
            categories,
            length: categories.length
        })
    } catch (error) {
        next(error)
    }
}
export const createCategory = async (req,res,next) => {
    try {
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
export const updateCategory = async (req,res,next) => {

}
export const deleteCateogry = async (req,res,next) => {

}