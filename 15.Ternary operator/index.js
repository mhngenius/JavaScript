//Ternary operator = simplified "if" and "else" statements




let age = 21;
//we write the condition then a "?" then if it was true , then a ":" and after that if it was false.
let message = age >= 18 ? "You are an adult" : "you are a minor!";
console.log(message)

let time = 9;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(greeting)

let isStudent = true;
let message2 = isStudent ? "You are a student" : "You are NOT a student!";
console.log(message2)

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`)