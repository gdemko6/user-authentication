const db = require("../db/query");
const { validationResult } = require('express-validator');

function getSignup(req, res) {
    res.render("sign-up");
}

async function postSignup(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, first, last } = req.body;
    await db.insertUser(email, password, first, last);
    res.json({ message: "User registered successfully!" });
}

module.exports = { getSignup, postSignup };