// configuring dotenv
import dotenv from "dotenv";
dotenv.config();

// Importing modules
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Initialising express app
const app=express();

// Using the app
app.use(express.json());
app.use(cors());
app.use(helmet());

// Setting up the port
app.listen(4000,()=>{
    console.log("Server is running!");
})