const { products } = require("../products");
const { readDB, writeDB } = require("../dbfunction");

//home controller
const Home = (req, res) => {
  let Today = new Date();
  let Currdate = Today.getDate();

  let cartLoad = readDB();

  if (cartLoad != "") {
    cartQuantity = cartLoad.cart_qn
  } else {
    cartQuantity = 0
  }


  const newProducts = products.map((product) => {
    const { id, title, description, type, price, rating, filename } = product;
    return {
      id,
      title,
      description,
      type,
      price,
      rating,
      filename,
    };
  });

  for (let elem of newProducts) {
    const p_id = elem.id;
    const p_title = elem.title;
    const p_type = elem.type;
    const p_description = elem.description;
    const p_price = elem.price;
    const p_rating = elem.rating;
    const p_img = elem.filename;

    if (p_id === Currdate) {
      res.render("index", {
        title: "Happy-shop",
        desc: "Happy Shop",
        p_id,
        p_title,
        p_type,
        p_description,
        p_price,
        p_rating,
        p_img,
        cartQuantity
      });
    }
  }
};

const addtoCart = (req, res) => {
  var cart_qn = 0;
  var quantity = parseInt(req.body.today_Sale);
  var product_price = parseInt(req.body.p_price) * quantity;
  var product_title = req.body.p_title;

  var pr_id = `purchase${Date.now()}`;

  if (quantity > 0) {
    let cartToSave = {
      cart_id: pr_id,
      quantity: quantity,
      cart_qn: cart_qn + 1,
      product_title: product_title,
      product_price: product_price,
    };
    writeDB(cartToSave);
  }
  res.redirect("/");
};

module.exports = {
  Home,
  addtoCart,
};
