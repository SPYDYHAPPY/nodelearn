const { readDB } = require("../middleware/dbfunction");
const { v4: uuidv4 } = require("uuid");
const { readUser, createUser } = require("../middleware/userfunction");
const crypt = require('bcrypt')

const RegisterPage = (req, res) => {
  let purchasehistory = readDB();

  if (purchasehistory != "") {
    cartQuantity = purchasehistory.length;
  } else {
    cartQuantity = 0;
  }

  res.render("register", {
    title: "Register",
    desc: "Register Section",
    cartQuantity,
  });
};

const Processregistration = async (req, res) => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var cur_date = new Date();
  var registerTime =
    cur_date.toLocaleDateString() + " " + cur_date.toLocaleTimeString();

  let Fullname = req.body.Ufullname;
  let Username = req.body.Uusername;
  let Email = req.body.Uemail;
  let Dob = req.body.Udob;
  let Gender = req.body.Ugender;
  let Password = req.body.Upass;
  let Conpassword = req.body.Ucnfpass;
  let Terms = req.body.terms;

  //encrypt password
  const hashedpass = await crypt.hash(Password, 10)


  let Reguser = {
    id: uuidv4(),
    Fullname: Fullname,
    Username: Username,
    Email: Email,
    Dob: Dob,
    Gender: Gender,
    Password: hashedpass,
    registerTime: registerTime,
  };
  try {
    if (!Fullname || !Username || !Email || !Dob || !Gender || !Password || !Conpassword) {
      console.log("blanks field not allowed");
    } else if (Username.length > 8) {
      console.log("Username is greater than 8 character")
    } else if (!Email.match(validRegex)) {
      console.log("email should be in valid format");
    } else if (Password != Conpassword) {
      console.log("password and confirm password doesn't match");
    } else if (!Terms.checked) {
      setTimeout(() => {
        createUser(Reguser)
        console.log(
          "Congrats " + `${Fullname}` + ". You have successfully registered."
        );
        res.redirect("/user-login");
      }, 2000)
    } else {
      console.log("please agree to our terms")
    }
  } catch (err) {
    console.log("save failed" + err.message);
  }
};

module.exports = { RegisterPage, Processregistration };

//  else if (!Email.match(validRegex)) {
//   console.log("email should be in valid format");
// } else if (Password != Conpassword) {
//   console.log("password and confirm password doesn't match");
// } else if (!Terms.checked) {
//   setTimeout(() => {
//     createUser(Reguser);

//     console.log(
//       "Congrats " + `${Fullname}` + ". You have successfully registered."
//     );
//     res.redirect("/user-login");
//   }, 2000);
// } else {
//   console.log("please agree to our terms");
//}