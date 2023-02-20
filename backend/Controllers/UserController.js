import User from '../models/UserModel.js'
import bcrypt from 'bcrypt'


export const getUsers = async (req, res) => {
    //if (!req.session.userId) return res.status(401).json({ msg: 'Your login session has expired' })
    try {
        const response = await User.findAll({
            attributes: [
                ['uid', 'userId'],
                ['firstname', 'firstName'],
                ['lastname', 'lastName'],
                ['username', 'userName'],
                ['email', 'userEmail'],
                ['phone', 'userPhone'],
                ['Dob', 'userDob'],
                ['Gender', 'userGender'],
                ['address', 'userAddress'],
                ['terms', 'userTerms'],
                'createdAt', 'updatedAt'
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        // console.log(error.message);
        res.status(400).json({ msg: error.message });
    }
}

export const getUserById = async (req, res) => {
    // if (!req.session.userId) return res.status(401).json({ msg: 'Your login session has expired' })
    try {
        const response = await User.findOne({
            attributes: [
                ['uid', 'userId'],
                ['firstname', 'fullName'],
                ['lastname', 'lastName'],
                ['username', 'userName'],
                ['email', 'userEmail'],
                ['phone', 'userPhone'],
                ['Dob', 'userDob'],
                ['Gender', 'userGender'],
                ['address', 'userAddress'],
                ['terms', 'userTerms'],
                'createdAt', 'updatedAt'
            ],
            where: {
                uid: req.params.id
            }
        });
        if (!response) return res.status(404).json({ msg: 'No user found' })
        res.status(200).json(response);
    } catch (error) {
        // console.log(error.message);
        res.status(400).json({ msg: error.message });
    }
}

export const createUser = async (req, res) => {

    const { firstName, lastName, userName, userEmail,
        userPhone, userDob, userGender, userAddress,
        userPassword, userConfirmPassword, userTerms } = req.body;

    if (firstName === "" || lastName === "" || userName === "" ||
        userEmail === "" || userPhone === "" || userDob === "" ||
        userGender === "" || userAddress === "" || userPassword === "" ||
        userConfirmPassword === "") {
        return res.status(403).json({ msg: 'Blank fields are not allowed' })
    }

    if (userPassword !== userConfirmPassword) return res.status(400).json({ msg: 'Password and Confirm Password do not match' });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(userPassword, salt);

    try {
        await User.create(
            {
                firstname: firstName,
                lastname: lastName,
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
        // error.errors.map(e => {
        //     console.log(e.message);
        //     res.json({ msg: e.message });
        // });
        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }
}

export const updateUser = async (req, res) => {
    //if (!req.session.userId) return res.status(401).json({ msg: 'Your login session has expired' })
    const { firstName, lastName, userName,
        userEmail, userPhone, userDob,
        userGender, userAddress } = req.body;

    if (firstName === "" || lastName === "" || userName === "" ||
        userEmail === "" || userPhone === "" || userDob === "" ||
        userGender === "" || userAddress === "") {
        return res.status(403).json({ msg: 'Blank fields not allowed' })
    }

    const user = await User.findOne({
        where: {
            uid: req.params.id
        }
    })

    if (!user) return res.status(404).json({ msg: 'User id not found' })
    // if (!useroldPassword !== user.password) return res.status(404).json({ msg: 'Old password does not match' })
    // if (userNewPassword !== userConfirmPassword) return res.status(400).json({ msg: 'Password and Confirm Password do not match' });
    // const salt = await bcrypt.genSalt();
    // const NewPassword = await bcrypt.hash(userNewPassword, salt);

    try {
        await User.update({
            firstname: firstName,
            lastname: lastName,
            username: userName,
            email: userEmail,
            phone: userPhone,
            Dob: userDob,
            Gender: userGender,
            address: userAddress,
            // password: NewPassword,
        }, {
            where: {
                uid: req.params.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        // console.log({ msg: err.message });
        // res.json({ msg: err.message });
        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }
}

export const UpdateuserPass = async (req, res) => {

    const { useroldPassword, userNewPassword, userConfirmPassword } = req.body;

    if (useroldPassword === "" || userNewPassword === "" || userConfirmPassword === "") {
        return res.status(403).json({ msg: 'Blank fields not allowed' })
    }

    const user = await User.findOne({
        where: {
            uid: req.params.id
        }
    })

    if (!user) return res.status(404).json({ msg: 'User id not found' })
    if (!useroldPassword !== user.password) return res.status(404).json({ msg: 'Old password does not match' })
    if (userNewPassword !== userConfirmPassword) return res.status(400).json({ msg: 'Password and Confirm Password do not match' });
    const salt = await bcrypt.genSalt();
    const NewPassword = await bcrypt.hash(userNewPassword, salt);

    try {
        await User.update({
             password: NewPassword,
        }, {
            where: {
                uid: req.params.id
            }
        });
        res.status(200).json({ msg: "User password has Updated" });
    } catch (error) {
        // console.log({ msg: err.message });
        // res.json({ msg: err.message });
        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }


}

export const deleteUser = async (req, res) => {
    if (!req.session.userId) return res.status(401).json({ msg: 'Your login session has expired' })
    try {
        const user = await User.findOne({
            where: {
                uid: req.params.id
            }
        })

        if (!user) return res.status(404).json({ msg: 'User id not found' })
        await User.destroy({
            where: {
                uid: req.params.id
            }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        // console.log({ msg: error.message });
        // res.json({ msg: error.message });
        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }
}