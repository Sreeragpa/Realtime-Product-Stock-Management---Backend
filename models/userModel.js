const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    email:{type: String, required: true},
    password:{type: String, required: true},
    role:{type: String, required: true},
})

const UserModel =  mongoose.model("users",userScheme);

module.exports = UserModel
