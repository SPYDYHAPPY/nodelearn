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
    });
    res.send(products);
}

const Singleproduct = (req, res) => {

    const newProducts = products.map((product) => {
        const { id, title, description, type, price, rating, filename } = product;
        return { id, title, description, type, price, rating, filename };
    })

    for (let elem of newProducts) {
        let p_id = elem.id;
        const p_title = elem.title;
        const p_type = elem.type;
        const p_description = elem.description;
        const p_price = elem.price;
        const p_rating = elem.rating;
        const p_img = elem.filename;


       if (p_id == req.params.productid) {
           res.send(p_title + "\n" + p_type + "\n" + p_description + "\n" + p_price + "\n" + p_rating) 
        }
    }
    res.status(404).send("product not found")
}

module.exports = { productList, Singleproduct }