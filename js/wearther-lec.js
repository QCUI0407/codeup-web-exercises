let lon, lat;
let currentCity = document.querySelectorAll('.currentCity')
let dateShow = document.querySelectorAll('.dateShow')
let temperature = document.querySelectorAll(".temp");
let summary = document.querySelectorAll(".summary");
let humidity = document.querySelectorAll(".humidity");
let wind = document.querySelectorAll(".wind");
let pressure = document.querySelectorAll(".pressure");
let icon = document.querySelectorAll(".icon");
//Current city weather
window.addEventListener('load',() =>{
    // console.log(dateShow);
    // console.log(summary);
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            lon = position.coords.longitude;
            console.log(lon);
            lat = position.coords.latitude;
            console.log(lat);
            let web = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + OPEN_WEATHER_APPID +"&units=imperial";
            fetch(web).then(
                (response)=>{
                    return response.json();
                }
            ).then((data)=>{
                console.log(data);
                currentCity[0].textContent = "Current city: "+data.city.name;
                let count = 0;
                for(let i=0; i < 40;i+=8){
                    dateShow[count].textContent = data.list[i].dt_txt;
                    temperature[count].textContent = data.list[i].main.temp+" °F";
                    summary[count].textContent = data.list[i].weather[0].description.toUpperCase();
                    humidity[count].textContent = "Humidity: " + data.list[i].main.humidity +"%";
                    wind[count].textContent = "Wind: " + data.list[i].wind.speed;
                    pressure[count].textContent = "Pressure: "+ data.list[i].main.pressure;
                    let iconShow = data.list[i].weather[0].icon;
                    icon[count].innerHTML =
                        `<img src=" http://openweathermap.org/img/wn/${iconShow}.png" style= 'height:5rem'/>`;
                    count++;
                }
                mapboxgl.accessToken = MAPBOX_TOKEN;
                const map = new mapboxgl.Map({
                    container: 'map', // container ID
                    style: 'mapbox://styles/mapbox/streets-v9', // style URL
                    center: [lon,lat],
                    zoom: 10,
                });
            });
        });
    }
})
//------------------------map--------------//
$('#search-btn').click(function() {
    alert("wrong")
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map1 = new mapboxgl.Map({
        container: 'map1', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
        center: [-98.4916, 29.4252],
        zoom: 10,
    });

});
