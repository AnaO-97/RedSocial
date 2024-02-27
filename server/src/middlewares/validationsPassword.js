module.exports = ( req, res, next ) => {
    const { password } = req.body;
    
    const regex = /^(?=.*[a-zA-Z]{3})(?=.*\d{3}).{6,}$/;
    
    const validations = [
        password !== undefined,
        password ? password.length !== 0 : false,
        password ? password.length >= 6 : false,  
        regex.test(password)
    ]

    if(!validations[0] || !validations[1])
        return res.status(400).json({ error: "Please enter a password" })
    if(!validations[2])
        return res.status(400).json({ error: "Enter minimum 6 characters" })
    if(!validations[3])
        return res.status(400).json({ error: "Enter at least 3 letters and 3 numbers" })

    else next();   
}