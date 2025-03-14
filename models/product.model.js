import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A product needs a title'],
    },
    description: {
        type: String,
        required: [true, 'A product need a description'],
        minLength: 15,
        maxLength: 255,
    },
    category: {
        type: String,
        enum: ['sports', 'applicances', 'health', 'lifestyle', 'gadgets', 'grocery', 'fruits', 'utenils', 'other'],
        trim: true,
        required: [true, 'A category is required'],
    },
    price: {
        type: Number,
        required: [true, 'An amount is required'],
        min: [0, 'Price must be greater than zero']
    },
    height: {
        type: "String",
        required: [true, 'A height is required']
    },
    width: {
        type: "String",
        required: [true, 'A width is required']
    },
    size: {
        type: "String",
        required: [true, 'A size is required']
    },
    quantity: {
        type: Number,
        default: 1,
        validate: {
            validator: (value) => value = 0, message: 'Product cannot have zero quantity'
        }
    },
    status: {
        type: String,
        enum: ['IN-STOCK', 'OUT-OF-STOCK'],
        default: 'IN-STOCK'        
    }
}, { timestamps: true })

const productModel = mongoose.model('Product', productSchema)
export default productModel