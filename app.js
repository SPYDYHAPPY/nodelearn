//use path module
const path = require("path");
//use express module
const express = require("express");
//use hbs view engine
const hbs = require("hbs");
//use bodyParser middleware
const bodyParser = require('body-parser');
const app = express();

//set dynamic views file
app.set("views", path.join(__dirname, "views"));
//set view engine
app.set("view engine", "hbs");

//partials for webpage
//hbs.registerPartials(__dirname + '/views/partials', function (err) {});
hbs.registerPartials(path.join(__dirname, '/views/partials'), {
  rename: function (name) {
    // all non-word characters replaced with underscores
    return name.replace(/\W/g, '_')
  }
})
//app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder static file
app.use(express.static("public"));

//route for home page
app.get("/", (req, res) => {
  res.render('index', {
    title: "Happy-shop",
    desc: "Happy Shop"
  });
});


// Route for about Page
app.get("/why-us", (req, res) => {
  res.render('about', {
    title: "Why Us?",
    desc: "About Section"
  });
});

// Route for products Page
app.get("/all-products", (req, res) => {
  res.render('products', {
    title: "Product List",
    desc: "Products Section"
  });
});

//local-store route
app.get("/cart", (req, res) => {
  res.render('cart_load',{
    title: "Purchase",
    desc: "Cart Section"           
  }); 
});

//login route
app.get("/user-login", (req, res) => {
   res.render('login',{
     title: "User Login",
     desc: "Login Section"           
   }); 
});

//dashboard route
app.get("/user-dashboard", (req, res) => {
  res.render('dashboard',{
    title: "User Dashboard",
    desc: "Dashboard"           
  }); 
});


var server = app.listen(3000, () => {
  //var host = server.address().address
  var port = server.address().port

 // console.log("server is running at http://%s:%s", host, port);
  console.log("server is running at http://localhost:%s", port);
});

