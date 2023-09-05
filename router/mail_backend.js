const express = require("express");
const router = express.Router();
const fs = require("fs");
const utils = require("../utils/readFile");

router.get("/",(req,res)=>{
    res.render("conect.html");
});

router.post("/data",
    // 檢查輸入資料是否存在
    (req,res,next)=>{
        if(!req.body.email || !req.body.message){
            res.json({message:"資料不齊全!"});
        }else{
            console.log(req.body);
            next();
        }
    },
    // 業務邏輯
    async(req,res)=>{
        try {
            let people = req.body;
            let data = await utils.readFilePromise("models/mail.json");
            data.push(people);
            fs.writeFileSync("models/mail.json",JSON.stringify(data),"utf8");

            console.log(data);
            res.json({result : data});
        }catch(err){
            console.log(err);
            res.status(404).json({message : "server err!"})
        }
    }
);

module.exports = router;