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

}
export const updateCategory = async (req,res,next) => {

}
export const deleteCateogry = async (req,res,next) => {

}