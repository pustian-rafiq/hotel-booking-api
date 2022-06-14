import express  from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";

//import routes here
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import hotelsRoutes from "./routes/hotels.js"
import roomsRoutes from "./routes/rooms.js"

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
//Use this middleware for sending json object
app.use(express.json())
//use middleware
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);

//Create api
app.get('/',(req,res)=> {
    res.send("Hello")
})
//connect to backend-run server
app.listen(8800, ()=> {
    connect()
    console.log("Server is running on port 8800")
})
