const express = require("express");
const router = express.Router();
const validator = require("../utils/validator");

router.post("/",
    (req,res)=>{
        res.json({message : "正在開發中!"});
        // validator.isAccountAndpsd,
        // validator.isAccountAndpsdExit
    },
);

module.exports = router;