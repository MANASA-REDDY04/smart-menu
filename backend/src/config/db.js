import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async (req,res) => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`MongoDB connected to host: ${connectionInstance.connection.host}`)
    } catch (error) {
        res.status(500).json({
            message: 'Cannot connect to database'
        })
    }
}

export default connectDB
