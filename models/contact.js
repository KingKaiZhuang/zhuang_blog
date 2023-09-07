const mongoose = require("mongoose");
const conn = require("./db");
// module.exports = conn;

const contactSchema = mongoose.Schema(
    {
        "name" : String,
        "email" : String,
        "message" : String
    },
    {
        collection : "contact",
        versionKey : false
    }
)

let contactModel = conn.model("contact",contactSchema);

module.exports = contactModel;
