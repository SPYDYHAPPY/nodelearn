const hbs = require("hbs");
const { products } = require("../products");

hbs.registerHelper("list", function loadProducts(item, options) {
    const itemsAsHtml = products.map(item => options.fn(item));
    return itemsAsHtml.join("\n");
});

const productList = (req, res) => {
    res.render('all_products', {
        title: "Product List",
        desc: "Products Section"
    })
}

const Loadproduct = (req, res) => {


    let single_id = req.params.productid

    const newProducts = products.map((product) => {
        const { id, title, description, type, price, rating, filename } = product;
        return { id, title, description, type, price, rating, filename };
    })

    res.render('product_details', {
        title: "Product List",
        desc: "Products Section",
        // p_title,
        // p_type,
        // p_description,
        // p_price,
        // p_rating,
        // p_img
    })
}

module.exports = { productList, Loadproduct }