const aboutPage = (req, res) => {
    res.render('about', {
        title: "Why Us?",
        desc: "About Section"
    });
}

module.exports = { aboutPage }