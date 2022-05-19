const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	const myItem = input.value;
	input.value = "";
	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");
	listBtn.setAttribute("id", "add");
	listItem.appendChild(listText);
	listText.textContent = myItem;
	listItem.appendChild(listBtn);

	listBtn.textContent = "❌";
	list.appendChild(listItem);
	listBtn.addEventListener("click", () => {
		list.removeChild(listItem);
	});
	let el = document.getElementById("add");
	console.log(el.ariaLabel); // "Close"
	el.ariaLabel = "Chapters: " + myItem;
	console.log(el.ariaLabel); // "Close dialog"
	input.focus();
});
