import express from "express";
import {ProductModel} from "../../database/allModels.js";
const Router=express.Router();

Router.get("/getAll",async(req,res)=>{
    try{
        const getAllProducts=await ProductModel.find();
    if(getAllProducts.length==0){
        return res.json({error:`No products found`});
    }
    return res.status(200).json({products:getAllProducts});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
Router.get("/:searchString",async(req,res)=>{
    try{
        const {searchString}=req.params;
        const getProduct=await ProductModel.find(
            {
                name:{$regex:searchString,$options:"i"}
            }
        )
        if(getProduct.length==0){
            return res.json({error:`No products found for searched string :${searchString}`});
        }
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
Router.get("/cat/:category",async(req,res)=>{
    try{
        const {category}=req.params;
        const getProduct=await ProductModel.find(
            {
                category:{$regex:category,$options:"i"}
            }
        )
        if(getProduct.length==0){
            return res.json({error:`No products found for category :${category}`});
        }
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
export default Router;