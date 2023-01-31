import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'


export const getUsers = async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ msg: 'Your login session has expired' })
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const getUserById = async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ msg: 'Your login session has expired' })
    try {
        const response = await User.findOne({
            where: {
                uid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.json({ msg: error.message });
    }
}

export const createUser = async (req, res) => {

    const { fullName, userName, userEmail, userPhone, userDob, userGender, userAddress, userPassword, userConfirmPassword, userTerms } = req.body;
    if (userPassword !== userConfirmPassword) return res.status(400).json({ msg: 'Password and Confirm Password do not match' });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(userPassword, salt);
    try {
        await User.create({
            fullname: fullName,
            username: userName,
            email: userEmail,
            phone: userPhone,
            Dob: userDob,
            Gender: userGender,
            address: userAddress,
            password: hashPassword,
            terms: userTerms
        });
        res.status(201).json({ msg: "User Created" });
    } catch (error) {
        error.errors.map(e => {
            console.log(e.message);
            res.json({ msg: e.message });
        });
    }
}

export const updateUser = async (req, res) => {
    if (!req.session.userId) return res.status(401).json({msg: 'Your login session has expired'})
    const { fullName, userName, userEmail, userPhone, userDob, userGender, userAddress, useroldPassword, userPassword, userConfirmPassword } = req.body;

    const user = await User.findOne({
        where: {
            uid: req.params.id
        }
    })

    if (!user) return res.status(404).json({ msg: 'User id not found' })
    if (!useroldPassword !== user.password) return res.status(404).json({ msg: 'Old password does not matched' })
    if (useroldPassword === "" || useroldPassword === null || userPassword === "" || userPassword === null || userConfirmPassword === "" || userConfirmPassword === null) return res.status(404).json({ msg: 'Blank fields not allowed' })
    if (userPassword !== userConfirmPassword) return res.status(400).json({ msg: 'Password and Confirm Password do not match' });
    const salt = await bcrypt.genSalt();
    const NewPassword = await bcrypt.hash(userPassword, salt);

    try {
        await User.update({
            fullname: fullName,
            username: userName,
            email: userEmail,
            phone: userPhone,
            Dob: userDob,
            Gender: userGender,
            address: userAddress,
            password: NewPassword,
        }, {
            where: {
                uid: user.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (err) {
        console.log({ msg: err.message });
        res.json({ msg: err.message });
    }
}

export const deleteUser = async (req, res) => {
    if (!req.session.userId) return res.status(401).json({msg: 'Your login session has expired'})
    try {
        await User.destroy({
            where: {
                uid: req.params.id
            }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        console.log({ msg: error.message });
        res.json({ msg: error.message });
    }
}