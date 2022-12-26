const Customerlist = (req, res) => {
    res.render('admin/customers', {
        title: "Customers",
        desc: "Customers"
    });
}

module.exports = Customerlist;