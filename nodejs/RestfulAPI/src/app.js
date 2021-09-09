const express = require("express");
const app = express();
require("./db/conn");
const Students = require("./models/student")
const mongoose = require("mongoose");
const validator = require("validator");
const port = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("hello from the other side");
});
// app.post("/student",(req,res)=>{
    
//     const user = new Students(req.body);
//     user.save().then(()=>{res.send("daata saved");}).catch((e)=>{res.status(400).send(e)});
// });
app.post("/student",async(req,res)=>{
    try{ const user =  new Students(req.body);
        const create =await user.save();
        res.status(200).send(create);}
    catch(e){
        res.status(400).send(e);
    }
   
});
app.listen(port,()=>{
    console.log(`running at port no ${port}`);
});