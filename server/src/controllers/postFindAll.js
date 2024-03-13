const { Post, User } = require("../db");

module.exports = async() => {
    const allPosts = await Post.findAll({
        include: {
          model     : User,
          attributes: ['id', 'fullName', 'color'], 
        },
      });

    return allPosts;
}
