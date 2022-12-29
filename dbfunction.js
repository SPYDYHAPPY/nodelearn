const fs = require('fs')
const path = require('path')


function readDB(dbName = "todaySale.json") {

    const data = fs.readFileSync(path.join("db", dbName), "utf-8")


    if (data != "") {
        return JSON.parse(data)
    } else {
        return res = 'no data found'
    }
}

function writeDB(obj, dbName = "todaySale.json") {

    if (!obj) return console.log("please provide data to save")

    try {
        fs.writeFileSync(path.join("db", dbName), JSON.stringify(obj))
        return console.log("data saved successfully")
    } catch (error) {
        return console.log("failed to write")
    }
}

module.exports = {
    readDB,
    writeDB
}