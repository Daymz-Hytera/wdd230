
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


//const formatdate =`${d.getMonth()} / ${d.getDate()} / ${year} ${d.getTime()}`;

const oLastModif = new Date(document.lastModified);
document.getElementById("lastmod").textContent = oLastModif;