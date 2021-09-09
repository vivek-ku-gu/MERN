const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homefile= fs.readFileSync("home.html", "utf-8");
const replaceVal= (tempval,orgval)=>{
 let temperature = tempval.replace("{%temp%}",(orgval.main.temp_max -273.15).toFixed(2));
  temperature = tempval.replace("{%tempmin%}",(orgval.main.temp_min -273.15).toFixed(2));
 temperature = temperature.replace("{%tempmax%}",(orgval.main.temp_max-273.15).toFixed(2));
 temperature = temperature.replace("{%humidity%}",(orgval.main.humidity));
 temperature = temperature.replace("{%pressure%}",(orgval.main.pressure));
 temperature = temperature.replace("{%country%}",orgval.sys.country);
 temperature = temperature.replace("{%location%}",orgval.name);

return temperature;
};
const server = http.createServer((req,res)=>
{
if(req.url == "/")
{
    requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=96c7dc880e5a1fef2c5110611e4a5fc1")
    .on('data', (chunk)=> {
        const obj = JSON.parse(chunk);
        const arrofobj = [obj];
        const realtimedata = arrofobj.map((val)=>
       replaceVal(homefile,val)).join("");
        // console.log(realtimedata.join(""));
        res.write(realtimedata);
      })
      .on('end',  (err) =>{
        if (err) return console.log('connection closed due to errors', err);
       
      res.end();
      });
}
});
server.listen(8000,"127.0.0.1");