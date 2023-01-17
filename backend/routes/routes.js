//use express module
const express = require("express")
const router = express.Router()
const { Home, addtoCart } = require("../Controllers/HomeController")
const { productList, loadProduct, ProdutsaddCart, NewProducts } = require("../Controllers/ProductController")
const { aboutPage } = require("../Controllers/AboutController")
const { cartload, Singleitem, CartUpdate } = require("../Controllers/CartController");
const { loginPage, authControl } = require("../Controllers/LoginController")
const { RegisterPage, Processregistration } = require("../Controllers/RegisterController")
const { forgotPass } = require("../controllers/ForgotpassContoller")

const { errorHandler } = require("../middleware/errorHandler")



//route for home page
router.get("/", Home)
router.post("/cartsave", addtoCart)


// Route for products Page
router.get("/all-products", productList)
router.get("/product/:productid", loadProduct)
router.post("/addtocart", ProdutsaddCart)

//new arrival
router.get("/newarrival", NewProducts)

//login route
router.get('/user-login', loginPage)
router.post('/login-auth', authControl)
//register route
router.get('/user-reg', RegisterPage)
router.post('/regprocess', Processregistration)

//forgot password route
router.get('/user-reset-pass', forgotPass)


// Route for about Page
router.get("/why-us", aboutPage)


//local-store route
router.get("/cart", cartload)
router.get("/Incart/:cartid", Singleitem)


//404 not found
router.get('*', errorHandler)

module.exports = router

