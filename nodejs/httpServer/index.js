const http= require("http");
const server =  http.createServer((req,res)=>{
    if(req.url== "/")
    {
        res.end("hello world");
    }
    else if(req.url== "/about")
    {
        res.end("hello world about");
    }
    else if(req.url== "/contact")
    {
        res.end("hello world contact ");
    }
    else
    {  res.writeHead(404,{"Content-type":"text/html"});
        res.end("404 error");
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
} );