import express from "express";
import { RestaurantModel } from "../../database/allModels";

//VALIDATION
import { ValidateRestaurantCity,ValidateRestaurantSearchString } from "../../Validation/restaurant";
import { ValidateRestaurantID } from "../../Validation/food";
const Router = express.Router();

/*
Route          /
Description    get all restaurants details
params         NONE
Access         PUBLIC
MEthod         get
*/

Router.get("/", async(req,res) => {
    try{

await ValidateRestaurantCity(req.query);

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /
Description    get particular restaurants details on id
params         _id
Access         PUBLIC
MEthod         get
*/

Router.get("/_:id",async(req,res) => {
    try {

await ValidateRestaurantID(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant)
        return res.status(404).json({error: "Restaurant not found"});

        return res.json({restaurant});
    } catch(error) {
        return res.json.status(500).json({error: error.message});
    }
});

/*
Route          /
Description    get restaurants details on search
params         NONE
Body           searchString
Access         PUBLIC
MEthod         get
*/

Router.get("/search", async(req,res) => {
    try {

await ValidateRestaurantSearchString(req.body);

        const {searchString} = req.body;

        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"}
        });

        return res.json({restaurants});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;