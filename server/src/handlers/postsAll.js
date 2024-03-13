const postFindAll = require("../controllers/postFindAll");

module.exports = async( req, res ) => {
    try {        
        const { id } = req.userData;
        // console.log(id)
        // const id = "ac1a5037-9096-4533-a4a2-59a1144f4129";
                
        const allPosts = await postFindAll();

        res.status(200).json(allPosts);

    } catch (error) {
        res.status(400).json({ RouteError : error.message })
    }
};