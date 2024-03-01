module.exports = ( req, res ) => {
    try {
        
    } catch (error) {
        res.status(400).json({ RouteError: error.message })
    }
};