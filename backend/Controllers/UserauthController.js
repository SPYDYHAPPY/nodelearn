import Reguser from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Loginauthentication = async (req, res) => {
    try {
        const authuser = await Reguser.findAll({
            where: {
                username: req.body.userName
            }
        });
        //check user id
        if (!authuser[0]) return res.status(404).json({ msg: 'User id not found' })

        // password match
        const matchpass = await bcrypt.compare(req.body.userPass, authuser[0].password)

        // check password whether valid or not
        if (!matchpass) return res.status(400).json({ msg: 'Invalid password' })

        const userId = authuser[0].uid
        const userFullname = authuser[0].fullname
        const userUsername = authuser[0].username
        // const userEmail = authuser[0].email
        // const userPhone = authuser[0].phone
        // const userDob = authuser[0].Dob
        // const userGender = authuser[0].Gender
        // const userAddress = authuser[0].address

        req.session.userId = authuser[0].uid;

        const accessToken = jwt.sign({ userId, userFullname, userUsername }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '220s'
        })
        const refreshToken = jwt.sign({ userId, userFullname, userUsername }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })

        await Reguser.update({ refresh_token: refreshToken }, {
            where: {
                uid: userId
            }
        })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({ accessToken });
    } catch (error) {
        //res.status(404).json({ msg: error.message });
        res.status(404).json({ msg: 'Something wrong.' })
    }
}


// export const Me = async (req, res) => {
//     if (!req.session.userId) {
//         return res.status(401).json({ msg: 'Invalid session' })
//     }
//     const authuser = await Reguser.findOne({
//         attributes: ['uid', 'fullname', 'username', 'email', 'phone', 'Dob', 'Gender', 'address'],
//         where: {
//             uid: req.session.userId
//         }
//     })
//     if (!authuser) return res.status(404).json({ msg: 'user not found' })
//     res.status(200).json(authuser);
// }


export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const authuser = await Reguser.findOne({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!authuser) return res.sendStatus(204);
    const userId = authuser.uid;
    await Reguser.update({ refresh_token: null }, {
        where: {
            uid: userId
        }
    });
    res.clearCookie('refreshToken');
    await req.session.destroy((err) => {
        if (err) return res.status(400).json({ msg: 'faced some issue' })
        res.status(200).json({ msg: 'you have successfully logged out' });
    })
}