const express = require("express");
const router = express.Router();
const storemanagerController = require("../controllers/storemanager.controller")

router.post("/login",storemanagerController.login)

module.exports = router