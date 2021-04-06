
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi= {
    key:"f20c87aea32e90be37c3b8a36ef2d19d",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox=document.getElementById('input-box');

// Event Listner Function on keypress

searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReaport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
   
});

// Get weather Report

function getWeatherReaport(city){
    fetch(`${ weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//show weather report

function showWeatherReport(weather){
    console.log(weather);
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`; 

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;
    
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c(min) / ${Math.ceil(weather.main.temp_max)}&deg;c (max)`;

    let weatherType =  document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date= document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'clear'){
        document.body.style.backgroundImage= "url('images/clear.jpg')";

    }else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('images/Clouds.jpg')";
    
    }else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/Rain.jpg')";

     } else if(weatherType.textContent == 'Snow'){
            document.body.style.backgroundImage = "url('images/Snow.jpg')";

      } else if(weatherType.textContent == 'Thunderstrom'){
                document.body.style.backgroundImage = "url('images/Thunderstrom.jpg')";
       
            }  else if(weatherType.textContent == 'Haze'){
                    document.body.style.backgroundImage = "url('images/clear.jpg')";

        }

}
// Date ma1n

    function dateManage(dateArg){
        let days=["Sunday","Monday" , "Tuesday", "Wednesdy", "Thursday", "Friday", "Saturday"];

        let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November",
                       "December" ];

        let year = dateArg.getFullYear();
        let month = months[dateArg.getMonth()];
        let date = dateArg.getDate();
        let day = days[dateArg.getDay()];
        
        return `${date} ${month} (${day}), ${year}`;
    }



