import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
        user:{type:String},
        contact:{type:String},
        email:{type:String}
},{
    timestamps:true
})

module.exports = mongoose.model.User || mongoose.model("User",UserSchema)