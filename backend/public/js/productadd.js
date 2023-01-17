var data = 0;

document.getElementById("inputQuantity").innerText = data;

function increment() {
  data = data + 1;
  document.getElementById("cartquantity").innerText = data;
  document.getElementById("inputQuantity").innerText = data;
}

function decrement() {
  data = 0;
  document.getElementById("cartquantity").innerText = data;
  document.getElementById("inputQuantity").innerText = data;
}