import express from "express";

//Database model
import { FoodModel } from "../../database/allModels";

//VALIDATION
import { ValidateRestaurantID,ValidateCategory } from "../../Validation/food";

const Router = express.Router();

/*
Route          /
Description    get all the foods based on particular restaurant
params         _id
Access         PUBLIC
MEthod         get
*/

Router.get("/:_id",async(req,res) => {
    try {

await ValidateRestaurantID(req.params);

        const{_id} = req.params;
        const foods = await FoodModel.find({ restaurant: _id});
        return res.json({foods});
    } catch(error) {
        return res.status(500).json({error: error.messasge});
    }
});

/*
Route          /r
Description    get restaurants details on category
params         category
Access         PUBLIC
MEthod         get
*/

Router.get("/r/:category",async(req,res) => {
    try {

await ValidateCategory(req.params);

        const {category} = req.params;
        const foods = await FoodModel.find({
            category: {$regex: category, $option: "i"}
        });

        return res.json({foods});
    } catch(error) {
        return res.status(500).json({error: error.messasge});
    }
})

export default Router;