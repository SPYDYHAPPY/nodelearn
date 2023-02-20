import express from "express";

import {
    getAuthusers,
    getAuthuserById,
    createAuthuser,
    updateAuthuser,
    UpdateauthPass,
    deleteAuthuser
} from '../controllers/AuthUserController.js';
import { AuthuserLogin, authLogout } from "../controllers/AuthuserLogin.js";
//import { authToken } from "../middleware/VerifyToken.js";
//import { authuserToken } from "../controllers/AuthToken.js";

const router = express.Router();

router.get('/auth-users', getAuthusers); //authToken
router.get('/auth-users/:id', getAuthuserById); //authToken
router.post('/auth-users', createAuthuser); 
router.patch('/auth-users/:id', updateAuthuser); //authToken
router.patch('/auth/user/:id', UpdateauthPass); //authToken
router.delete('/auth-users/:id', deleteAuthuser); //authToken

//login And logout route
router.post('/auth/login', AuthuserLogin);
router.delete('/auth/logout', authLogout);
//token
//router.get('/auth/token', authuserToken);

export default router;