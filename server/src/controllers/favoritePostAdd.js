const { Favorite } = require("../db");

module.exports = async( UserId, PostId ) => {
    const postAddUser = await Favorite.create({
        UserId, PostId,
    });

    return postAddUser;
}