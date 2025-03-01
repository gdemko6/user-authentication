const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/log-in", require("./routes/loginRouter"));
app.use("/sign-in", require("./routes/signinRouter"));

app.get("/", (req,res) => {
    res.render("index");
});

app.listen(3000);