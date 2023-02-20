import Authuser from '../models/AuthUserModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const AuthuserLogin = async (req, res) => {
    try {
        const authuser = await Authuser.findAll({
            where: {
                auth_username: req.body.authName
            }
        });
        //check password
        if (req.body.authPass === "" || req.body.authName === "") return res.status(401).json({ msg: "Blank fields not allowed" })

        //check user id
        if (!authuser[0]) return res.status(404).json({ msg: 'User id not found' })

        // password match
        const matchpass = await bcrypt.compare(req.body.authPass, authuser[0].auth_password)

        // check password whether valid or not
        if (!matchpass) return res.status(400).json({ msg: 'password is not correct' })

        const userId = authuser[0].auth_id
        const userFullname = authuser[0].auth_firstname + ' ' + authuser[0].auth_lastname
        const userUsername = authuser[0].auth_username
        const LoginRole = authuser[0].auth_role

        req.session.authuserId = authuser[0].auth_id;
        //req.session.authRole = authuser[0].auth_role;

        const AuthaccessToken = jwt.sign({ userId, userFullname, userUsername, LoginRole }, process.env.AUTH_TOKEN_SECRET, {
            expiresIn: '220s'
        })
        const authrefreshToken = jwt.sign({ userId, userFullname, userUsername, LoginRole }, process.env.REFRESH_AUTH_TOKEN, {
            expiresIn: '1d'
        })

        await Authuser.update({ refresh_token: authrefreshToken }, {
            where: {
                auth_id: userId
            }
        })
        res.cookie('authrefreshToken', authrefreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        //res.status(200).json({ AuthaccessToken });
        res.status(200).json({ msg: 'welcome back ' + userFullname.toLowerCase() });
    } catch (error) {
        //res.status(404).json({ msg: error.message });
        res.status(404).json({ msg: 'Something wrong.' })
    }
}

export const authLogout = async (req, res) => {
    const refreshToken = req.cookies.authrefreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const authuser = await Authuser.findOne({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!authuser) return res.sendStatus(204);
    const authId = authuser.auth_id;
    await Authuser.update({ refresh_token: null }, {
        where: {
            auth_id: authId
        }
    });
    res.clearCookie('authrefreshToken');
    await req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: 'faced some issue' })
        res.status(200).json({ msg: 'you have successfully logged out' });
    })
}