//use express module
const express = require("express");
const router = express.Router();
let aboutPage = require("../Controllers/AboutController")

// Route for about Page
router.get("/why-us", aboutPage);

module.exports = router;