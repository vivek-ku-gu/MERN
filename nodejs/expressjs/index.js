const express = require("express");
const app = express();
app.get("/",(req,res)=>{
res.send("hello from the other side");
});
app.listen(8000,()=>{
    console.log("listening at 8000");
})