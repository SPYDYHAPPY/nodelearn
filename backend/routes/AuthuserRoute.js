import express from "express";

import { 
    getAuthusers,
    getAuthuserById,
    createAuthuser,
    updateAuthuser,
    deleteAuthuser
} from '../controllers/AuthUserController.js'

const router = express.Router();

router.get('/auth-users', getAuthusers);
router.get('/auth-users/:id', getAuthuserById);
router.post('/auth-users', createAuthuser);
router.patch('/auth-users/:id', updateAuthuser);
router.delete('/auth-users/:id', deleteAuthuser);
 
export default router;