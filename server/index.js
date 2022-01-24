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

// Importing Google Configuration
 import GoogleConfig from "./config/google.config.js";

// Using Google Config
GoogleConfig(passport);

// Initialising express app
const app=express();

// Using the app
app.use(express.json());
app.use(cors());
app.use(helmet());

// Using API Routes
app.use("/auth",Auth);

// Intialising Passport
app.use(passport.initialize());

// Setting up the port
app.listen(4000,()=>{
    connection().then(()=>{console.log("Server is Running")}).catch((error)=>{console.log("Server is running but database connection failed!");
    console.log(error);
});
})