//use express module
const express = require("express");
const router = express.Router();



//route for home page
router.get("/", (req, res) => {
    res.render('index', {
        title: "Happy-shop",
        desc: "Happy Shop"
    })
});

module.exports = router;