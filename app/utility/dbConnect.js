import mongoose from "mongoose";

const dbConnect = async(req,res) =>{
    if(mongoose.connection.readyState){
        return mongoose.connection;
    }
    return await mongoose.connect(process.env.MONGO_URI)
}

export default dbConnect;