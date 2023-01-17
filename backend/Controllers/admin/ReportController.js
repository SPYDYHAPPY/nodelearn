const Reports = (req, res) => {
    res.render('admin/reports',{
      title: "Reports",
      desc: "Reports"           
    }); 
  }

  module.exports = Reports;