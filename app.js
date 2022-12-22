//use path module
const path = require("path");
//use express module
const express = require("express");
//use hbs view engine
const hbs = require("hbs");

//public Routers
const indexRouter =  require("./routes/HomeRouter");
const AboutRouter = require("./routes/AboutRouter");
const CartRouter = require("./routes/CartRouter");
const ProductsRouter = require("./routes/ProductsRouter");
const LoginRouter = require("./routes/LoginRouter");
//admin Routers
const DashboardRouter = require("./routes/admin/DashboardRouter");
const Ds_OrderRouter = require("./routes/admin/Ds_OrderRouter");
const Ds_ProductsRouter = require("./routes/admin/Ds_ProductsRouter");
const Ds_CustomersRouter = require("./routes/admin/Ds_CustomersRouter");
const Ds_ReportRouter = require("./routes/admin/Ds_ReportRouter");
const Ds_TrackRouter = require("./routes/admin/Ds_TrackRouter");
const Ds_SellerRouter = require("./routes/admin/Ds_SellerRouter");

//app load
const app = express();

//set dynamic views file
app.set("views", path.join(__dirname, "views"));

//set view engine
app.set("view engine", "hbs");


//admin partials for webpage
hbs.registerPartials(__dirname + '/views/admin/admin_partials', function (err) {});
//public partials 
hbs.registerPartials(path.join(__dirname, '/views/partials'), {
  rename: function (name) {
    // all non-word characters replaced with underscores
    return name.replace(/\W/g, '_')
  }
});

//set public folder as static folder static file
app.use(express.static("public"));

//Common URL
app.use('/', indexRouter);
app.use('/why-us', AboutRouter);
app.use('/cart', CartRouter);
app.use('/all-products', ProductsRouter);
app.use('/user-login', LoginRouter);

//Admin URL
app.use('/user-dashboard', DashboardRouter);
app.use('/orders', Ds_OrderRouter);
app.use('/products', Ds_ProductsRouter);
app.use('/customers', Ds_CustomersRouter);
app.use('/reports', Ds_ReportRouter);
app.use('/track', Ds_TrackRouter);
app.use('/sellers', Ds_SellerRouter);


var server = app.listen(3000, () => {
  //var host = server.address().address
  var port = server.address().port

 // console.log("server is running at http://%s:%s", host, port);
  console.log("server is running at http://localhost:%s", port);
});

