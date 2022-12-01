const express = require('express');
const app = express();

//route for home page
app.get('/',(req, res) =>{
    res.send('welcome to home page');
});

//route for about page
app.get('/about',(req, res) =>{
    res.send('welcome to about page.');
});

app.listen(8000, () => {
    console.log('server is running at port 8000');
});