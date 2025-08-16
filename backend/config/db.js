import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(`Error. ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;