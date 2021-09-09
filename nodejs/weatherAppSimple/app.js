const temp = document.getElementById("temp");
const summay = document.getElementById("summary");
const timezone = document.getElementById("timezone");
window.addEventListener("load",()=>{
    let long;
    let lat;
   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long= position.coords.longitude;
            // (position.coords.longitude).toFixed(1);
            lat = position.coords.latitude;
            // (position.coords.latitude).toFixed(1);
            console.log(long);
            console.log(lat);
            // const proxy = `https://cors-anywhere.herokuapp.com`;
            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=96c7dc880e5a1fef2c5110611e4a5fc1`;
            fetch(api).then(respone=>{
                return respone.json();
            }).then(data =>{
                console.log(data);
                temp.innerText = ((data.current.temp)-273).toFixed(2);
                summay.innerText = data.current.weather[0].description;
                timezone.innerText= data.timezone;
            });
        });
       
    }
});