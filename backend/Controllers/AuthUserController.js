import Authuser from '../models/AuthUserModel.js';
//import validator from 'validator';
import bcrypt from 'bcrypt'

export const getAuthusers = async (req, res) => {
    // if (!req.session.authuserId) return res.status(401).json({ msg: 'Your login session has expired' })
    try {
        const response = await Authuser.findAll({
            attributes:[
                ['auth_id', 'user_id'],
                ['auth_firstname','firstName'],
                ['auth_lastname', 'lastName'],
                ['auth_username', 'userName'],
                ['auth_email', 'userEmail'],
                ['auth_phone', 'userPhone'],
                ['auth_dob', 'userDob'],
                ['auth_gender', 'userGender'],
                ['auth_role', 'userRole'],
                ['auth_address', 'userAddress'],
                'createdAt', 'updatedAt'
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        // console.log(error.message);
        res.status(400).json({ msg: error.message });
    }
}

export const getAuthuserById = async (req, res) => {
    // if (!req.session.authuserId) return res.status(401).json({ msg: 'Your login session has expired' })
    try {
        const response = await Authuser.findOne({
            attributes:[
                ['auth_id', 'user_id'],
                ['auth_firstname','firstName'],
                ['auth_lastname', 'lastName'],
                ['auth_username', 'userName'],
                ['auth_email', 'userEmail'],
                ['auth_phone', 'userPhone'],
                ['auth_dob', 'userDob'],
                ['auth_gender', 'userGender'],
                ['auth_role', 'userRole'],
                ['auth_address', 'userAddress'],
                'createdAt', 'updatedAt'
            ],
            where: {
                auth_id: req.params.id
            }
        });
        if (!response) return res.status(404).json({ msg: 'No user found' })
        res.status(200).json(response);
    } catch (error) {
        // console.log(error.message);
        res.status(400).json({ msg: error.message });
    }
}

export const createAuthuser = async (req, res) => {
    //usercnfPass,  userterms 
    const { firstName, lastName, userName, userEmail,
        userPhone, userDob, userGender, Rolein,
        userLocation, userPassword, userCnfpassword } = req.body

    if (firstName === "" || lastName === "" || userName === "" || userEmail === "" ||
        userPhone === "" || userDob === "" || userGender === "" || Rolein === "" ||
        userLocation === "" || userPassword === "" || userCnfpassword === "") {
        return res.status(403).json({ msg: 'Blank fields not allowed' })
    }
    if (userPassword !== userCnfpassword) return res.status(403).json({ msg: 'Password and Confirm Password do not match' })
    const salt = await bcrypt.genSalt();
    const authhash = await bcrypt.hash(userPassword, salt);
    try {
        await Authuser.create(
            {
                auth_firstname: firstName,
                auth_lastname: lastName,
                auth_username: userName,
                auth_email: userEmail,
                auth_phone: userPhone,
                auth_dob: userDob,
                auth_gender: userGender,
                auth_role: Rolein,
                auth_address: userLocation,
                auth_password: authhash,
            });
        res.status(201).json({ msg: "User Created" });
    } catch (error) {
        // console.log(error.message);
        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }
}

export const updateAuthuser = async (req, res) => {
    //if (!req.session.authuserId) return res.status(401).json({ msg: 'Your login session has expired' })
    const { firstName, lastName, userName,
        userEmail, userPhone, userDob,
        userGender, Rolein, userLocation } = req.body;

    if (firstName === "" || lastName === "" || userName === "" || userEmail === "" ||
        userPhone === "" || userDob === "" || userGender === "" || Rolein === "" ||
        userLocation === "") {
        return res.status(403).json({ msg: 'Blank fields not allowed' })
    }

    const authuser = await Authuser.findOne({
        where: {
            auth_id: req.params.id
        }
    })

    if (!authuser) return res.status(404).json({ msg: 'User id not found' })

    try {
        await Authuser.update(
            {
                auth_firstname: firstName,
                auth_lastname: lastName,
                auth_username: userName,
                auth_email: userEmail,
                auth_phone: userPhone,
                auth_dob: userDob,
                auth_gender: userGender,
                auth_role: Rolein,
                auth_address: userLocation
            }, {
            where: {
                auth_id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        //console.log(error.message);
        // error.errors.map(e => {
        //     res.status(400).json({ msg: e.message });
        // });
        //res.status(500).json(error.message);

        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }
}

export const UpdateauthPass = async (req, res) => {
   // if (!req.session.authuserId) return res.status(401).json({ msg: 'Your login session has expired' })
    const { userOldpass, userPassword, userCnfpassword } = req.body;

    if (userOldpass === "" || userPassword === "" || userCnfpassword === "") {
        return res.status(403).json({ msg: 'Blank fields not allowed' })
    }

    const authPass = await Authuser.findOne({
        where: {
            auth_id: req.params.id
        }
    })

    if (!authPass) return res.status(404).json({ msg: 'User id not found' })


    // password match
    const matchpass = await bcrypt.compare(userOldpass, authPass.auth_password)
    if (!matchpass) return res.status(400).json({ msg: 'Your old password is incorrect' })

    var minNumberofChars = 8;
    var maxNumberofChars = 15;
    var regularExpression = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,15}).*$/;

    if (userPassword.length < minNumberofChars || userPassword.length > maxNumberofChars) return res.status(400).json({ msg: 'password must be at least ' + minNumberofChars + ' to ' + maxNumberofChars + ' characters long.' });
    if (!regularExpression.test(userPassword)) return res.status(400).json({ msg: 'Password at least 8 characters which contain at least one numeric digit, one uppercase and one special letter' })

    if (userPassword !== userCnfpassword) return res.status(403).json({ msg: 'Password and Confirm Password do not match' })
    const salt = await bcrypt.genSalt();
    const newPass = await bcrypt.hash(userPassword, salt);

    try {
        await Authuser.update(
            {
                auth_password: newPass
            }, {
            where: {
                auth_id: req.params.id
            }
        });
        res.status(200).json({ msg: "Password has Updated" });
    } catch (error) {
        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }
}



export const deleteAuthuser = async (req, res) => {
   // if (!req.session.authuserId) return res.status(401).json({ msg: 'Your login session has expired' })
    const authuser = await Authuser.findOne({
        where: {
            auth_id: req.params.id
        }
    })

    if (!authuser) return res.status(404).json({ msg: 'User id not found' })

    try {
        await Authuser.destroy({
            where: {
                auth_id: req.params.id
            }
        });
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        // console.log(error.message);
        // res.status(400).json({ msg: error.message });
        const errObj = {};
        error.errors.map(er => {
            errObj[er.path] = er.message;
        })
        res.status(400).json(errObj);
    }
}