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

app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder static file
app.use(express.static("public"));

//route for home page
app.get("/", (req, res) => {
  res.render("index", {
    name: "happy",
  });
});

//route for showing form
app.get("/post", (req, res) => {
  //render form.hbs file
  res.render("form");
});

//route for submit form by using post method
app.post('/post',(req, res) => {
    //render file form.hbs
    res.render('index',{
      //get value from textname
      name : req.body.textname
    });
  });

// app.get('/:name',(req, res) =>{
//     res.render('index',{
//         name : req.params.name
//     });
// });

//route for about page
app.get("/about", (req, res) => {
  res.send("welcome to about page.");
});

app.listen(8000, () => {
  console.log("server is running at port 8000");
});