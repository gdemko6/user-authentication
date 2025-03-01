const db = require("../db/query");

function getLogin(req,res){
    res.render("log-in");
}

module.exports = { getLogin };