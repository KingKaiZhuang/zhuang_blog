const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("successful_people.html");
})

module.exports = router;