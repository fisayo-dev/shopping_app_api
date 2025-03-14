import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Pls fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
    }
}, { timestamps: true })


const Admin = mongoose.model('Admin', adminSchema)
export default Admin