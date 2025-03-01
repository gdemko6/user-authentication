const db = require("../db/query");

function getSignin(req, res) {
    res.render("sign-in");
}

module.exports = { getSignin };