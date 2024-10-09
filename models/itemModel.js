const mongoose = require("mongoose");

const itemScheme = new mongoose.Schema({
    sno:{type: String, required: true},
    codeno:{type: String, required: true},
    material:{type: String, required: true},
    size:{type: String, required: true},
    qty:{type: String, required: true},
})

const ItemModel =  mongoose.model("items",itemScheme);

module.exports = ItemModel
