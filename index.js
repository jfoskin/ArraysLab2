const shoppingList = [];

const addItem = (item) => {
	shoppingList.filter((item) => (!item ? shoppingList.push(item) : ""));
};

const removeLastItem = (item) => shoppingList.pop(item);

const displayList = () => shoppingList.forEach((item) => console.log(item));
