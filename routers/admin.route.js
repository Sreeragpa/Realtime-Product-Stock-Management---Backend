const express = require("express");
const router = express.Router();
const adminAuthMiddleware = require("../middlewares/adminAuth");
const adminController = require("../controllers/admin.controller")

router.post('/login',adminController.adminLogin);



module.exports = router