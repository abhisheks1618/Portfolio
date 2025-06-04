let apiKey="8b19706bf30ed5d121dd9ca74c61beb0";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");
let weatherIcon=document.querySelector(".icon")
let weatherImg=document.querySelector(".weather-img")


async function checkWeather(city) {
    const resp=await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await resp.json();

    console.log(data);

    function convertTimestamp(timestamp, timezoneOffset) {
        const localTimestamp = (timestamp + timezoneOffset) * 1000; 
        const date = new Date(localTimestamp);
        return date.toLocaleTimeString(); 
      }

    document.querySelector(".loc").innerHTML = data.name;
    document.querySelector(".deg").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".pre").innerHTML = "Pressure:" + " " +data.main.pressure + "Pa";
    document.querySelector(".status").innerHTML= data.weather[0].description;
    document.querySelector(".feels").innerHTML = "Feels Like:" + " " + Math.round(data.main.feels_like) + "°C";
    document.querySelector(".mint").innerHTML = "Min Temp:" + " " + Math.round(data.main.temp_min) + "°C";
    document.querySelector(".maxt").innerHTML = "Max Temp:" + " " + Math.round(data.main.temp_max) + "°C";
    document.querySelector(".humi").innerHTML = "Humidity:" + " " + Math.round(data.main.humidity) + "g/m3";
    document.querySelector(".seal").innerHTML = "Sea Level:" + " " + Math.round(data.main.sea_level) + "meters";
    document.querySelector(".grndl").innerHTML = "Ground Level:" + " " + Math.round(data.main.grnd_level) + "meters";
    document.querySelector(".long").innerHTML = data.coord.lon + "°" ;
    document.querySelector(".lat").innerHTML = data.coord.lat + "°" ;
    document.querySelector(".sunr").innerHTML =  convertTimestamp(data.sys.sunrise, data.timezone)  ;
    document.querySelector(".suns").innerHTML =  convertTimestamp(data.sys.sunset, data.timezone)  ;
    
if(data.weather[0].main==="Clouds"){
    weatherIcon.src="./weather conditions/cloud.png"
}else if(data.weather[0].main==="Clear"){
    weatherIcon.src="./Weather conditions/clear_day.png"
}else if(data.weather[0].main==="Scattered clouds"){
    weatherIcon.src="./Weather conditions/partly_cloudy.png"
}else if(data.weather[0].main==="Broken clouds"){
    weatherIcon.src="./Weather conditions/partly_cloudy.png"
}else if(data.weather[0].main==="Rain"){
    weatherIcon.src="./Weather conditions/rainy_light.png"
}else if(data.weather[0].main==="rain"){
    weatherIcon.src="./Weather conditions/rainy.png"
}else if(data.weather[0].main==="Thunderstorm"){
    weatherIcon.src="./Weather conditions/thunderstorm.png"
}else if(data.weather[0].main==="Snow"){
    weatherIcon.src="./Weather conditions/ac.png"
}else{
    weatherIcon.src="./Weather conditions/water.png"
};

if(data.weather[0].main==="Clouds"){
    weatherImg.src="./Images/cloudy.jpg"
}else if(data.weather[0].main==="Clear"){
    weatherIcon.src="./Images/clear sky.jpg"
}else if(data.weather[0].main==="Scattered clouds"){
    weatherImg.src="./Images/cloudy.jpg"
}else if(data.weather[0].main==="Broken clouds"){
    weatherImg.src="./Images/cloudy.jpg"
}else if(data.weather[0].main==="Rain"){
    weatherImg.src="./Images/moderate rain.jpg"
}else if(data.weather[0].main==="Thunderstorm"){
    weatherImg.src="./Images/Thunderstorm.jpg"
}else if(data.weather[0].main==="Snow"){
    weatherImg.src="./Images/snow.jpg"
}else{
    weatherImg.src="./Images/misty.jpg"
};
    
}   

searchBtn=addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

