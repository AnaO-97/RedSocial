const userCreate = require("../controllers/userCreate");
const bcryptCreate = require("../middlewares/bcryptCreate");

module.exports = async( req, res, next ) => {
    try {        
        const { fullName, age, email, plainPassword } = req.body;

        const password = await  bcryptCreate( plainPassword );

        if( typeof password === "string" ){
            const newUser = await userCreate({ fullName, age, email, password });
            req.userData  = { fullName, age, email };
                               
            next();
        }
        else{
            res.status(400).json({ BcryptError : "error in server" }) 
        }

    } catch (error) {
        res.status(400).json({ RouteError : error.message })
    }
};