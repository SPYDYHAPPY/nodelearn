const { readDB, writeDB } = require("../dbfunction")

const RegisterPage = (req, res) => {

  let purchasehistory = readDB()

  if (purchasehistory != "") {
    cartQuantity = purchasehistory.length
  } else {
    cartQuantity = 0
  }


  res.render("register", {
    title: "Register",
    desc: "Register Section",
    cartQuantity
  })
}

module.exports = { RegisterPage }