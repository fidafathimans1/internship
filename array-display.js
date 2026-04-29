let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");

fruits.pop("mango");

fruits.forEach(fruit => console.log(fruit));

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase:", upperFruits);

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Filtered:", longFruits);