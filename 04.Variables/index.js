//Basically we have these three types of variable in java script (The most important ones):


//1) (number) Variables

//To define a variable we put "let" before the variable name
let x;
x = 100;
console.log(x);

let x2 = 123;
console.log(x2);

let age = 17;
let price = 99.99;
let gpa = 2.5;


//To use variables in sentences we put ${} and then we insert the variable name in the curly brackets
console.log(`I am ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);


//2) string variables

let firstName = "firstGuy";
let favoriteFood = "pizza";
let email = "sth123@gmail.com"

console.log(`My name is ${firstName}`);
console.log(`My favourite food is ${favoriteFood}`);
console.log(`Your email is ${email}`);


//3) boolean variables


//Boolean variables return "true" or "false" 

let forSale = true;
let isOnline = false;
let isStudent = true;


console.log(`Is this car for sale ? ${forSale}`);
console.log(`secondGuy is online : ${online}`);
console.log(`Enrolled? : ${isStudent}`);