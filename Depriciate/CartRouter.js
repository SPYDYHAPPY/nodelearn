//use express module
const express = require("express");
const router = express.Router();
let cartPage = require("../Controllers/CartController");

//local-store route
router.get("/cart", cartPage);


module.exports = router;