// Task 1: Array Manipulation Basics

const shoppingList = [];

const addItem = (item) => {
	let itemInArr = shoppingList.includes(item);
	!itemInArr ? shoppingList.push(item) : "";
};

const removeLastItem = (item) => shoppingList.pop(item);

const theList = () => shoppingList.forEach((item) => console.log(item));

//Task 2: Filter and Search an Array

const filterItems = (term) => {
	let found = shoppingList.filter((item) =>
		item.toLowerCase().includes(term.toLowerCase()),
	);
	return found;
};

// Task 3: Render the List in the Browser
let list = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let displayList = document.getElementById("list");

addItemButton.addEventListener("click", function () {
	let item = itemInput.value;

	if (item === "") {
		alert("Please enter an item.");
		return;
	}

	list.push(item); // Add item to cart array
	renderList();
	itemInput.value = ""; // Clear the input field
});

removeItemButton.addEventListener("click", function () {
	if (list.length === 0) {
		alert("Nothing to remove");
	}

	list.pop(); // Remove last item from cart array
	renderList();
});

function renderList() {
	displayList.innerHTML = ""; // Clear existing list
	for (let i = 0; i < list.length; i++) {
		let listItem = document.createElement("li");
		listItem.innerText = list[i];
		displayList.appendChild(listItem);
	}
}

//filter and addItem function test

// addItem("apple");
// addItem("applesauce");
// addItem("pineapple");
// addItem("cherries");
// addItem("orange");
// addItem("apple pie");
// addItem("apple juice");
// addItem("apple jacks");

// console.log(shoppingList);
// console.log(filterItems("apple"));
