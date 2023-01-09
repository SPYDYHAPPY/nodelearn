const { readDB, writeDB } = require("../middleware/dbfunction")



const loginPage = (req, res) => {
  let purchasehistory = readDB()

  if (purchasehistory != "") {
    cartQuantity = purchasehistory.length
  } else {
    cartQuantity = 0
  }
    res.render('login', {
      title: "User Login",
      desc: "Login Section",
      cartQuantity
    })
  }



  module.exports = { loginPage }