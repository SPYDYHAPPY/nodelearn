const fs = require('fs')
const hbs = require('hbs')
const path = require('path')
const { readDB, writeDB } = require("../middleware/dbfunction")
const { products } = require("../db/products")
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

const Singleitem = (req, res) => {


  let purchasehistory = readDB()

  if (purchasehistory != "") {
    cartQuantity = purchasehistory.length
  } else {
    cartQuantity = 0
  }


  let itemOfcart = req.params.cartid


  const ItemsinCart = purchasehistory.find(cart => cart.cart_id.toLocaleString() === itemOfcart.toLocaleString())


  try {
    
    res.render("PurchaseCart", {
      title: "SingleItem",
      desc: "singleitem",
      cartQuantity,
      cart_title: ItemsinCart.product_title,
      cart_pqun: ItemsinCart.quantity,
      cart_price: ItemsinCart.product_price
    })
  } catch (error) {
    console.log("error" + error.message)
  }
}

module.exports = { cartload, Singleitem }