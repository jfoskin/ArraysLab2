const shoppingList = [];

const addItem = (item) => {
	let itemInArr = shoppingList.includes(item);
	!itemInArr ? shoppingList.push(item) : "";
};

const removeLastItem = (item) => shoppingList.pop(item);

const displayList = () => shoppingList.forEach((item) => console.log(item));
