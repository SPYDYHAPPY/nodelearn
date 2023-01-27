import Seller from '../models/SellerModel.js'


export const getAllsellers = async (req, res) => {
    try {
        const response = await Seller.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const getSellerById = async (req, res) => {
    try {
        const response = await Seller.findOne({
            where: {
                sid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const createSeller = async (req, res) => {
    try {
        await Seller.create(req.body);
        res.status(201).json({ msg: "Seller Created" });
    } catch (error) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const updateSeller = async (req, res) => {
    try {
        await Seller.update(req.body, {
            where: {
                sid: req.params.id
            }
        });
        res.status(200).json({ msg: "Seller Updated" });
    } catch (err) {
        console.log({ msg: err.message });
        res.json({ msg: err.message });
    }
}

export const deleteSeller = async (req, res) => {
    try {
        await Seller.destroy({
            where: {
                sid: req.params.id
            }
        });
        res.status(200).json({ msg: "Seller Deleted" });
    } catch (error) {
        console.log({ msg: error.message });
        res.json({ msg: error.message });
    }
} 