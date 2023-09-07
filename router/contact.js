const express = require("express");
const router = express.Router();
const model = require("../models");

router.post("/",(req,res)=>{
    res.json({message : "串接成功!"});
});

module.exports = router;