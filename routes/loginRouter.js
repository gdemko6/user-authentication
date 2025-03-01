const express = require("express");
const router = express.Router();
loginController = require("../controllers/loginController");


router.get("/", loginController.getLogin);

module.exports = router;