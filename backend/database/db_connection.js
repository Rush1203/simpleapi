
import mongoose, { Mongoose } from "mongoose";

const db_connection = ()=>{
    try {
        mongoose.connect(process.env.DATABASE_CONNECTION)
        console.log("Database connected");
    } catch (error) {
        
    }
}

export default db_connection;