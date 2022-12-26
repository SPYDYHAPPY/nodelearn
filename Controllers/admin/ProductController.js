const Products = (req, res) => {
    res.render('admin/products',{
      title: "Products",
      desc: "Products"           
    }); 
  }

  module.exports = Products;