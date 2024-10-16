const productModel = require("../models/productModel")

const addProduct = async(req,res,next)=>{
    try {
        let {name,price,category,quantity} = req.body;
        console.log(req.body);
        

        if(!name.trim() || !price || !category.trim() || !quantity){
            return res.status(404).json({error:"Fields Required"});
        }

        const newProduct = new productModel({
            name,price,category,quantity
        });

        const savedProduct = await newProduct.save();

        res.status(200).json({status:"success",data:savedProduct})


    } catch (error) {
        console.log(error);
    }
}

const getProducts = async (req,res,next)=>{
    try {
        const products = await productModel.find();
         res.status(200).json({status:"success",data:products})
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const products = await productModel.findByIdAndDelete(id);
         res.status(200).json({status:"success",data:products})
    } catch (error) {
        console.log(error);
    }
}



module.exports = {addProduct,getProducts,deleteProduct}