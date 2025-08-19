// Destructuring = extract values from arrays and objects,
//   then assign them to varables in a convenient way
//   [] = to perform array destructuring
// { } = to perform onject destructuring
// 5 examples

// EXAMPLE 1 ::: Swap the value of 2 variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//EXAMPLE 2 ::: Swap 2 elements in an array

const colors = ["Red", "Green", "Blue", "Black", "White"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//EXAMPLE 3 ::: Assign array elements to variables

const cars = ["Ferrari", "Aston-Martin", "Nissan", "Jaguar", "Peugeot"];

const [firstCar, secondCar, thirdCar, ...extraCars] = cars;

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
console.log(extraCars);

//EXAMPLE 4 ::: Extract values from objects

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
};

const { firstName: firstName1, lastName: lastName1, age: age1, job: job1 } = person1;
console.log(firstName1);
console.log(lastName1);
console.log(age1);
console.log(job1);

const { firstName: firstName2, lastName: lastName2, age: age2, job: job2 = "Unemployed" } = person2;
console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);

//EXAMPLE 5 ::: Destructure in function parameters

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`name:${firstName} ${lastName}`);
  console.log(`age:${age}`);
  console.log(`job:${job}`);
}

const person3 = {
  firstName: "Squidward",
  lastName: "Tentacles",
  age: 35,
  job: "Cashier",
}

const person4 = {
  firstName: "Sandy",
  lastName: "Chicks",
  age: 24,
}

displayPerson(person3);
displayPerson(person4);