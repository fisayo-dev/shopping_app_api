import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner id is required']
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product id is required']
    },
    amount: {
        type: Number,
        default: 1
    }
})

const cartModel = mongoose.model('Cart', cartSchema)
export default cartModel