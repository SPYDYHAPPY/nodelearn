import Authuser from '../models/AuthUserModel.js';


export const getAuthusers = async (req, res) => {
    try {
        const response = await Authuser.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAuthuserById = async(req, res) =>{
    try {
        const response = await Authuser.findOne({
            where:{
                uid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createAuthuser = async(req, res) =>{
    try {
        await Authuser.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg: error.message});
    }
}

export const updateAuthuser = async(req, res) =>{
    try {
        await Authuser.update(req.body,{
            where:{
                uid: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteAuthuser = async(req, res) =>{
    try {
        await Authuser.destroy({
            where:{
                uid: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}