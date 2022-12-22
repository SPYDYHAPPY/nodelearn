//use express module
const express = require("express");
const router = express.Router();

// Route for about Page
router.get("/why-us", (req, res) => {
    res.render('about', {
        title: "Why Us?",
        desc: "About Section"
    });
});

module.exports = router;