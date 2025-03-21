import Cart from '../models/cart.model.js'
import User from '../models/user.model.js'

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password')
        res.status(200).json({
            success: true,
            message: "All the users were found",
            data: {
                length: users.length,
                users
            }
        })
    } catch (error) {
        next(error)
    }
}

export const getParticularUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await User.findById(id).select('-password')
        if (req.user._id != id) {
            const error = new Error("You can't access someone else' details")
            error.statusCode = 401
            throw error
        }
        res.status(200).json({
            success: true,
            message: "Got your details",
            data: {
                user,
            }
        })
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    const userExist = await User.findByIdAndUpdate(req.params.id, { ...req.body })
    if (!userExist)  {
        const error = new Error("The user doesn't exist")
        error.statusCode = 404
        next(error)
    }

    const updatedUser = await User.findById(req.params.id)

    res.status(200).json({
        success: true,
        message: 'Your account has been successfully updated',
        data: {
            user: updatedUser
        }
    })
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        // Check if user exist
        const userExist = await User.findByIdAndDelete(id)

        if (!userExist) {
            const error = new Error("The user doesn't exist")
            error.statusCode = 404
            next(error)
        }

        // Find all cart items with user as delete them
        await Cart.deleteMany({ owner: id })

        res.status(200).json({
            success: true,
            message: "Successfuly deleted your account",
        })

    } catch (error) {
        next(error)
    }

}
