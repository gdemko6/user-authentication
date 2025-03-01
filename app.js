const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/log-in", require("./routes/loginRouter"));
app.use("/sign-up", require("./routes/signupRouter"));

app.get("/", (req,res) => {
    res.render("index");
});

app.listen(3000);