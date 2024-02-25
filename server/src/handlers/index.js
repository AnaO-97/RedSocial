const register = require("./userRegister");
const login    = require("./userLogin");

const userHandlers = {
    register,
    login
}

module.exports = {
    userHandlers
}