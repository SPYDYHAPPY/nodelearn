import ShopProduct from "../models/ProductModel.js"

export const getAllproducts = async (req, res) => {
    try {
        const response = await ShopProduct.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const response = await ShopProduct.findOne({
            where: {
                pr_id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        await ShopProduct.create(req.body);
        res.status(201).json({ msg: "Product Created" });
    } catch (error) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const updateProduct = async (req, res) => {
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