import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";
import { Loginauthentication, Logout } from "../controllers/UserauthController.js"
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.get('/token', refreshToken);
router.patch('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);
//other part
router.post('/users', createUser);
router.post('/login', Loginauthentication);
router.delete('/logout', Logout);

export default router;