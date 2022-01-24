// Importing Google Passport
import GooglePassport from "passport-google-oauth20";

// Importing UserModel
import {UserModel} from "../database/allModels.js";

// Initialising new google auth strategy;
const GoogleStrategy=GooglePassport.Strategy;

// Using Google Strategy for google authentication
export default (passport)=>{
    passport.use(
        new GoogleStrategy(
            {
                clientID:process.env.GOOGLE_CLIENT_ID,
                clientSecret:process.env.GOOGLE_CLIENT_SECRET,
                callbackURL:"http://localhost:4000/auth/google/callback"
            },
            async (accessToken,refreshToken,profile,done)=>{
                const user={
                    fullname:profile.displayName,
                    email:profile.emails[0].value,
                    photo:profile.photos[0].value
                }
                try{
                    const findUser=await UserModel.findOne({email:user.email});
                    if(findUser){
                        const token=findUser.generateJwtToken();
                        return done(null,{token,findUser});
                    }
                    else{
                        const createUser=await UserModel.create(user);
                        const token=createUser.generateJwtToken();
                        return done(null,{token,createUser});
                    }
                }
                catch(error){
                    done(error,null);
                }
            }
        )
    )
    passport.serializeUser((data,done)=>done(null,{...data}));
    passport.deserializeUser((id,done)=>done(null,id));
}