
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${year}`;
// using getElementById
document.getElementById("currentdate").textContent = fulldate;

// ****************************
// using querySelector
const date2 = document.querySelector('#currentdate2');

try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}

var
  nLastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
  nLastModif = Date.parse(document.lastModified);
document.getElementById("lastmod").textContent = nLastModif;
if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
  document.cookie = "last_modif=" + Date.now() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" + location.pathname;

  if (isFinite(nLastVisit)) {
    alert("This page has been changed!");
  }
}