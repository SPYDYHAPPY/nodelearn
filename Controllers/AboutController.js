const about = (req, res) => {
    res.render('about', {
        title: "Why Us?",
        desc: "About Section"
    });
}

module.exports = about;