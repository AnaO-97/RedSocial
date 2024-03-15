const { Post, User } = require("../db");

module.exports = async ( attributes, id ) => {        
    const postChange = await Post.findByPk(id);

    if(postChange){
        for (const att in attributes){               
            postChange[ att ] = attributes[ att ];
        }
        
        await postChange.save();

        const postChangedComplete = await Post.findByPk(
            id, 
            {
                include: {
                    model     : User,
                    attributes: ['id', 'fullName', 'color', 'age', 'email'],
                }
            }
        );

        return postChangedComplete;
    }
    else{
        return null;
    }
};