const API_KEY = "58acad37035ee13e9a2bde0662e10d30";

function geoOk(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("you live it",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    fetch(url).then(Response => Response.json().then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.sys.country; 
        weather.innerText = data.weather[0].main;}));
}
function geoerror()
{
    alert("Can't find you, No waether for you.")
}

navigator.geolocation.getCurrentPosition(geoOk,geoerror);
 