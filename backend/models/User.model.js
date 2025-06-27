
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
})

const UserModel = mongoose.model('Users',UserSchema)
export default UserModel;