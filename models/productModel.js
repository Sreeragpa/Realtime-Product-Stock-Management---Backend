const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    name:{type: String, required: true},
    price:{type: Number, required: true},
    category:{type: String ,enum:["TV","PC","GA","PH"], required: true},
    quantity:{type: Number, required: true},
})

const productModel =  mongoose.model("products",productScheme);

module.exports = productModel
