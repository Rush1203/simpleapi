

import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import db_connection from "./database/db_connection.js"
import UserRouter from './routes/User.route.js'

dotenv.config()

db_connection()

const app = express()

//middlewares
app.use(express.json())
const corsOption ={
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOption))
app.use(bodyParser.urlencoded({extended:true}))

//api
app.use('/api',UserRouter)



//server listening on port
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})