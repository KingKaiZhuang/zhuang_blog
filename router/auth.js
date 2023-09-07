const express = require("express");
const router = express.Router();
const validator = require("../utils/validator");

router.post("/",
    validator.isAccountAndpsd,
    validator.isAccountAndpsdExit,
    validator.Setsession,
    (req,res)=>{
        res.json({
            message : "正在開發中!",
            redirect : "/"
        });
    }
);

module.exports = router;