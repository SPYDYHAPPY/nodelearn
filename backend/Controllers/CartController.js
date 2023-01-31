import UserCart from '../models/CartModel.js';


export const getAllcartitems = async (req, res ) => {

    try {
        const response = await UserCart.findAll();
        res.status(200).json(response);
    } catch (error) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const getCartitemById = async (req, res) => {
    try {
        const response = await UserCart.findOne({
            where: {
                cid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const createCartItem = async (req, res) => {
    try {
        await UserCart.create(req.body);
        res.status(201).json({ msg: "Cart Created" });
    } catch (error) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const updateCartItem = async (req, res) => {
    try {
        await UserCart.update(req.body, {
            where: {
                cid: req.params.id
            }
        });
        res.status(200).json({ msg: "cart Updated" });
    } catch (err) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const deleteCartItem = async (req, res) => {
    try {
        await UserCart.destroy({
            where: {
                cid: req.params.id
            }
        });
        res.status(200).json({ msg: "cart item Deleted" });
    } catch (error) {
        console.log({ msg: error.message });
        res.json({ msg: error.message });
    }
}