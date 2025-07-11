import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connectDB= async () =>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected`);
        
    } catch (error) {
        console.error('MongoDB connection failed');
        process.exit(1);
        
    }
}
