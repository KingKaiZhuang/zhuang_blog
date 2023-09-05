const fs = require("fs");

let readFilePromise = (dataPath) => {
    return new Promise((resolve,reject) => {
        fs.readFile(dataPath,"utf8",(err,data)=>{
            if(err) reject(err);
            else resolve(JSON.parse(data));
        });
    })
}

module.exports = {
    readFilePromise : readFilePromise
}