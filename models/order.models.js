import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    productsOrdered: {
        type: [mongoose.Types.ObjectId],
        ref: 'Product',
        required: [true, 'You did not specify the products you ordered!']
    },
    totalPrice: {
        type: Number,
        required: [true, 'You did not specify the price of the order!']
    }
}, { timestamps: true })

const orderModel = mongoose.model('Order', orderSchema)
export default orderModel