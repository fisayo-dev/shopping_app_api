import mongoose from "mongoose" 

const categorySchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'A category text is required']
    }
}, { timestamps: true })


const categoryModel = mongoose.model('Category', categorySchema)
export default categoryModel