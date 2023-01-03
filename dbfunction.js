const fs = require('fs')
const path = require('path')

const Cartitems = path.join(__dirname, "./db/todaySale.json")

function createDirectory(dir, options) {
    fs.mkdir(dir, options, (err) => {
        if (err) throw err;
        console.log(`Directory ${dir} created`);
    })
}


function readDB(dbName = "todaySale.json") {

    if (fs.existsSync(Cartitems)) {
        const data = fs.readFileSync(path.join("db", dbName), "utf-8")
        if (data != "") {
            return JSON.parse(data)
        } else {
            return res = 'no data found'
        }
    } else {
        return res = 0
    }
}

function writeDB(obj, dbName = "todaySale.json") {

    if (!obj) return console.log("please provide data to save")

    createDirectory('./db', { recursive: true })
    try {
        if (fs.existsSync(Cartitems)) {

            const cartList = require('./db/todaySale')

            cartList.push(obj)

            fs.writeFileSync(path.join("db", dbName), JSON.stringify(cartList, null, 2))
            return console.log('save success to next element')
        } else {
            var Cartdb = [obj]

            fs.writeFileSync(path.join("db", dbName), JSON.stringify(Cartdb, null, 2))
            return console.log("data saved successfully")
        }
    } catch (error) {
        return console.log("failed to write" + error.message)
    }
}

module.exports = {
    readDB,
    writeDB
}