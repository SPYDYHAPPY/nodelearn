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
document.getElementById("remove_cart").addEventListener("click", itemDrop);
document.getElementById("remove_all").addEventListener("click", removeItem);

function removeItem() {
  localStorage.clear("sku_name");
  localStorage.clear("cartquantity");
  localStorage.clear("cart_price");
  window.location.reload();
}

function itemDrop() {
  localStorage.removeItem("sku_name");
  localStorage.removeItem("cartquantity");
  localStorage.removeItem("cart_price");
  window.location.reload();
}

document.getElementById("cartitem").innerHTML =
  localStorage.getItem("cartquantity");
document.getElementById("product_n").innerHTML =
  localStorage.getItem("sku_name");
document.getElementById("cartquantity").innerHTML =
  localStorage.getItem("cartquantity");

if (localStorage.getItem("cart_price") != null) {
  document.getElementById("p_price").innerHTML =
    "₹" + localStorage.getItem("cart_price");
  document.getElementById("total").innerHTML =
    "₹" + localStorage.getItem("cart_price");
} else {
  document.getElementById("no_item").innerHTML = `<div class="text-secondary">
  No items are added.
  <a href="/all-products" class="alert-link"><i class="bi bi-cart-x"></i></a>
  </div>`;
  //0;
  document.getElementById("addedpr").style.display = "none";
}
