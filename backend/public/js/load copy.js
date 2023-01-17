function mySave() {
    var happy = document.getElementById("myTextarea").value;
    localStorage.setItem("happy", happy);
}
function myLoad() {
    var happy = localStorage.getItem("happy");
    document.getElementById("myTextarea").value = happy;
}
function clearAll() {
    var happy = localStorage.removeItem("happy");
    // document.getElementById("myTextarea").value = happy;
}
function reset() {
    var happy = localStorage.clear("happy");
}