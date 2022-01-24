// importing mongoose
import mongoose from "mongoose";

// Importing jwt and bcryptjs
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

// Creating Users Schema
const UserSchema=new mongoose.Schema(
    {
        fullname:{type:String},
        email:{type:String,required:true},
        password:{type:String},
        address:[{details:{type:String},for:{type:String}}],
        phoneNumber:{type:Number}
    }
)
UserSchema.methods.generateJwtToken=function(){
    return jwt.sign(this._id.toString(),"E-Commerce App");
}
UserSchema.statics.checkEmailAndPhone=async({email,phoneNumber})=>{
    const checkEmail=await UserModel.findOne({email});
    const checkPhone=await UserModel.findOne({phoneNumber});
    if(checkEmail || checkPhone){
        throw new Error("User already exists!");
    }
    return false;
}
UserSchema.statics.checkEmailAndPassword=async({email,password})=>{
    const findEmail=await UserModel.findOne({email});
    if(!findEmail){
        throw new Error("User doesn't exist!");
    }
    const comparePassword=await bcryptjs.compare(password,findEmail.password);
    if(!comparePassword){
        throw new Error("Invalid password");
    }
    return findEmail;
}
UserSchema.pre("save",function(next){
    const user=this;
    if(!user.isModified("password")){
        return next();
    }
    bcryptjs.genSalt(8,(error,salt)=>{
        if(error){
            return next(error);
        }
        bcryptjs.hash(user.password,salt,(error,hashedpassword)=>{
            if(error){
                return next(error);
            }
            user.password=hashedpassword;
            return next();
        })
    })
})
export const UserModel=mongoose.model("Users",UserSchema);
