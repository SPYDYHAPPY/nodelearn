const trackOrder = (req, res) => {
    res.render('admin/track', {
        title: "Track Orders",
        desc: "Track Orders"
    });
}

module.exports = trackOrder;