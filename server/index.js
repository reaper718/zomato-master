//env variable
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config 
import googleAuthConfig from "./config/google.config";

import routeConfig from "./config/route.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Review from "./API/reviews";
import User from "./API/User";

//databse connection
import ConnectDB from "./database/connection";


const zomato = express ();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//for application routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/review",Review);
zomato.use("/user",User);


zomato.get ("/",(req,res) => res.json({message: "setup success yay"}));

zomato.listen(4000 ,() => 
ConnectDB().then(() => console.log("server is up and running"))
.catch(()=> console.log("DB connection failed")));

