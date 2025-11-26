var btn = document.getElementById("btn");
var card = document.getElementById("card");

btn.addEventListener("click",() => {
    var search = document.getElementById("search").value;


if (search === "") {
    alert("Please enter a city name.");
    return;
}

document.getElementById("location").textContent = "Loading...";
document.getElementById("temp").textContent ="";
document.getElementById("humidity").textContent ="";
document.getElementById("wind").textContent ="";

 fetchdata(search);
});

const fetchdata = (city) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=acf73cfc14d64ab4a6b61212250307&q=${city}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("city not found");
        }
        return response.json();
    })
    .then((apidata) => {
        console.log(apidata)
        document.getElementById("location").textContent = `City: ${apidata.location.name}`;
        document.getElementById("temp").textContent = `Tempreture: ${apidata.current.temp_c} °c`;
        document.getElementById("humidity").textContent = `Humidity: ${apidata.current.humidity} %`;
        document.getElementById("wind").textContent = `Wind: ${apidata.current.wind_kph} kph`;
    })
    .catch((error) => {
        document.getElementById("location").textContent = "Error: " + error.massage;
        document.getElementById("temp").textContent = "";
        document.getElementById("humidity").textContent = "";
        document.getElementById("wind").textContent = "";
        console.error("Fetch error:", error);
    });
};