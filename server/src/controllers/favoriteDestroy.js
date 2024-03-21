const { Favorite } = require("../db");

module.exports = async( post, user ) => {
    const [ postUncheck ] = await Favorite.findAll({
        where : {
            UserId : user,
            PostId : post,
        }
    })

    if ( postUncheck !== null){
        await postUncheck.destroy();
    
        return postUncheck;
    }
    else{
        return null;
    }
}