import express from "express";
import {
    getAllProducts,
    getProductById,
    getSpecialsale,
    getPopularitems,
    getNewArrival,
    ProductBytitle,
    ProductByCategory,
    ProductBytype
} from "../controller/ProductsController.js";

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);
router.get('/sale', getSpecialsale);
router.get('/store/:productType', getPopularitems);
router.get('/store/:productType', getNewArrival);

router.get('/store/name/:productName',ProductBytitle)
router.get('/store/product/:productType', ProductBytype);
router.get('/store/category/:productCategory', ProductByCategory);


export default router;