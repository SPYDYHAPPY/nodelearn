const { products } = require("../products");

//home controller
const Home = (req, res) => {

    const newProducts = products.map((product) => {
        const { id, title, description, type, price, rating, filename } = product;
        return { id, title, description, type, price, rating, filename };
    })

    for (let elem of newProducts) {
        const p_id = elem.id;
        const p_title = elem.title;
        const p_type = elem.type;
        const p_description = elem.description;
        const p_price = elem.price;
        const p_rating = elem.rating;
        const p_img = elem.filename;

        if (p_id === 13) {
            res.render('index', {
                title: "Happy-shop",
                desc: "Happy Shop",
                p_title,
                p_type,
                p_description,
                p_price,
                p_rating,
                p_img
            })
        }
    }
}

module.exports = Home ;