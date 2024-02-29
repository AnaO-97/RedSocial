require('dotenv').config();
const { JWT_KEYSECRET, JWT_EXPIRYTIME } = process.env;
const jwt = require("jsonwebtoken");

function generateJWT ( userData ) {
    return jwt.sign(
        userData,
        JWT_KEYSECRET,
        { expiresIn: JWT_EXPIRYTIME }
    )
}

module.exports = ( req, res ) => {
    const { userData } = req;
    const accessToken  = generateJWT( userData );

    res.header('authorization', accessToken).json({
        message : "Authenticated user",
        token   : accessToken,
        user    : userData,
    })
};