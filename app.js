//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();


//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine','hbs');
//set public folder as static folder static file
app.use(express.static('public'));

//route for home page
app.get('/',(req, res) =>{
    res.render('index');
});

//route for about page
app.get('/about',(req, res) =>{
    res.send('welcome to about page.');
});

app.listen(8000, () => {
    console.log('server is running at port 8000');
});