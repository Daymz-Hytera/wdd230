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
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
//const currentdate = `${dayName}  ${todaysdate.getDate()} ${monthName} ${year}`;
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName +", " + year;
document.getElementById('currentdate').textContent = currentdate;
const yeardate = year;
// using getElementById
document.getElementById("yeardate").textContent = yeardate;

//const formatdate =`${d.getMonth()} / ${d.getDate()} / ${year} ${d.getTime()}`;

//const oLastModif = new Date(document.lastModified);
//document.getElementById("lastmod").textContent = oLastModif;

alert(document.lastModified);
let oLastModif = new Date(document.lastModified);
//let nLastModif = Date.parse(document.lastModified);

var
  nLastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
  nLastModif = Date.parse(document.lastModified);

  document.getElementById("lastmod").textContent = nLastModif

if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
  document.cookie = "last_modif=" + Date.now() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" + location.pathname;

  if (isFinite(nLastVisit)) {
    alert("This page has been changed!");
  }
}