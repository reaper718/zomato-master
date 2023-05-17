import express from "express";


import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route          /_id
Description    get an user data
params         _id
Access         PUBLIC
MEthod         GET
*/

Router.get("/:_id",async(req,res) =>{
    try {

        const {_id} = req.params
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /update
Description    update an user data
params         _userid
BODY           user data
Access         PUBLIC
MEthod         put
*/

Router.put("/update/:_userID",async(req,res) =>{
    try {

        const {userID} = req.params;
        const {userData} = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            userID,
            {
                $set :userData
            },
            {new: true}
            
        );

        return res.json({ user: updateUserData});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});
export default Router;