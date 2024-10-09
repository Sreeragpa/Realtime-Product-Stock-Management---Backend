const express = require("express");
const router = express.Router();
const managerController = require("../controllers/manager.controller")


router.post("/login",managerController.login)

module.exports = router