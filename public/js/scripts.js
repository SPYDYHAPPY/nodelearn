/*!
 * Start Bootstrap - Shop Item v5.0.5 (https://startbootstrap.com/template/shop-item)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

var data = 0;
var offer_price = 40.0;
var sku = "HTML5";

document.getElementById("inputQuantity").innerHTML = data;
document.getElementById("pprice").innerHTML = "₹" + offer_price;
document.getElementById("sku_name").innerHTML = sku;

//click function call
document.getElementById("quantity").addEventListener("click", increment);


function increment() {
    //show quantity, cart quantity
    var i_qn = document.getElementById("inputQuantity").value;
    if (i_qn != 0) {
        data = data + 1;
        var c_qn = (document.getElementById("cartquantity").innerText = data);
        //cart price calc
        var cart_price = i_qn * offer_price;
        var p_pr = (document.getElementById("pprice").innerText = "₹" + cart_price);

        var p_id = "purchase" + Date.now("dmy");

        const p_list = {
            p_id: p_id,
            i_qn: i_qn,
            c_qn: c_qn,
            p_pr: p_pr,
            sku: sku,
        };

        localStorage.setItem("purchase", JSON.stringify(p_list));
        //set local storage value for cart process
        //localStorage.setItem("sku_name", sku);
        //localStorage.setItem("cartquantity", data);
        //localStorage.setItem("cart_price", cart_price);
        document.getElementById(
            "notification"
        ).innerHTML = `<div class="alert alert-success" role="alert">Successfully added to cart.</div>`;
        window.location.reload();
    } else {
        document.getElementById("inputQuantity").style.border = "1px solid red";
        document.getElementById(
            "notification"
        ).innerHTML = `<div class="alert alert-danger" role="alert">Blank input not allowed</div>`;
        window.location.reload();
    }
}

// function decrement() {
//   data = 0;
//   offer_price = 0;
//   document.getElementById("cartquantity").innerText = data;
//   document.getElementById("inputQuantity").innerText = data;
//   document.getElementById("pprice").innerText = "₹" + offer_price;
//   localStorage.removeItem("inputQuantity", inputQuantity);
//   localStorage.removeItem("pprice", pprice);
// }
