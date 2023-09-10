const express = require("express");
const router = express.Router();
const model = require("../models");

router.get("/",(req,res)=>{
    res.render("tasks.html");
})

router.get("/things",async(req,res)=>{
    try {
        let data = await model.tasks.find({},{"_id" : 0,});
        res.json({ data });
    }catch(err){
        res.status(500).json({ message : "發生問題!"});
    }
});

router.post("/addTask",async(req,res)=>{
    try {
        let task = req.body;
        let data = await model.tasks.create(task);
        res.json({message : data});
    }catch(err){
        console.log(err);
    }
})

module.exports = router;