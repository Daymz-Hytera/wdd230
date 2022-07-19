//Weather API

// select HTML elements in the document
const tempIn = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const condition  = document.querySelector("#condition");
const weatherIcon = document.querySelector("#weatherIcon");
const windSpeedIn = document.querySelector("#windSpeed");
const alertInfo = document.querySelector("#alertInfo");

const day1temp = document.querySelector("#day1temp")
const day2temp = document.querySelector("#day2temp")
const day3temp = document.querySelector("#day3temp")

const day1 = document.querySelector("#day1")
const day2 = document.querySelector("#day2")
const day3 = document.querySelector("#day3")

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=39.415352&lon=-81.454842&exclude=hourly,minutely&appid=00ea60318b73a6283c6a3e0101a40d75&units=imperial"
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          console.log(data); // this is for testing the call
          displayResults(data);
          calWindChill(tempIn, windSpeedIn);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function  displayResults(weatherData) {

    const alertOut = document.querySelector('.weatherAlert')
    let alertIn = weatherData.alerts

    console.log(typeof alertIn)
    console.log(alertIn)
    
    
   
    if (typeof (alertIn) === "undefined"){
        alertOut.style.display = 'none'}
    else {
        alertInfo.innerHTML = `${alertIn[0].event}`;
        const alertBtn = document.querySelector('.alertBtn');
        alertBtn.addEventListener('click', () => {alertOut.classList.toggle('closed')}, false);}
  

    
    tempIn.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
    day1temp.innerHTML = `${weatherData.daily[1].temp.day.toFixed(0)}`
    day2temp.innerHTML = `${weatherData.daily[2].temp.day.toFixed(0)}`
    day3temp.innerHTML = `${weatherData.daily[3].temp.day.toFixed(0)}`
    
    day1.innerHTML = `${conversion(1)}: ` 
    day2.innerHTML = `${conversion(2)}: ` 
    day3.innerHTML = `${conversion(3)}: `    


    function conversion (number){
    //console.log(weatherData.daily[number].dt)
    let tomorrow = weatherData.daily[number].dt * 1000
    //console.log(tomorrow)

    let dateOjb = new Date(tomorrow)
    //console.log(dateOjb)

    let weekday = dateOjb.toLocaleString("en-US", {weekday: "long"})
    //console.log(weekday)
    return weekday
}

    tempIn.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `${weatherData.current.humidity.toFixed(0)}`;
    windSpeedIn.innerHTML = `${weatherData.current.wind_speed}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    condition.innerHTML = weatherData.weather[0].description;

    
    // CAPLITALIZE each word in the description
    const lower = condition.innerHTML.toLowerCase();
    const str = lower.split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    let word = str.join(' ');
    //

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', word);
    captionDesc.textContent = word;
  
}



/** To Calculate Windchill **/
/*Get the temp from the page and make it into a number*/
var temperature = parseFloat(document.querySelector('#temp').textContent)
console.log(temperature)

/*Get the windSpeed from the page and make it into a number*/
var windSpeed = parseFloat(document.querySelector('#windSpeed').textContent)
console.log(windSpeed)

/*define a function to calculat the windSpeed*/
function calWindChill(tempIn, windSpeedIn){

    var windChill = 35.74 + 0.6215*tempIn - (35.75*windSpeedIn**0.16) + 0.4275 * tempIn * windSpeedIn**0.16
    return windChill
}

/*call the function if conditions are met, else give 'NA'*/
var windChillValue = ''
if (tempIn <= 60 && windSpeedIn >= 3) {windChillValue = (calWindChill(tempIn, windSpeedIn)).toFixed(2)}
else {windChillValue = "N/A"}
console.log(windChillValue)


/*place the wind chill value or N/A onto the page.*/
document.querySelector('#windChill').textContent = windChillValue
