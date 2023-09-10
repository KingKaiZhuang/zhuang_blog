const mongoose = require("mongoose");
const conn = require("./db");

const tasksSchema = mongoose.Schema(
    {
        date : String,
        time : String,
        task : String,
        urgent : String
    },
    {
        collection : "tasks",
        versionKey : false
    }
)

const tasksModel = conn.model("tasks",tasksSchema);

module.exports = tasksModel;