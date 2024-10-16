const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const roleAccessMiddleware = require("../middlewares/roleAccessMiddleware")
const adminController = require("../controllers/admin.controller")

router.post('/login',adminController.adminLogin);
router.post('/addUser',authMiddleware,roleAccessMiddleware("admin"),adminController.addUser);
router.get('/users',authMiddleware,roleAccessMiddleware("admin"),adminController.getUsers);



module.exports = router