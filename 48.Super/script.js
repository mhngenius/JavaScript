// super = keyword is used in classes to call the constructor or
//        access the properties and methods of a parent (superclass)
//        this = this object
//        super = the parent

/* 
  The Animal class is the parent (superclass) that will be extended by other classes.
  It contains properties and methods common to all animals.
*/
class Animal {
  constructor(name, age) {
    this.name = name;  // Assigns name parameter to instance property
    this.age = age;    // Assigns age parameter to instance property
  }

  /* 
    A general movement method that can be used by all animals.
    The speed parameter will be provided by child classes.
  */
  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed} mph.`);
  }
}

/* 
  Rabbit class inherits from Animal using 'extends'.
  It adds rabbit-specific functionality while keeping Animal's properties/methods.
*/
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);  // Calls Animal's constructor to set name and age
    this.runSpeed = runSpeed;  // Adds rabbit-specific property
  }

  /* 
    Rabbit-specific method that uses the inherited move() method
    from Animal via super.move()
  */
  run() {
    console.log(`${this.name} can run`);
    super.move(this.runSpeed);  // Calls parent's move() with runSpeed
  }
}

/* 
  Fish class also inherits from Animal.
  It specializes for aquatic movement.
*/
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);  // Calls Animal constructor
    this.swimSpeed = swimSpeed;  // Fish-specific property
  }

  swim() {
    console.log(`${this.name} can swim`);
    super.move(this.swimSpeed);  // Uses Animal's move() with swimSpeed
  }
}

/* 
  Hawk class inherits from Animal for aerial movement capabilities.
*/
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);  // Calls parent constructor
    this.flySpeed = flySpeed;  // Hawk-specific property
  }

  fly() {
    console.log(`${this.name} can fly`);
    super.move(this.flySpeed);  // Uses Animal's move() with flySpeed
  }
}

// Creating instances of each animal class
const rabbit = new Rabbit("Bugs Bunny", 1, 25);
const fish = new Fish("Nemo", 6, 12);
const hawk = new Hawk("Henery", 2, 50);

// Demonstrating rabbit properties and methods
console.log(rabbit.name);     // Access inherited property
console.log(rabbit.age);      // Access inherited property
console.log(rabbit.runSpeed); // Access Rabbit-specific property
rabbit.run();                 // Calls Rabbit's run() method

// Demonstrating fish properties and methods
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

// Demonstrating hawk properties and methods
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();