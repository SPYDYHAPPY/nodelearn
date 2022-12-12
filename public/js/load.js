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
document.getElementById("remove_all").addEventListener("click",
  function clearItems() {
    localStorage.clear("purchase");
    // localStorage.clear("sku");
    // localStorage.clear("c_qn");
    // localStorage.clear("p_pr");
    window.location.reload();
  });

document.getElementById("remove_cart").addEventListener("click",
  function itemDrop() {
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

if (pr_list.c_qn != 0) {

  //console.log(pr_list.p_id,pr_list.c_qn,pr_list.i_qn,pr_list.p_pr,pr_list.sku);
  document.getElementById("cartquantity").innerHTML = pr_list.c_qn;
  document.getElementById("cartitem").innerHTML = pr_list.i_qn;
  document.getElementById("product_n").innerHTML = pr_list.sku;
  document.getElementById("p_price").innerHTML = pr_list.p_pr;
  document.getElementById("total").innerHTML = pr_list.p_pr;
  document.getElementById("no_item").innerHTML = ` <ul class="list-group mb-2" id="addedpr">

  <li class="list-group-item d-flex justify-content-between lh-condensed alert alert-warning alert-dismissible fade   show" role="alert">
           <h6 class="my-0 py-2" id="product_n"></h6>
           <span class="text-muted mx-5 py-2" id="p_price"></span>
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="remove_cart"></button>
               {{!-- <div class="alert alert-warning alert-dismissible fade show" role="alert">
                           </div> --}}
                             {{!-- <div>
               <h6 class="my-0" id="product_n"></h6>
                        <small class="text-muted">product description</small>
                         </div> --}}
                  </li>       
         <li class="list-group-item d-flex justify-content-between">
              <span>Total (INR)</span>
              <span><b id="total"></b></span>
                    </li>
      </ul>`;
} else {
  document.getElementById("no_item").innerHTML = `<div class="text-secondary">
  No items are added.
  <a href="/all-products" class="alert-link"><i class="bi bi-cart-x"></i></a>
  </div>`;
  document.getElementById("addedpr").style.display = "none";
  
}
