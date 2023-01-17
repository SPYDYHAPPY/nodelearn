'use strict'

//use path module
const path = require("path");
//use express module
const express = require("express");
//use hbs view engine
const hbs = require("hbs");

//public Routers
const commonrouter = require("./routes/routes")
//admin Routers
// const DashboardRouter = require("./routes/admin/DashboardRouter");
// const Ds_OrderRouter = require("./routes/admin/Ds_OrderRouter");
// const Ds_ProductsRouter = require("./routes/admin/Ds_ProductsRouter");
// const Ds_CustomersRouter = require("./routes/admin/Ds_CustomersRouter");
// const Ds_ReportRouter = require("./routes/admin/Ds_ReportRouter");
// const Ds_TrackRouter = require("./routes/admin/Ds_TrackRouter");
// const Ds_SellerRouter = require("./routes/admin/Ds_SellerRouter");

//app load
const app = express();

//set dynamic views file
app.set("views", path.join(__dirname, "views"));

//set view engine
app.set("view engine", "hbs");

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

//admin partials for webpage
hbs.registerPartials(__dirname + '/views/admin/admin_partials', function (err) { });
//public partials 
hbs.registerPartials(path.join(__dirname, '/views/partials'), {
  rename: function (name) {
    // all non-word characters replaced with underscores
    return name.replace(/\W/g, '_')
  }
});

//set public folder as static folder static file
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public', 'assets', 'images')))

//Common URL
app.use(commonrouter)

//Admin URL
// app.use(DashboardRouter,Ds_OrderRouter,Ds_ProductsRouter,Ds_CustomersRouter,Ds_ReportRouter,Ds_TrackRouter,Ds_SellerRouter);


var server = app.listen(3000, () => {
  //var host = server.address().address
  var port = server.address().port

  // console.log("server is running at http://%s:%s", host, port);
  console.log("server is running at http://localhost:%s", port);
});

