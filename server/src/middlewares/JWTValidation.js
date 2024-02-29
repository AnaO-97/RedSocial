require('dotenv').config();
const { JWT_KEYSECRET } = process.env;
const jwt = require("jsonwebtoken");

module.exports = ( req, res, next ) => {
    const auxiliary  = req.headers['authorization'];    
    const existToken = auxiliary.split(" ")[1];

    if( existToken ){
        jwt.verify(
            existToken,
            JWT_KEYSECRET,
            ( error, userData ) => {
                if( error ){
                    res.status(400).json({ error: "Your token has expired or is incorrect" })
                }
                else{
                    console.log("lin16: validationJWT", userData);
                    next();
                }
            }
        )
    }
    else if ( !existToken ){
        res.status(400).json({ error: "Does not have access" })
    }
};