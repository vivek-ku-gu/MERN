const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const Blogs = require("./db/registers.js");
const process = require("process");
const port = process.env.PORT || 3000 ; 
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
require("./db/conn.js");
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/blog",(req,res)=>{
    // Blogs.find({},function(blogs){
    //     console.log(blogs);
    //     res.render("blog",{
    //         blog:blogs
            
    //     });    
    // })
    res.render("blog");
})
app.get("/addblog",(req,res)=>{
    res.render("addblog");
})
app.post("/addblog",async (req,res)=>{
    try{
  const blog1 = new Blogs({
      title:req.body.title,
      blog:req.body.blog
 
  })
   const registerd =await blog1.save();
   console.log(registerd);
   res.status(201).render("addblog");
    }catch(e){console.log("post in addblog not working");} 
})
app.listen(port,()=>{
    console.log("connection succesful for port no 3000");
})

        