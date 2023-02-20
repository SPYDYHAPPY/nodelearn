import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    UpdateuserPass,
    deleteUser
} from "../controllers/UserController.js";
import { Loginauthentication, Logout } from "../controllers/UserauthController.js"
//import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users',  getUsers); //verifyToken
router.get('/users/:id', getUserById); //verifyToken
router.patch('/users/:id', updateUser); //verifyToken
router.patch('/user-pass/:id', UpdateuserPass); //verifyToken
router.delete('/users/:id', deleteUser); //verifyToken

//access token
router.get('/token', refreshToken);

//other part
router.post('/users', createUser);
router.post('/login', Loginauthentication);
router.delete('/logout', Logout);

export default router;