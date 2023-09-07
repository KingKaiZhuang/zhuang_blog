const mongoose = require("mongoose");
const connConfig = "mongodb://127.0.0.1:27017/zhuang-blog";
const conn = mongoose.createConnection(connConfig);

conn.on("connected",()=>{
    console.log("Mongodb is connected.");
});

module.exports = conn;