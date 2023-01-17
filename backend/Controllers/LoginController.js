const { readDB, writeDB } = require("../middleware/dbfunction")
const bcrypt = require('bcrypt')


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

const authControl = async (req, res) => {

  let Usercheck = require("../db/registeruser")

  const UserName = req.body.Uname
  // const UserEmail = req.body.Uemail
  const Userpass = req.body.Upass

  if(!UserName || !Userpass) return console.log("please provide data to save")

  const findUser =  Usercheck.find(user => user.Username === UserName)
  const Userpassword = await bcrypt.compare(Userpass, findUser.Password)

  if (!Userpassword) {
    console.log("login failed")
    res.redirect("/user-login")
  } else {
    console.log("login successful")
    res.redirect("/")
  }

}


module.exports = { loginPage, authControl }