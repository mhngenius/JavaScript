// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> cild)
//               helps with code reusability]

/* 
  Base class: Animal
  This is the parent class.
  It contains properties and methods that will be shared by all animals.
*/
class Animal {
    // Property: alive
    alive = true;

    // Method: eat
    // Uses 'this.name' to refer to the specific animal's name.
    eat() {
        console.log(`This ${this.name} is eating`);
    }

    // Method: sleep
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

/* 
  Child class: Rabbit
  It inherits from Animal using 'extends'.
  It gets all properties and methods from Animal.
  You can also add new properties and methods or override them.
*/
class Rabbit extends Animal { //"extends" is the keyword
    // Property: name, specific to Rabbit
    name = "rabbit";

    // Method: run, specific to Rabbit
    run() {
        console.log(`This ${this.name} is running`);
    }
}

/* 
  Child class: Fish
  Inherits from Animal.
  Adds its own method 'swim'.
*/
class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

/* 
  Child class: Hawk
  Inherits from Animal.
  Adds its own method 'fly'.
*/
class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

// Create an instance (object) of Rabbit
const rabbit = new Rabbit();
// Create an instance of Fish
const fish = new Fish();
// Create an instance of Hawk
const hawk = new Hawk();

/*
  Changing the inherited 'alive' property for rabbit.
  Even though 'alive' is defined in Animal,
  it can be accessed and changed from Rabbit.
*/
rabbit.alive = false;
// Output the current alive status of rabbit
console.log(rabbit.alive); // false
// Call inherited methods from Animal
rabbit.eat();   // uses eat() from Animal
rabbit.sleep(); // uses sleep() from Animal
// Call Rabbit's own method
rabbit.run();   // uses run() from Rabbit

// Do the same for Fish
fish.alive = false;
console.log(fish.alive); // false
fish.eat();   // uses eat() from Animal
fish.sleep(); // uses sleep() from Animal
fish.swim();  // uses swim() from Fish

// Hawk is still alive (default true)
console.log(hawk.alive); // true
hawk.eat();   // uses eat() from Animal
hawk.sleep(); // uses sleep() from Animal
hawk.fly();   // uses fly() from Hawk

/*
  Summary:
  - 'extends' makes a new class inherit from a parent class.
  - The child class automatically gets all properties and methods.
  - You can add new methods or properties to the child.
  - 'this' keyword refers to the current object instance.
  - Objects created with 'new' get their own copies of the properties.
*/
