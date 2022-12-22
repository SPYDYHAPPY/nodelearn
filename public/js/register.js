document.getElementById('reg_btn').addEventListener('click',
    function () {
        var p_name = document.getElementById("name").value;
        var p_email = document.getElementById("email").value;
        var p_pass = document.getElementById("pass").value;
        var p_con = document.getElementById("con_pass").value;

       if (p_name == "") {
        document.getElementById("register_notification").innerHTML = "please enter your name";
        document.getElementById("register_notification").style.color = "#F95559";

            setTimeout(() => {
                window.location.reload();
            }, 1000);
       } else if (p_email == "") {
        document.getElementById("register_notification").innerHTML = "please enter your email address";
        document.getElementById("register_notification").style.color = "#F95559";

            setTimeout(() => {
                window.location.reload();
            }, 1000);
       } else if (p_pass != p_con) {
            //console.log('password does not match.')
            document.getElementById("register_notification").innerHTML = "Password does not match";
            document.getElementById("register_notification").style.color = "#F95559";

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            var p_id = "hsp" + Date.now('dmy');

            const m_list = {
                p_id: p_id,
                p_name: p_name,
                p_email: p_email,
                p_pass: p_pass,

            };

            localStorage.setItem("person", JSON.stringify(m_list));
            document.getElementById("register_notification").innerHTML = "Registration Successful";
            document.getElementById("register_notification").style.color = "#37733E";

            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
    });