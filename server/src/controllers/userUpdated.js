const { User } = require("../db");
const bcryptCreate = require("../middlewares/bcryptCreate");

module.exports = async ( attributes, id ) => {
    const userChange = await User.findByPk(id);

    if(userChange){
        for (const att in attributes){
            if(att === "plainPassword"){
                userChange.password = await  bcryptCreate( attributes[ att ] );
            }
            else{
                userChange[ att ] = attributes[ att ];
            }
        }
        const userChanged = await userChange.save();
        return userChanged;
    }
    else{
        return null;
    }
};