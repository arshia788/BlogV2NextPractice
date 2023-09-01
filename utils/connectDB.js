import mongoose from "mongoose";


const connectDB=async()=>{
    if(mongoose.connections[0].readyState)return;
    console.log("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to DB");
}

export default connectDB;