const Sellers = (req, res) => {
    res.render('admin/sellers',{
      title: "Sellers",
      desc: "Sellers"           
    }); 
  }

  module.exports = Sellers;