const userCreate = require("../controllers/userCreate");

module.exports = async( req, res, next ) => {
    try {        
        const { fullName, age, email, password } = req.body;

        const newUser = await userCreate({ fullName, age, email, password });

        req.userData = { fullName, age, email };

        next();
    } catch (error) {
        res.status(400).json({ error : error.message })
    }
};