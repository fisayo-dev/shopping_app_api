import User from '../models/user.model.js'

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password')
        res.status(200).json({
            success: true,
            message: "All the users were found",
            data: {
                users
            }
        })
    } catch (error) {
        next(error)
    }
}

const getParticularUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await User.findById(id).select('-password')
        res.status(200).json({
            success: true,
            message: "Got the user you are looking for",
            data: {
                user
            }
        })
    } catch (error) {
        next(error)
    }
}
const createUser = async (req, res) => {

}
const updateUser = async (req, res) => {

}
const deleteUser = async (req, res) => {

}

export {createUser, getAllUsers, getParticularUser, updateUser, deleteUser}