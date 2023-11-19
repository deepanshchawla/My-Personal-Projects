// console.log("hello ji deepansh chawla")
// const apikey = "98278357c31753e7077ebe656477f2bc";

// async function renderWeatherDetails(data){
//     let newpara = document.createElement('p');
//     newpara.textContent = `${data?.main?.temp.toFixed(2)} C`;
//     newpara.style.fontWeight = "bold";
//     document.body.appendChild(newpara); 
// }

// async function fetchWeatherDetails(){
//     try{
//         let city = "goa";

//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
//         const data = await response.json();

//         console.log("weather data -> ", data); 
//         renderWeatherDetails(data_ans);
//     }

//     catch(err){
//         console.log(err);
//     }
// }

// async function getCustomWeatherDetails(){
//     try{
//         let latitude = 15.6333;
//         let longitude = 18.3333;

//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`);

//         let data_ans = await result.json();

//         console.log(data_ans);

//         renderWeatherDetails(data_ans);
//     }

//     catch(err){
//         console.log(err);
//     }
// }

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");

const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const grantAccessButton = document.querySelector("[data-grantAccess]");

//initially need variables
const apikey = "98278357c31753e7077ebe656477f2bc";
let currentTab = userTab;
currentTab.classList.add("current-tab");
getfromSessionStorage();

let renderWeatherInfo = (data)=>{
    let cityName = document.querySelector("[data-cityName]");
    let countryIcon = document.querySelector("[data-countryIcon]");
    let description = document.querySelector("[data-weatherDesc]");
    let weatherIcon = document.querySelector("[data-weatherIcon]");
    let temperature = document.querySelector("[data-temp]");
    let windspeed = document.querySelector("[data-windspeed]");
    let humidity = document.querySelector("[data-humidity]");
    let cloudiness = document.querySelector("[data-cloudiness]");

    //fetch values from data object and putting values in the ui
    cityName.innerText = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    description.innerText = data?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    
    temperature.innerText = data?.main?.temp;
    windspeed.innerText = data?.wind?.speed;
    humidity.innerText = data?.main?.humidity;
    cloudiness.innerText = data?.clouds?.all;
}

async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} = coordinates;
    //make grant access container invisible
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try{
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`);
        let data = await result.json();
        console.log(data);
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }

    catch(e){
        loadingScreen.classList.remove("active");
        //here we have to add 404 not found

    }
}

//check if coordinates are present in the session storage/local storage
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");

    if(!localCoordinates){
        //agar local coordinates nhi mile
        grantAccessContainer.classList.add("active");
    }

    else{
        // userInfoContainer.classList.add("active");
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

function switchTab(e){
    let clickedTab = e.target;
    if(clickedTab == currentTab){
        return;
    }

    else{
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }

        else{
            //search vale tab pr active hai matlab search tab content visible hai
            //search mai se active hata ke we have to add active into the 
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");

            //check coordinates of lat and lon form the local storage if we already have them then we will display the user weather
            //otherwise we will display the grant access and then we will receive the current coordinates and now we will display the user weather
            getfromSessionStorage();
        }
    }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude, 
        lon: position.coords.longitude
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    else{
        // show an alert for no geolocation support from your system
    }
}



userTab.addEventListener('click', switchTab);
searchTab.addEventListener('click', switchTab);
grantAccessButton.addEventListener('click',getLocation);

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === ""){
        return;
    }

    else{
        fetchSearchWeatherInfo(cityName);
    }
});

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
        let data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(e){

    }
}