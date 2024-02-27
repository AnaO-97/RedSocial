const userCreate = require("../controllers/userCreate");

module.exports = async( req, res ) => {
    try {        
        const { fullName, age, email, password } = req.body;

        const newUser = await userCreate({ fullName, age, email, password });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
};