
const errorHandler = (req, res) => {
    
    res.render('404page',{
        title: "404",
        url: "/"
    })

}


module.exports = { errorHandler }