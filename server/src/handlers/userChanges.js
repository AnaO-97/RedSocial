const userUpdated = require("../controllers/userUpdated");

module.exports = async ( req, res ) => {
    try {
       const { id }         = req.userData;
       const editAttributes = req.query;
       const userChange     = await userUpdated( editAttributes, id );
       
       if(userChange !== null){
            res.status(200).json(userChange);
       }
       else{
            res.status(400).json({ error : "user not found" }) 
       }
    } catch (error) {
        res.status(400).json({ RouteError: error.message })
    }
};