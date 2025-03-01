const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
signupController = require("../controllers/signupController");

router.get("/", signupController.getSignup);
router.post("/", 
    [
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('first').notEmpty().withMessage('First name is required'),
        body('last').notEmpty().withMessage('Last name is required')
    ],
    signupController.postSignup);

module.exports = router;