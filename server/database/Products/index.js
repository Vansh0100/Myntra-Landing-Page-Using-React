import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema(
    {
        name:{type:String},
        photos:{type:mongoose.Types.ObjectId,ref:"Images"},
        productDescription:{type:String},
        price:{type:Number,default:150},
        rating:{type:Number},
        ismalePr:{type:Boolean},
        isfemalePr:{type:Boolean},
        iskidspr:{type:Boolean},
        category:[String]
    },
    {
        timestamps:true
    }
)