const hbs = require("hbs");
const { readDB, writeDB } = require("../middleware/dbfunction")
const { products } = require("../db/products");
const { v4: uuidv4 } = require('uuid')

hbs.registerHelper("list", function loadProducts(item, options) {
    const itemsAsHtml = products.map(item => options.fn(item));
    return itemsAsHtml.join("\n");
});

const productList = (req, res) => {

    let purchasehistory = readDB()

    if (purchasehistory != "") {
      cartQuantity = purchasehistory.length
    } else {
      cartQuantity = 0
    }

    res.render('all_products', {
        title: "Product List",
        desc: "Products Section",
        cartQuantity
    })
}



const loadProduct = (req, res) => {

    let single_id = req.params.productid

    const product = products.find(p => p.id.toLocaleString() === single_id.toLocaleString())
    
    let purchasehistory = readDB()

    if (purchasehistory != "") {
      cartQuantity = purchasehistory.length
    } else {
      cartQuantity = 0
    }

    res.render('product_details', {
        title: product.title + "- " + product.type,
        desc: product.type,
        p_title: product.title,
        p_type: product.type,
        p_description: product.description,
        p_price: product.price,
        p_img: product.filename,
        p_rating: product.rating,
        cartQuantity
    })
}

const ProdutsaddCart = (req, res) => {

  var cart_qn = 0;
  var quantity = parseInt(req.body.praddcart);
  var product_price = parseInt(req.body.p_price) * quantity;
  var product_title = req.body.p_title;

  //var pr_id = `purchase${Date.now()}`;

  if (quantity > 0) {
    let cartToSave = {
      cart_id: uuidv4(),
      quantity: quantity,
      cart_qn: cart_qn + 1,
      product_title: product_title,
      product_price: product_price,
    };
    writeDB(cartToSave);
    res.redirect("/all-products");
  } else {
    res.redirect("/all-products");
  }

}

module.exports = { productList, loadProduct, ProdutsaddCart }