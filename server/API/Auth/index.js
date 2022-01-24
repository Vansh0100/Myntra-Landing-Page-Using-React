// importing express
import express from "express";
import passport from "passport";
// Importing UserModel
import {UserModel} from "../../database/allModels.js";

// Initialising Express Router
const Router=express.Router();

// Making API requests

// http://localhost:4000/auth/signup
/*
Method  Post
Route   /signup
Params  None
*/
Router.post("/signup",async(req,res)=>{
    try{
        const {email,phoneNumber,password,fullname}=req.body.credentials;
        await UserModel.checkEmailAndPhone({email,phoneNumber});
        const user=await UserModel.create({...req.body.credentials});
        const token=user.generateJwtToken();
        return res.status(200).json({token,status:"SignedUp Successfully!"});
        

    }
    catch(error){
        return res.status(500).json({error:error.message})
    }
})
// http://localhost:4000/auth/signin
/*
Method  Post
Route   /signin
Params  None
*/
Router.post("/signin",async(req,res)=>{
    try{
        const {email,password}=req.body.credentials;
        const user=await UserModel.checkEmailAndPassword({email,password});
        const token=user.generateJwtToken();
        return res.status(200).json({token,status:"SignedIn Successfully!"});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
export default Router;
// http://localhost:4000/auth/google
/*
Method  Post
Descp   Google Signin/Signup
Route   /google
Params  None
*/
Router.get("/google",passport.authenticate(
    'google',
    {
        scope:[
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
    }
))
// http://localhost:4000/auth/google/callback
/*
Method  Get
Descp   Google Callback
Route   /google/callback
Params  None
*/
Router.get("/google/callback",passport.authenticate(
    'google',
    {failureRedirect: '/'}
    ),
     (req,res)=>{
        return res.status(200).json({token:req.session.passport.user.token,status:"Successfull"});
    }
)