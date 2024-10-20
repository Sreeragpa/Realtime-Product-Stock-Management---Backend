const mongoose = require("mongoose");

const connectDb = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGOURI);
        console.log(`MongoDB connected`);

    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDb; 