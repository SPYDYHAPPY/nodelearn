const { readDB } = require("../dbfunction")
 


const aboutPage = (req, res) => {
 
    let purchasehistory = readDB()

    if (purchasehistory != "") {
      cartQuantity = purchasehistory.length
    } else {
      cartQuantity = 0
    }

    res.render('about', {
        title: "Why Us?",
        desc: "About Section",
        cartQuantity
    });
}


module.exports = { aboutPage }