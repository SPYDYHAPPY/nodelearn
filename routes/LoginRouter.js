//use express module
const express = require("express");
const router = express.Router();

//login route
router.get("/", (req, res) => {
    res.render('login',{
      title: "User Login",
      desc: "Login Section"           
    });
 });
 


module.exports = router;