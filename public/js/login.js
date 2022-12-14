var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");


function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

var modal = document.getElementById("login-form");

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


document.getElementById('login_btn').addEventListener('click',
    function () {

        var p_mail = document.getElementById("u_email").value;
        var p_pass = document.getElementById("u_pass").value;

        var db_list = JSON.parse(localStorage.getItem("person"));


        if (p_mail == "" || p_pass == "") {
            document.getElementById("login_notification").innerHTML = `Invalid email id`;

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else if (db_list.p_email != p_mail) {
            //console.log('password does not match.')
            document.getElementById("login_notification").innerHTML = "Invalid password";


            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else if (db_list.p_pass != p_pass) {
            document.getElementById("login_notification").innerHTML = `<div class="alert alert-danger"
        role="alert">Invalid password.</div>`;


            setTimeout(() => {
                window.location.reload();
            }, 5000);
        } else {
            document.getElementById("login_notification").innerHTML = `<div class="alert alert-success"
        role="alert">login success.</div>`;


            setTimeout(() => {
                window.location.replace("http://localhost:3000/user-dashboard");
            }, 3000);
        }
    });