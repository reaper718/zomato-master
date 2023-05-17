import express from "express";


import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route          /new
Description    add new review
params         NONE
body           Review object
Access         PUBLIC
MEthod         post
*/

Router.post("/new",async(req,res) =>{
    try {
        const { reviewData} = req.body;
        await ReviewModel.create(reviewData);

        return res.json({ review: "successfully creted review"});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /delete
Description    delete a review
params         _id
Access         PUBLIC
MEthod         DELETE
*/

Router.delete("/delete/:_id",async(req,res) =>{
    try {
        const {_id} = req.params

        await ReviewModel.findOneAndDelete(_id);

        return res.json({ review: "successfully deletd review"});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;