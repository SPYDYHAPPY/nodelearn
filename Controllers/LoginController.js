const login = (req, res) => {
    res.render('login', {
      title: "User Login",
      desc: "Login Section"
    })
  }

  module.exports = login;