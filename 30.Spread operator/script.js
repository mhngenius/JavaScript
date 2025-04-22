//Spread operator = (...) allows an iterable such as an array or string to be expanded into seperate elements

//1)numbers

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
console.log(maximum);

let minimum = Math.min(...numbers);
console.log(minimum);

//2)strings

let username = "Mahan Mehrabi";

let letters = [...username];
console.log(letters);

let letters2 = [...username].join("-");
console.log(letters2);

let fruits = ["apple", "orange", "banana"];
console.log(fruits)
let vegtables = ["carrot", "celery", "potato"];

let foods = [...fruits, ...vegtables, "eggs", "milk"];
console.log(foods);
