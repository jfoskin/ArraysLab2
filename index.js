const shoppingList = [];

const addItem = (item) => {
	let itemInArr = shoppingList.includes(item);
	!itemInArr ? shoppingList.push(item) : "";
};

const removeLastItem = (item) => shoppingList.pop(item);

const displayList = () => shoppingList.forEach((item) => console.log(item));

const filterItems = (term) => {
	term = term.toLowerCase();
};

let cart = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");

addItemButton.addEventListener("click", function () {
	let item = itemInput.value;

	if (item === "") {
		alert("Please enter an item.");
		return;
	}

	cart.push(item); // Add item to cart array
	renderCart();
	itemInput.value = ""; // Clear the input field
});

removeItemButton.addEventListener("click", function () {
	if (cart.length === 0) {
		alert("Nothing to remove");
	}

	cart.pop(); // Remove last item from cart array
	renderCart();
});

function renderCart() {
	cartList.innerHTML = ""; // Clear existing list
	for (let i = 0; i < cart.length; i++) {
		let listItem = document.createElement("li");
		listItem.innerText = cart[i];
		cartList.appendChild(listItem);
	}
}
