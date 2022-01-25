import express from "express";
import { ReviewModel } from "../../database/allModels.js";

const Router=express.Router();

// Making API requests

// http://localhost:4000/review/:prtid
/*
Method  Get
Params  prtid
Descp   get all reviews for particular product id
Route   /:prtid
*/
Router.get("/:prtid",async (req,res)=>{
    try{
        const {prtid}=req.params;
        const getSpecificReview=await ReviewModel.find({product:prtid});
        if(getSpecificReview.length==0){
            return res.json({error:`No reviews found for user id:${prtid}`});
        }
        return res.status(200).json({userReview:getSpecificReview});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
// http://localhost:4000/review/
/*
Method  Post
Params  none
Descp   post a review
Route   /new
*/
Router.post("/new",async (req,res)=>{
    try{
        const {reviewData}=req.body.credentials;
        await ReviewModel.create({...reviewData});
        return res.status(200).json({review:"Successfully created review!"});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
/**
   * Route        /delete/:id
   * Des          Delete a specific review
   * Params       _id
   * Access       Public
   * Method       DELETE
   */
 Router.delete("/delete/:id", async (req, res) => {
    try {
      const { _id } = req.params;
  
      await ReviewModel.findByIdAndDelete(_id);
  
      return res.json({ review: "Sucessfully deleted the review." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  export default Router;