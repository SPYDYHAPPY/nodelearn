import express from "express";
import {
    getAllcartitems,
    getCartitemById,
    createCartItem,
    updateCartItem,
    deleteCartItem
} from '../controllers/CartController.js';

const router = express.Router();

router.get('/cartitems', getAllcartitems);
router.get('/cartitem/:id', getCartitemById);
router.post('/cartitems', createCartItem);
router.patch('/cartitem/:id', updateCartItem);
router.delete('/cartitem/:id', deleteCartItem);


export default router;
