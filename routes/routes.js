//use express module
const express = require("express")
const router = express.Router()
const { Home, addtoCart } = require("../Controllers/HomeController")
const { productList, loadProduct } = require("../Controllers/ProductController")
const { aboutPage } = require("../Controllers/AboutController")
const { cartload } = require("../Controllers/CartController");
const { loginPage } = require("../Controllers/LoginController")
const { RegisterPage} = require("../Controllers/RegisterController")
const { forgotPass } = require("../controllers/ForgotpassContoller")

const { errorHandler } = require("../middleware/errorHandler")



//route for home page
router.get("/", Home)
router.post("/cartsave", addtoCart)


// Route for products Page
router.get("/all-products", productList)
router.get("/product/:productid", loadProduct)

//login route
router.get('/user-login', loginPage)
//register route
router.get('/user-reg', RegisterPage)
//forgot password route
router.get('/user-reset-pass', forgotPass)


// Route for about Page
router.get("/why-us", aboutPage)


//local-store route
router.get("/cart", cartload)

//404 not found
router.get('*', errorHandler)

module.exports = router

