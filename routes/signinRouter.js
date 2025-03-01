const express = require("express");
const router = express.Router();
signinController = require("../controllers/signinController");

router.get("/", signinController.getSignin);

module.exports = router;