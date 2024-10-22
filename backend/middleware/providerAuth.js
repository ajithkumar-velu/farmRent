import jwt from 'jsonwebtoken'

const providerAuth = async (req, res, next) => {
    const {token1} = req.headers;
    console.log(token1);
    
    if (!token1) {
        return res.json({success: false, message: "Not Authorized, Login Again"})
    }
    try {

        const token_decode = jwt.verify(token1, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        console.log("_id ss", req.body.ss);
        

        next()
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}
export default providerAuth