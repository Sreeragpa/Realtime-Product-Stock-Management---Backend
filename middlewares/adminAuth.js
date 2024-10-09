const jwt = require("../utils/jwt");


const adminAuthMiddleware = async (req,res,next)=>{
    console.log("Inside AUth Middleware");
    
    // Auth Verification Logic
    const token = req.headers.auth ;
    console.log(token);
    
    if(!token)return res.status(401).json("Invalid Token");
    const payload = await jwt.JwtVerify(token);
    
    if(payload.role==="admin"){
        req.user = payload
        next()
    }else{
        if(!token)return res.status(401).json("unauthorized");
    }

}


module.exports = adminAuthMiddleware