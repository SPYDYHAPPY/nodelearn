
function openSide(evt, tabName) {
    var i, navcontent, sidelinks;

    navcontent = document.getElementsByClassName("navcontent");

    for (i = 0; i < navcontent.length; i++) {
        navcontent[i].style.display = "none";
    }

    sidelinks = document.getElementsByClassName("sidelinks");
    for (i = 0; i < sidelinks.length; i++) {
        sidelinks[i].className = sidelinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active ";
}
document.getElementById("defaultOpen").click();



//  <script>
//     // Get the container element
//     var btnContainer = document.getElementsByClassName("nav")

//     // Get all buttons with class="btn" inside the container
//     var btns = btnContainer.getElementsByClassName("nav-link");

//     // Loop through the buttons and add the active class to the current/clicked button
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function () {
//             var current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             this.className += " active";
//         });
//     }
// </scri> 