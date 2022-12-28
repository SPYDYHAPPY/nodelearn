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

const loadProduct = (req, res) => {

    let single_id = req.params.productid

    const product = products.find(p => p.id.toLocaleString() === single_id.toLocaleString())
    

    res.render('product_details', {
        title: product.title + "- " + product.type,
        desc: product.type,
        p_title: product.title,
        p_type: product.type,
        p_description: product.description,
        p_price: product.price,
        p_img: product.filename,
        p_rating: product.rating
    })
}

module.exports = { productList, loadProduct }