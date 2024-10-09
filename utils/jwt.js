const jwt = require("jsonwebtoken");
const secret = process.env.jwtsecret || "secret";



const JwtSign = async(payload)=>{
    try {
        const token = await jwt.sign(payload,secret);
        return token
    } catch (error) {
        console.log(error);
    }
}

const JwtVerify = async(token)=>{
    try {
        const payload = await jwt.verify(token,secret);
        return payload
    } catch (error) {
        console.log(error);
    }
}

module.exports = {JwtSign,JwtVerify}  