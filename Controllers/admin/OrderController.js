const OrderPage = (req, res) => {
    res.render('admin/orders',{
      title: "Orders",
      desc: "Orders"           
    }); 
  };

  module.exports = OrderPage;