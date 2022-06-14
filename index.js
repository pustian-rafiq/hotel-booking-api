import express  from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";

const app = express();
dotenv.config();

//Connect to database
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect to mongodb.")
    }catch(error){
        throw error;
    } 
}

//Event listener
mongoose.connection.on("disconnected",()=> {
    console.log("Mongodb disconnected");
})
mongoose.connection.on("connected",()=> {
    console.log("Mongodb connected");
})

//connect to backend-run server
app.listen(8800, ()=> {
    connect()
    console.log("Server is running on port 8800")
})
