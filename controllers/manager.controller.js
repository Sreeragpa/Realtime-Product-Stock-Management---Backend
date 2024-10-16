const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");


const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        
        if(!email || !password)return res.status(404).json("Invalid Credentials");
    
        const user = await UserModel.findOne({email:email});
        if(!user){
            return res.status(404).json("User not found");
        }
        const isManager = (user.role==="manager")?true:false;

        if(!isManager)   return res.status(403).json("Access denied.");

        const comparedPassword = await bcrypt.compare(password,user.password);

       
        
        if(comparedPassword){
            const payLoad = {
                role:user.role,
                email:email
            }
            const token = await jwt.JwtSign(payLoad);
            if(token){
                res.setHeader("Auth",token)
            }
            res.status(200).json({status:"success",data:token})
        }else{
            return res.status(401).json("Invalid Password");
        }
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {login}