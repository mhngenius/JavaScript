// OBJECTS IN JAVASCRIPT
// An object is a collection of related properties (data) and/or methods (functions)
// Objects can represent real-world entities like people, products, places, etc.
// Syntax: object = { key: value, methodName: function() {...} }

// Creating an object named 'person1' with properties and methods
const person1 = {
    // Properties (key-value pairs):
    firstName: "Spongebob",    // String property
    lastName: "Squarepants",   // String property
    age: 30,                   // Number property
    isEmployed: true,          // Boolean property

    // Methods (functions inside objects):
    sayHello: function () {    // Traditional function syntax
        console.log("Hi! I am Spongebob")
    },
    eat: function () {         // Another method
        console.log("I am eating a Krabby Patty")
    },
}

// Accessing object properties using dot notation:
console.log(person1.firstName);   // Output: "Spongebob"
console.log(person1.lastName);    // Output: "Squarepants"
console.log(person1.age);         // Output: 30
console.log(person1.isEmployed);  // Output: true

// Calling object methods:
person1.sayHello();  // Output: "Hi! I am Spongebob"
person1.eat();       // Output: "I am eating a Krabby Patty"

// Creating another object named 'person2' with different properties and methods
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,

    // Using arrow function syntax for methods (note: arrow functions behave differently with 'this')
    sayHello: () => {
        console.log("Hey, I am Patrick...")
    },
    eat: () => {
        console.log("I am eating roast beef, chicken and pizza")
    }
}

// Accessing person2's properties:
console.log(person2.firstName);   // Output: "Patrick"
console.log(person2.lastName);    // Output: "Star"
console.log(person2.age);         // Output: 42
console.log(person2.isEmployed);  // Output: false

// Calling person2's methods:
person2.sayHello();  // Output: "Hey, I am Patrick..."
person2.eat();       // Output: "I am eating roast beef, chicken and pizza"