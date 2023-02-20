import Authuser from '../models/AuthUserModel.js';
import jwt from "jsonwebtoken";

export const authuserToken = async(req, res) => {
    try {
        const authRToken = req.cookies.authrefreshToken;
        if(!authRToken) return res.status(401).json({msg: 'Invalid refresh token'});
        const user = await Authuser.findOne({
            where:{
                refresh_token: authRToken
            }
        });
        if(!user) return res.status(403).json({msg: 'User not found'});
        jwt.verify(authRToken, process.env.REFRESH_AUTH_TOKEN, (err, decoded) => {
            if(err) return res.status(403).json({msg: err.message});
            const userId = user.uid;
            const name = user.fullname;
            const username = user.username;
            const Role = user.LoginRole;
            const AuthaccessToken = jwt.sign({userId, name, username, Role}, process.env.AUTH_TOKEN_SECRET,{
                expiresIn: '320s'
            });
            res.json({ AuthaccessToken });
        });
    } catch (error) {
        console.log(error);
    }
}