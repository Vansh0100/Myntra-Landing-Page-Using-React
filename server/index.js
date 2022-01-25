// configuring dotenv
import dotenv from "dotenv";
dotenv.config();

// Importing modules
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
// Importing MongoDb connection
import connection from "./database/connection.js";

// Importing APIs
import Auth from "./API/Auth/index.js";
import Image from "./API/Image/index.js";
import Order from "./API/Order/index.js";
import Product from "./API/Product/index.js";
import Review from "./API/Review/index.js";
import User from "./API/User/index.js";

// Importing Configurations
 import GoogleConfig from "./config/google.config.js";
import RouteConfig from "./config/route.config.js";
// Using Google Config
GoogleConfig(passport);
RouteConfig(passport);
// Initialising express app
const app=express();

// Using the app
app.use(express.json());
app.use(cors());
app.use(helmet());

// Using API Routes
app.use("/auth",Auth);
app.use("/image",Image);
app.use("/order",Order);
app.use("/product",Product);
app.use("/review",Review);
app.use("/user",User);

// Intialising Passport
app.use(passport.initialize());

// Setting up the port
app.listen(4000,()=>{
    connection().then(()=>{console.log("Server is Running")}).catch((error)=>{console.log("Server is running but database connection failed!");
    console.log(error);
});
})