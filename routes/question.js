const express=require("express");
const app=express();
app.use(express.json());


const questionModel=require("../model/questions")


app.post("/",async(req,res)=>{
let {name,category,difficulty,number_of_questions}=req.body;
console.log(category,difficulty)
let res1=await questionModel.find({category:category,difficulty:difficulty});
console.log(res1);

res.send({msg:"ok",data:res1})
})


module.exports=app;