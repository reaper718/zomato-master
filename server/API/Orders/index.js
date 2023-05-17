import express from "express";

import passport from "passport";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/*
Route          /
Description    get all orders based on id
params         _id
Access         PUBLIC
MEthod         GET
*/

Router.get("/:_id",passport.authenticate("jwt", {session: false})  ,async(req,res)=> {
    try {
      const { _id } = req.params;
      const getOrders = await OrderModel.findOne({user: _id});
  
      if(!getOrders) {
        return res.status(404).json({error: "User not found"});
      }
  
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  });

/*
Route          /new
Description    add new order
params         NONE
Access         PUBLIC
MEthod         POST
*/

Router.post("/new/:_id",async(req,res) =>{
    try {
        const {_id} = req.params;
        const{OrderDetails} = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {OrderDetails: OrderDetails}
            },
            {
                new: true
            }
        );
        return res.json({order: addNewOrder});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;