import User from "../models/user.models.js"

const signupUser = async (req, res) => {
    const { email, fullName, password, gender, telephone, dateOfBirth, country } = req.body
    
    if (!email || !fullName || !password || !gender || !telephone || !dateOfBirth || !country) return res.status(400).json({ message: 'Ensure all field are provided with data' })
    
    try {
        
        const newUser = new User({
            email, fullName, password, gender, telephone, dateOfBirth, country
        })
        
        const createdUser = await newUser.save()
        
        res.status(201).send({
            message: 'Your account has been successfully created',
            userId: createdUser._id
        })
    } catch (err) {
        res.status(500).json({ message: 'Error occurred when trying to create user', error: err.message })
    }
}

export {signupUser}