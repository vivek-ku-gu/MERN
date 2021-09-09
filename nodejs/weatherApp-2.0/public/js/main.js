
const submit = document.getElementById('search_btn');
const searchfield = document.getElementById('cityname');
const searchres = document.getElementsByClassName('data_hide');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const getinfo =  async (event) =>{
event.preventDefault();
let searchval = searchfield.value;
if(searchval === ""){
    searchres[0].style.cssText= "visibility: visible;   font-size: 40px; font-style: oblique";
    searchres[0].innerHTML="Please Enter the name of the city"; 
}
else{
    // const proxy = `https://cors-anywhere.herokuapp.com`;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${searchval}&units=metric&appid=96c7dc880e5a1fef2c5110611e4a5fc1`;
    try{    
        
        // fetch(url).then(response =>{
        //  const data=  response.json();
        //    console.log(data);
        // })
        // .catch(error =>{
        //     console.log(error);
        // });

        
        const response = await fetch(url);    
        console.log(response);
       
        const data =  await response.json();
      console.log(data);
        const arrdata= [data];
        console.log(arrdata);
      
        temp.innerText=(arrdata[0].main.temp);
        city.innerText=searchval;   
        searchres[0].style.cssText= "visibility: visible";   
    }
    catch(e){
        searchres[0].style.cssText= "visibility: visible;font-size: 40px; font-style: oblique";
        searchres[0].innerText=`Enter the correct name of the city`;
        console.log(e);
    }   
}
}
submit.addEventListener('click',getinfo);