import mongoose from "mongoose"

const OrderSchema=new mongoose.Schema(
    {
        user:{type:mongoose.Types.ObjectId,ref:"Users"},
        products:{type:mongoose.Types.ObjectId,ref:"Products"},
        paymentMode:{type:String},
        totalPrice:{type:Number},
        quantity:{type:Number},
        razorpay_id:{type:String},
        paymentStatus:{type:String}
    },
    {
        timestamps:true
    }
)
export const OrderModel=mongoose.model("Orders",OrderSchema);