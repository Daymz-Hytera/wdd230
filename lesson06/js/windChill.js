/**/
/*Get the temp from the page and make it into a number*/
var temperature = parseFloat(document.querySelector('#temp').textContent)
console.log(temperature)

/*Get the windSpeed from the page and make it into a number*/
var windSpeed = parseFloat(document.querySelector('#windSpeed').textContent)
console.log(windSpeed)

/*define a function to calculat the windSpeed*/
function calWindChill(temperature, windSpeed){

    var windChill = 35.74 + 0.6215*temperature - (35.75*windSpeed**0.16) + 0.4275 * temperature * windSpeed**0.16
    return windChill
}

/*call the function if conditions are met, else give 'NA'*/
var windChillValue = ''
if (temperature <= 50 && windSpeed >= 3) {windChillValue = (calWindChill(temperature, windSpeed)).toFixed(2)}
else {windChillValue = "N/A"}
console.log(windChillValue)


/*place the wind chill value or N/A onto the page.*/
document.querySelector('#windChill').textContent = windChillValue
