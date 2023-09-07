const express = require("express");
const router = express.Router();
const model = require("../models");

router.post("/",async(req,res)=>{
    try {
        model.contact.create(req.body);
        console.log(req.body);
        console.log("串接成功!");
    }catch(err){
        res.status(500).json({message : "伺服器發生錯誤!"});
        console.log(err);
    }   
});

module.exports = router;