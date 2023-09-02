const express = require("express");
const app = express();
const portNum = 8088;

const hbs = require("hbs");
const path = require("path");

app.engine("html",hbs.__express);
app.set("views",path.join(__dirname,"application","views"));
app.use(express.static(path.join(__dirname,"application")));

app.get("/",(req,res)=>{
    res.render("index.html");
});

app.listen(portNum,(req,res)=>{
    console.log(`Server is running at ${portNum} !`);
})