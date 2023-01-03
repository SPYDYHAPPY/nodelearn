//use express module
const express = require("express");
const router = express.Router();
const {
    Home,
    addtoCart
} = require("../Controllers/HomeController");


//route for home page
router.get("/", Home)
router.post("/cartsave", addtoCart)

module.exports = router;