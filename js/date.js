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
const currentdate = `${dayName}  ${todaysdate.getDate()} ${monthName} ${year}`;
document.getElementById('currentdate').textContent = currentdate;
const yeardate = `${year}`;
// using getElementById
document.getElementById("yeardate").textContent = yeardate;

//const formatdate =`${d.getMonth()} / ${d.getDate()} / ${year} ${d.getTime()}`;

const oLastModif = new Date(document.lastModified);
document.getElementById("lastmod").textContent = oLastModif;