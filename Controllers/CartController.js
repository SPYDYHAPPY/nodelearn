const cart = (req, res) => {
    res.render('cart_load',{
      title: "Purchase",
      desc: "Cart Section"           
    }); 
  }

  module.exports = cart;