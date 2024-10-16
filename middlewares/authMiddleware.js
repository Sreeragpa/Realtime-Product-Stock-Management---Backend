const jwt = require("../utils/jwt");

const AuthMiddleware = async (req, res, next) => {
  try {
    // Auth Verification Logic
    const token = req.headers.auth;
    console.log(token);
    
    if (!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }
  

    const payload = await jwt.JwtVerify(token);
      req.user = payload;
      next();
    
  } catch (error) {
    return res.status(403).json({ message: "JWT Verification Error" });
  }
};

module.exports = AuthMiddleware;
