document.getElementById('reg_btn').addEventListener('click',
    function () {
        var p_name = document.getElementById("name").value;
        var p_email = document.getElementById("email").value;
        var p_pass = document.getElementById("pass").value;
        var p_con = document.getElementById("con_pass").value;
        let agree = document.getElementById("agree");


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
            if (agree.checked) {
                var p_id = "hsp" + Date.now('dmy');

                const m_list = {
                    p_id: p_id,
                    p_name: p_name,
                    p_email: p_email,
                    p_pass: p_pass,

                };

                //saved in localstorage
                localStorage.setItem("person", JSON.stringify(m_list));

                //show the notification
                document.getElementById("register_notification").innerHTML = `Registration Successful. 
                You will be redirected to login page... 
                <div class="spinner-border spinner-border-sm text-success" role="status">
                 <span class="visually-hidden">Loading...</span>
                </div>`;
                document.getElementById("register_notification").style.color = "#37733E";

                //reload the page
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            } else {
                document.getElementById("register_notification").innerHTML = "You should agree to our terms and conditions";
                document.getElementById("register_notification").style.color = "#F95559";

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }
    });