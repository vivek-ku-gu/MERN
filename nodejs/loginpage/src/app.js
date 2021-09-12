const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../public/templates/views");

require("./db/conn");
const Register = require("./models/register");
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.render("index");
})
app.get("/register",(req,res)=>{
    res.render("register");
    })

app.post("/register", async (req,res)=>{
       try{
      const registeration = new Register({
          firstname: req.body.firstname,
          lastname: req.body.firstname,
          email: req.body.email,
          gender: req.body.gender,
          city: req.body.firstname,
          password: req.body.password
      })
      const registered = await registeration.save();
      res.status(200).render("index");
       }
       catch(error){
    res.status(404).send(error);
       }
        })
app.post("/index",async(req ,res)=>{
    try{
        const emailid  = req.body.email;
        const password  = req.body.password;
 const usermail = await Register.findOne({email:emailid});
 if(usermail.password=== password){
     res.status(200).render("home");
 }
 else{ res.status(400).send("password is incorrect");}
    }
    catch(error){
   res.status(400).send(error);
    }
})
app.listen(port,()=>{
    console.log(`listening at port no ${port}`);
});