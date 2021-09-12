// schema of database
const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema(
    {
      firstname:{type:String,
       required:true},

       lastname:{type:String,
         required:true},

         date:{type:Date,
         default:Date.now},
         
         email:{
             type:String,
             required:true,
             unique:true
         },

         gender:{
            type:String,
            required:true,

         },
         city:{
            type:String,
            required:true,  
         },
         password:{
            type:String,
            required:true, 
            unique:true 
         }
     })

     // // mongoose.Collection creation
     const Register = mongoose.model("Register",employeeSchema);
     module.exports=Register;
  