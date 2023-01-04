const fs = require('fs')
const hbs = require('hbs')
const path = require('path')
const { readDB, writeDB } = require("../dbfunction")

const cartSale = path.join(__dirname, "../db/todaySale.json")

if (fs.existsSync(cartSale)) {
  const Saleitems = require("../db/todaySale")

  hbs.registerHelper("Cartlist", function (items, options) {
    const itemAsHtml = Saleitems.map(item => options.fn(item))
    return itemAsHtml.join('\n')
  })
}



const cartload = (req, res) => {

  let purchasehistory = readDB()

  if (purchasehistory != "") {
    cartQuantity = purchasehistory.length
  } else {
    cartQuantity = 0
  }

  var listTotal = 0

  for (let i = 0; i < purchasehistory.length; i++) {
    listTotal += purchasehistory[i].product_price;
  }


  res.render('cart_load', {
    title: "Purchase",
    desc: "Cart Section",
    cartQuantity,
    listTotal
  });
}

module.exports = { cartload }