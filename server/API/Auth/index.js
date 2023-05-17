import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const Router = express.Router();
//MODELS
import {UserModel} from "../../database/user";
import passport from "passport";

//VALIDATION
import { ValidateSignup,ValidateSignin } from "../../Validation/auth";

/*
Route          /signup
Description    signup with email and password
params         NONE
Access         PUBLIC
MEthod         POST
*/

Router.post("/signup",async(req,res) =>{
    try {

await ValidateSignup(req.body.credentials); 

await UserModel.findEmailAndPhone(req.body.credentials);

        
    //DB
   const newUser =  await UserModel.create(req.body.credentials);

    //JWT auth token
    const token = newUser.generateJwtToken();

    return res.status(200).json({token});

    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /signin
Description    signin with email and password
params         NONE
Access         PUBLIC
MEthod         POST
*/

Router.post("/signin",async(req,res) =>{
    try {

    await ValidateSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(
            req.body.credentials
        );

    //JWT auth token
    const token = user.generateJwtToken();

    return res.status(200).json({token, status: "Success"});

    } catch(error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route          /google
Description    google signin 
params         NONE
Access         PUBLIC
MEthod         GET
*/

Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ],
})
);


/*Route          /google/callback
Description    google signin  callback
params         NONE
Access         PUBLIC
MEthod         GET
*/

Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
(req,res) => {
    return res.json({token: req.session.passport.user.token});
}
);

export default Router;