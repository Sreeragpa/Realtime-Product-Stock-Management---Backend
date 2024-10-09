const express = require("express");
const router = express.Router();
const adminAuthMiddleware = require("../middlewares/adminAuth");
const adminController = require("../controllers/admin.controller")

router.post('/login',adminController.adminLogin);
router.post('/addUser',adminAuthMiddleware,adminController.addUser);
router.get('/users',adminAuthMiddleware,adminController.getUsers);



module.exports = router