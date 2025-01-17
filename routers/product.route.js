const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const authMiddleware = require("../middlewares/authMiddleware")
const roleAccessMiddleware = require("../middlewares/roleAccessMiddleware")

router.route("")
    .post(authMiddleware,roleAccessMiddleware("manager","storemanager"),productController.addProduct)
    .get(authMiddleware,roleAccessMiddleware("manager","storemanager"),productController.getProducts);

router.delete('/:id',productController.deleteProduct)
module.exports = router