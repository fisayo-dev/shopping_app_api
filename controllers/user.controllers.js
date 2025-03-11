const signupUser = async (req,res) => {
    const { email, fullName, password, } = req.body
    
    res.status(201).send({message: 'Your accoutn has been successfully created'})
}