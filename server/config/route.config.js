import passport from "passport";
import JWT from "passport-jwt";
import {UserModel} from "../database/allModels.js"
const JwtStrategy=JWT.Strategy;
const ExtractJwt=JWT.ExtractJwt;

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ECommerce"
}

export default (passport)=>{
    passport.use(
        new JwtStrategy(
            options,
            async (Jwt_Payload,done)=>{
                try{
                    const isvalidUser=await UserModel.findById(Jwt_Payload.user);
                    if(isvalidUser==null){
                        return done(null,false);
                    }
                    return done(null,isvalidUser);
                }
                catch(error){
                    return done(error);
                }
            }
        )
    )
}