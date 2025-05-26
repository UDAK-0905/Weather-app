const apiKey = "ee14cf07af19d0efed27da36482f9932";

async function getWeather(){
    const city = document.getElementById("cityInput").value.trim();
    console.log("City:", city);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log("URL:", url);

    const res = await fetch(url);
    const data = await res.json();
    console.log("API Response:", data);

    if(data.cod == 200){
        document.getElementById("weatherResult").innerHTML = `
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
        `;
    }
    else{
        document.getElementById("weatherResult").innerHTML = `<p>City not found 😓</p>`;
    }
}