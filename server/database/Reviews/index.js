import mongoose from "mongoose"

const ReviewSchema=new mongoose.Schema(
    {
        user:{type:mongoose.Types.ObjectId,ref:"Users"},
        photos:{type:mongoose.Types.ObjectId,ref:"Images"},
        rating:{type:Number},
        reviewText:{type:String},
        isProductReview:{type:Boolean},
        isDeliveryReview:{type:Boolean}
    },
    {
        timestamps:true
    }
)

export const ReviewModel=mongoose.model("Reviews",ReviewSchema);