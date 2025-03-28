import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        trim: true,
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Date of Birth is required'],
    },
    country: {
        type: String,
        required: [true, 'Country is required'],
        lowercase: true,
    },
}, { timestamps: true })


const User = mongoose.model('User', userSchema)
export default User