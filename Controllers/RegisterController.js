

const RegisterPage = (req, res) => {
    res.render("register", {
        title: "Register",
        desc: "Register Section",
        //cartQuantity
    })
}

module.exports = { RegisterPage }