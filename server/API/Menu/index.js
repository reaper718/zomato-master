import express from "express";

//database  model
import { MenuModel,ImageModel } from "../../database/allModels";

// VALIDATION
import { ValidateRestaurantID } from "../../Validation/food";



const Router = express.Router();

/*
Route          /list
Description    get all menu of a particular restaurants
params         _id
Access         PUBLIC
MEthod         get
*/

Router.get("/list/:_id",async(req,res) => {
    try {
await ValidateRestaurantID(req.params);

        const {_id} = req.params;
        const menus= await MenuModel.findOne(_id);

        return res.json({menus});
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /image
Description    get menu image based on id
params         _id
Access         PUBLIC
MEthod         get
*/

Router.get("/image/:_id",async(req,res) => {
    try {
        await ValidateRestaurantID(req.params);

        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);

        return res.json({menus});

        
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;