import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.status(401).json({msg: 'Invalid refresh token'});
        const user = await Users.findOne({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user) return res.status(403).json({msg: 'User not found'});
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.status(403).json({msg: err.message});
            const userId = user.uid;
            const name = user.fullname;
            const email = user.email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '320s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}