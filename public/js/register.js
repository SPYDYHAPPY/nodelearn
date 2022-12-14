document.getElementById('reg_btn').addEventListener('click',
    function () {
        var p_name = document.getElementById("name").value;
        var p_email = document.getElementById("email").value;
        var p_pass = document.getElementById("pass").value;
        var p_con = document.getElementById("con_pass").value;

       if (p_name == "") {
        document.getElementById("register_notification").innerHTML = `<div class="alert alert-danger"
        role="alert">Name required.</div>`;

            setTimeout(() => {
                window.location.reload();
            }, 5000);
       } else if (p_email == "") {
        document.getElementById("register_notification").innerHTML = `<div class="alert alert-danger"
        role="alert">email required.</div>`;

            setTimeout(() => {
                window.location.reload();
            }, 5000);
       } else if (p_pass != p_con) {
            //console.log('password does not match.')
            document.getElementById("register_notification").innerHTML = `<div class="alert alert-danger"
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
                "register_notification"
            ).innerHTML = `<div class="alert alert-success" role="alert">Registration Successful</div>`;

            setTimeout(() => {
                window.location.reload();
            }, 10000);
        }
    });