import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next)=>{
    const { token1 } = req.headers;
    if (!token1) {
        return res.json({success: false, message: "Not Authorized, Login Again!"})
    } 
    try {
        const token_decode = jwt.verify(token1, process.env.JWT_SECRET)

        console.log(token_decode.id, "auth");
        req.body.userId = token_decode.id
        
        next()
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export default userAuth