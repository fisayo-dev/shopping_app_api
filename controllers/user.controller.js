import User from '../models/user.model.js'

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
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

const getParticularUser = async (req, res) => {

}
const createUser = async (req, res) => {

}
const updateUser = async (req, res) => {

}
const deleteUser = async (req, res) => {

}

export {createUser, getAllUsers, getParticularUser, updateUser, deleteUser}