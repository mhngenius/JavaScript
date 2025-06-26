// this =refrence to the object where THIS is used
//      (the object depends on the immediate context)
//      person.name = this.name

// "this" method doesn't work with arrow functions!!!

// "this" refers to the object that is calling the method.
// The value of "this" depends on the context in which it is used.
// Arrow functions do NOT bind their own "this", so we use regular functions for object methods.

// Creating an object named person1
const person1 = {
    name: "Spongebob",             // A property called name
    favFood: "hamburgers",         // A property called favFood

    // A method to say hello
    sayHello: function () {
        // "this.name" refers to person1.name
        console.log(`Hi! I am ${this.name}`);
    },

    // A method to simulate eating
    eat: function () {
        // Accessing both properties using "this"
        console.log(`${this.name} is eating ${this.favFood}`);
    },
};

// Call methods on person1
person1.sayHello(); // Output: Hi! I am Spongebob
person1.eat();      // Output: Spongebob is eating hamburgers

// Creating another object named person2
const person2 = {
    name: "Patrick",           // New name
    favFood: "pizza",          // New favorite food

    // The same methods reused with regular functions
    sayHello: function () {
        console.log(`Hi! I am ${this.name}`);
    },

    eat: function () {
        console.log(`${this.name} is eating ${this.favFood}`);
    },
};

// Call a method on person2
person2.eat(); // Output: Patrick is eating pizza
