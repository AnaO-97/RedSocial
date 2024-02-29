const { User } = require("../db");

module.exports = async(email) => {
    const user = await User.findOne({ where: { email } });
    
    return user;
};