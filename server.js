const express = require("express");
const app = express();
const portNum = 8088;

app.get("/",(req,res)=>{
    res.send("Hello~");
});

app.listen(portNum,(req,res)=>{
    console.log(`Server is running at ${portNum} !`);
})