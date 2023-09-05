const express = require("express");
const app = express();
const portNum = 8088;

const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");

// page
const successfulRouter = require("./router/successful_people");
const aboutRouter = require("./router/about");
const authRouter = require("./router/auth");
const expertiseRouter = require("./router/expertise");
const mailRouter = require("./router/mail_backend");

app.engine("html",hbs.__express);
app.set("views",path.join(__dirname,"application","views"));
app.use(express.static(path.join(__dirname,"application")));

app.get("/",(req,res)=>{
    res.render("index.html");
});

app.get("/login", (req, res) => {
    res.render("login.html");
});

app.use("/auth",authRouter);

app.use("/company",successfulRouter);
app.use("/about",aboutRouter);
app.use("/expertise",expertiseRouter);
app.use("/mail",mailRouter);

app.listen(portNum,(req,res)=>{
    console.log(`Server is running at ${portNum} !`);
})