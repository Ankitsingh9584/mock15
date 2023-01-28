const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
require("dotenv").config();
app.use(express.json());
app.use(cors());


const questionRoute=require("./routes/question")



app.use("/question",questionRoute);

app.listen("8080",async()=>{
await mongoose.connect(process.env.MONGODB_URL)
})