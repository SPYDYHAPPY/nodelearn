import express from "express";
import {
    getAllproducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js"

const router = express.Router();


router.get('/products', getAllproducts);
router.get('/product/:id', getProductById);
router.post('/products', createProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;