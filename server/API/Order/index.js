import express from "express";
import passport from "passport";
import {OrderModel} from "../../database/allModels.js";

const Router=express.Router();

Router.get("/:_id",passport.authenticate('jwt',{session:false}),async(req,res)=>{
    try{
        const {_id}=req.params;
        const getAllOrders=await OrderModel.findOne({user:_id});
        if(getAllOrders==null){
            return res.json({error:`No orders found for user id:${_id}`});
        }
        return res.status(200).json({orders:getAllOrders});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})

Router.post("/new/:_id",passport.authenticate('jwt',{session:false}),async(req,res)=>{
    try{
        const {_id}=req.params;
        const addOrder=await OrderModel.findOneAndUpdate({user:_id},req.body.credentials,{new:true});
        if(addOrder==null){
            return res.json({error:`Id:${_id} not found!`});
        }
        return res.status(200).json({newOrder:addOrder});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
export default Router;