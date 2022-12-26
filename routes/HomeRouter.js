//use express module
const express = require("express");
const router = express.Router();
const Homepage = require("../Controllers/HomeController");


//route for home page
router.get("/", Homepage);

module.exports = router;