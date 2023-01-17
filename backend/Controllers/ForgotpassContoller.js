
const forgotPass = (req, res) => {

    res.render('forgotpass', {title: 'Reset Password'})
}

module.exports = {forgotPass}