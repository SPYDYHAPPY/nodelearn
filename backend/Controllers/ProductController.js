import ShopProduct from "../models/ProductModel.js"

export const getAllproducts = async (req, res) => {

    try {
        const response = await ShopProduct.findAll({
            attributes: [
                ['pr_id', 'product_id'],
                ['pr_title', 'Product_title'],
                ['pr_type', 'Product_type'],
                ['pr_category', 'Product_category'],
                ['pr_description', 'Product_description'],
                ['pr_filename', 'Product_image'],
                ['pr_price', 'Product_price'],
                ['pr_rating', 'Product_rating'],
                'createdAt', 'updatedAt'
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const response = await ShopProduct.findOne({
            attributes: [
                ['pr_id', 'product_id'],
                ['pr_title', 'Product_title'],
                ['pr_type', 'Product_type'],
                ['pr_category', 'Product_category'],
                ['pr_description', 'Product_description'],
                ['pr_filename', 'Product_image'],
                ['pr_price', 'Product_price'],
                ['pr_rating', 'Product_rating'],
                'createdAt', 'updatedAt'
            ],
            where: {
                pr_id: req.params.id,
            }
        });
       
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const createProduct = async (req, res) => {

    const { Product_title, Product_type, Product_category,
        Product_description, Product_image, Product_price, Product_rating } = req.body;

    if (Product_title === "" || Product_type === "" || Product_category === ""
        || Product_price === "" || Product_rating === "" || Product_image === ""
        || Product_description === "") {
        return res.status(403).json({ msg: 'Blanks fields are not allowed ' })
    }

    try {
        await ShopProduct.create({
            pr_title: Product_title,
            pr_type: Product_type,
            pr_category: Product_category,
            pr_description: Product_description,
            pr_filename: Product_image,
            pr_price: Product_price,
            pr_rating: Product_rating,
        });
        res.status(201).json({ msg: "Product Created" });
    } catch (error) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const updateProduct = async (req, res) => {
    const { Product_title, Product_type, Product_category,
        Product_description, Product_image, Product_price, Product_rating } = req.body;

    if (Product_title === "" || Product_type === "" || Product_category === ""
        || Product_price === "" || Product_rating === "" || Product_image === ""
        || Product_description === "") {
        return res.status(403).json({ msg: 'Blanks fields are not allowed ' })
    }
    try {
        await ShopProduct.update(req.body, {
            where: {
                pr_id: req.params.id
            }
        });
        res.status(200).json({ msg: "Product Updated" });
    } catch (err) {
        console.log({ msg: err.message });
        res.json({ msg: err.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await ShopProduct.destroy({
            where: {
                pr_id: req.params.id
            }
        });
        res.status(200).json({ msg: "Product Deleted" });
    } catch (error) {
        console.log({ msg: error.message });
        res.json({ msg: error.message });
    }
}