// function mySave() {
//     var happy = document.getElementById("myTextarea").value;
//     localStorage.setItem("happy", happy);
// }
// function myLoad() {
//     //var cart_qn = localStorage.getItem("cartquantity");
//     //var cart_pr = localStorage.getItem("cart_price");
//     document.getElementById("cartitem").innerHTML = localStorage.getItem("cartquantity");
//     document.getElementById("myTextarea").innerHTML = localStorage.getItem("cart_price");
// }
// function clearAll() {
//     var happy = localStorage.removeItem("happy");
//     // document.getElementById("myTextarea").value = happy;
// }
// function reset() {
//     var happy = localStorage.clear("happy");
// }

//click function call
document
  .getElementById("remove_all")
  .addEventListener("click", function clearItems() {
    localStorage.clear("purchase");
    // localStorage.clear("sku");
    // localStorage.clear("c_qn");
    // localStorage.clear("p_pr");
    window.location.reload();
  });

document
  .getElementById("remove_cart")
  .addEventListener("click", function itemDrop() {
    localStorage.removeItem("purchase");
    // localStorage.removeItem("cartquantity");
    // localStorage.removeItem("cart_price");
    window.location.reload();
  });

//document.getElementById("cartquantity").innerHTML = p_date.c_qn;
//document.getElementById("remove_all").innerText = "p_date";
//document.getElementById("remove_cart").innerHTML = "p_date";

//fetch local storage value
var pr_list = JSON.parse(localStorage.getItem("purchase"));

if (localStorage.getItem("purchase") != null) {
  //console.log(pr_list.p_id,pr_list.c_qn,pr_list.i_qn,pr_list.p_pr,pr_list.sku);
  document.getElementById("cartquantity").innerHTML = pr_list.c_qn;
  document.getElementById("cartitem").innerHTML = pr_list.i_qn;
  document.getElementById("product_n").innerHTML = pr_list.sku;
  document.getElementById("p_price").innerHTML = pr_list.p_pr;
  document.getElementById("total").innerHTML = pr_list.p_pr;
  document.getElementById("no_item").innerHTML = ` `;
} else {
  document.getElementById("no_item").innerHTML = `<div class="text-secondary">
    No items are added.
    <a href="/all-products" class="alert-link"><i class="bi bi-cart-x"></i></a>
    </div>`;
  document.getElementById("addedpr").style.display = "none";
}
