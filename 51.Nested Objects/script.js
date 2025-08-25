// nested objects = objects inside of other objects
//                 allows you to represent more complex data structurs
//                 child objects is enclosed by a parent object

//                  person{Address{ } , ContactInfo{ } }
//                  shoppingCart{keyboard{ } , mouse{ } , monitor }

const person = {
  fullName: "SpongeBob Squarepants", // property of type string
  age: 30,                           // property of type number
  isStudent: true,                   // property of type boolean
  hobbies: ["karate", "jellyfishing", "cooking"], // array inside an object
  address: {                         // nested object (child object)
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water"
  }
}

// Accessing object properties using dot notation
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);

// Accessing array elements using index
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

// Accessing the nested object directly
console.log(person.address);

// Looping through properties of an object using for...in
for (const property in person.address) {
  console.log(person.address[property]);
  // bracket notation is useful here since property is a variable
}

// --------------------------- CLASSES --------------------------------
// Classes = blueprints for creating objects (introduced in ES6).
// A class can contain properties and methods. 
// "constructor" is a special method that runs automatically when an object is created.

class Person {
  constructor(name, age, ...address) {
    // "..." is the rest operator = collects remaining arguments into an array
    this.name = name;      // assign argument to object property
    this.age = age;
    this.address = new Address(...address);
    // spread operator "..." = expands the array back into individual arguments
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

// Creating new Person objects
const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Water");
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Water");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Water");

// Accessing class properties
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);           // full Address object
console.log(person1.address.country);   // access nested property

console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address.city);

console.log(person3.name);
console.log(person3.age);
console.log(person3.address);
console.log(person3.address.city);

// ----------------------- Arrays Of Objects ---------------------------

// Arrays of objects are very common for storing multiple related items.
// Example: list of fruits where each fruit has properties like name, color, calories.

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 95 },
  { name: "pineapple", color: "yellow", calories: 37 }
]

console.log(fruits[0].name);
console.log(fruits[1].name);
console.log(fruits[2].name);
console.log(fruits[3].name);
console.log(fruits[4].name);

//Add a new element to an array (push)
// push() = adds to the END of the array
fruits.push({ name: "grapes", color: "purple", calories: 62 });

console.log(fruits);

//remove an object from an array (pop)
// pop() = removes the LAST element
fruits.pop();

console.log(fruits);

//remove an element at a certain place (splice)
// splice(startIndex, deleteCount) 
// Here: start at index 1, remove 2 elements
fruits.splice(1, 2);

console.log(fruits);

// loop through the elements of an array (forEach)
// forEach() = executes a function for each element (does not return anything)
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

//run each element through a function and return it into an array (map)
// map() = transforms each element and returns a NEW array
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

//return a new array after using each element and checking a condition (filter)
// filter() = returns a new array with only elements that pass a condition
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalFruits);

const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalFruits);

//return a single value (reduce)
// reduce() = reduces array to a single value (or object).
// Syntax: arr.reduce((accumulator, current) => {...}, initialValue);

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(minFruit);
