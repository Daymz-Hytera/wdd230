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
const currentdate =  year;
document.getElementById('currentdate').textContent = currentdate;

const oLastModif = new Date(document.lastModified);
document.getElementById("lastmod").textContent = oLastModif;