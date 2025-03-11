import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    passsword: { type: String, required: true },
    gender: { type: String, required: true },
    telephone: { type: Number, default: 0 },
    dateOfBirth: { type: Date, required: true },
    country: { type: String, required: true },
    lastActive: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
})

const userModel = mongoose.model('User', userSchema)
export default userModel