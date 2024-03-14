const { Post, User } = require("../db");

module.exports = async() => {
    const allPosts = await Post.findAll({
        include: {
          model     : User,
          attributes: ['id', 'fullName', 'color',  'age', 'email'], 
        },
        order: [
          ['createdAt', 'DESC']
        ],
      });

    return allPosts;
}
