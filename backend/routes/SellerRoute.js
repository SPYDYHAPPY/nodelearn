import express from "express";
import {
    getAllsellers,
    getSellerById,
    createSeller,
    updateSeller,
    deleteSeller
} from "../controllers/SellerController.js"

const router = express.Router();


router.get('/sellers-list', getAllsellers);
router.get('/seller/:id', getSellerById);
router.post('/sellers', createSeller);
router.patch('/seller/:id', updateSeller);
router.delete('/seller/:id', deleteSeller);

export default router;