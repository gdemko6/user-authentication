const db = require("../db/query");
const { validationResult } = require('express-validator');

function getSignup(req, res) {
    res.render("sign-up", {errors: null});
}

async function postSignup(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("sign-up", { 
            errors: errors.array(),
            data: req.body  
        });
    }

    const { email, password, first, last } = req.body;
    await db.insertUser(email, password, first, last);
    res.redirect("/");
}

module.exports = { getSignup, postSignup };