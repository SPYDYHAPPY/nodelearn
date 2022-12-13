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


document.getElementById('reg_btn').addEventListener('click', 
function () {
    var p_name = document.getElementById("name").value;
    var p_email = document.getElementById("email").value;
    var p_pass = document.getElementById("pass").value;
    var p_con = document.getElementById("con_pass").value;

    if (p_pass != p_con) {
        //console.log('password does not match.')
        document.getElementById("notification").innerHTML = `<div class="alert alert-danger"
        role="alert">Password does not match.</div>`;

       setTimeout(() => {
           window.location.reload();
       }, 5000);
    } else {
        var p_id = "hsp" + Date.now('dmy');
        
        const m_list = {
            p_name: p_name,
            p_email: p_email,
            p_pass: p_pass,
            
        };
        localStorage.setItem("person", JSON.stringify(m_list));
         document.getElementById(
            "notification"
        ).innerHTML = `<div class="alert alert-success" role="alert">Registration Successful</div>`;

        setTimeout(() => {
            window.location.reload();
        }, 10000);
    }
});