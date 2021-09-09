
const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength: 3
    },
    email : {
        type:String,
        required:true,
        unique:[ true, "email already exist"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw  new Error("Invalid Email");
            }
        }
    },
    phone :{
        type:Number,
        required : true,
        unique:[ true, "phone number already exist"],
        minlength:10,
        maxlength:12,
        validate(value){
            if(!validator.isMobilePhone(value))
            {
                throw  new Error("Invalid number");
            }
        }

    }
});
// mongoose.Collection
const Students = new mongoose.model("Students",studentSchema);
module.exports =Students;