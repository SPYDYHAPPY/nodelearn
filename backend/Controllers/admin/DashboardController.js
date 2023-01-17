const Dashboard = (req, res) => {
    res.render('admin/dashboard', {
        title: "User Dashboard",
        desc: "Dashboard"
    });
}

module.exports = Dashboard;