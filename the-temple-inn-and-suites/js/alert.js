/* Alert */
function displayResults(weatherData) {
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

}