const express = require("express");
const app = express();
const portNum = 8088;

const hbs = require("hbs");
const path = require("path");

// page
const successfulRouter = require("./router/successful_people");
const aboutRouter = require("./router/about");
const authRouter = require("./router/auth")

app.engine("html",hbs.__express);
app.set("views",path.join(__dirname,"application","views"));
app.use(express.static(path.join(__dirname,"application")));

app.get("/",(req,res)=>{
    res.render("index.html");
});
app.use("/auth",authRouter);

app.use("/company",successfulRouter);
app.use("/about",aboutRouter);

app.listen(portNum,(req,res)=>{
    console.log(`Server is running at ${portNum} !`);
})