const fs = require('fs')
const path = require('path')

const Userslist = path.join(__dirname, "../db/registeruser.json")

function readUser(dbName = "registeruser.json") {
    
    if (fs.existsSync(Userslist)) {
        const userdata = fs.readFileSync(path.join("db", dbName),"utf-8")

        if (userdata != "") {
            return JSON.parse(userdata)
        } else {
            return res = "no data found"
        }
    }
    return res = 0
}

function createUser(data, dbName = "registeruser.json") {
    
    if (!data) return console.log("please provide valid data")

    try {
        if (fs.existsSync(Userslist)) {
            
            const listdata = require("../db/registeruser")

            listdata.push(data)

            fs.writeFileSync(path.join("db", dbName), JSON.stringify(listdata, null, 2))
            return console.log("user saved to next")
        } else {
            var Userdb = [data]

            fs.writeFileSync(path.join("db", dbName), JSON.stringify(Userdb, null, 2))
            return console.log("user saved successfully")
        }
    } catch (err) {
        return console.log("failed to save" + err.message)
    }
}

module.exports = {
    readUser, createUser
}