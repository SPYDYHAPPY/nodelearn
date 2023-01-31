import express from "express";
import {Loginauthentication, Logout} from "../controllers/UserauthController.js"
//import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();


//router.get('/me', Me);
//router.get('/token', refreshToken);
router.post('/login', Loginauthentication);
router.delete('/logout', Logout);

 
export default router;