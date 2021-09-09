const mongoose = require("mongoose");

// connection and creation of database
mongoose.connect("mongodb://localhost:27017/blogdb").then(() => console.log("connection successful")).catch((err)=>console.log(err));

// schema of database
const blogschema = new mongoose.Schema(
       {
         title:{type:String,
          required:true},
          blog:{type:String,
            required:true},
            date:{type:Date,
            default:Date.now}   
        })

        // mongoose.Collection creation
        const Blogs = mongoose.model("Blogs",blogschema);

        //create document
        const createDocument = async ()=>{
            try{
                const blog = new Blogs({
                    title:"hello",
                        blog:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"          
                })
               const saved= await blog.save();
               console.log(saved);
            }
            catch(err){
                console.log(err);
            }
        
        }
        createDocument();
        
        