// constructor = special method for defining the
//              properties and methods of objects

// A constructor function is a special function used to create and initialize objects
// with properties and methods.

// Constructor function named 'Car'
function Car(make, model, year, color) {
    // 'this' refers to the new object being created.
    this.make = make;   // Property: make (e.g., Ford)
    this.model = model; // Property: model (e.g., Mustang)
    this.year = year;   // Property: year (e.g., 2024)
    this.color = color; // Property: color (e.g., Red)

    // Method: drive
    // Adds a method to each Car object that logs a message to the console.
    this.drive = function () {
        console.log(`You drive the ${this.model}`);
    };
}

// Create new Car objects using the 'new' keyword
const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue");
const car3 = new Car("Dodge", "Charger", 2026, "Silver");

// Access and log car1's properties and call its method
console.log(car1.make);   // Output: Ford
console.log(car1.model);  // Output: Mustang
console.log(car1.year);   // Output: 2024
console.log(car1.color);  // Output: Red
car1.drive();             // Output: You drive the Mustang

// Access and log car2's properties and call its method
console.log(car2.make);   // Output: Chevrolet
console.log(car2.model);  // Output: Camaro
console.log(car2.year);   // Output: 2025
console.log(car2.color);  // Output: Blue
car2.drive();             // Output: You drive the Camaro

// Access and log car3's properties and call its method
console.log(car3.make);   // Output: Dodge
console.log(car3.model);  // Output: Charger
console.log(car3.year);   // Output: 2026
console.log(car3.color);  // Output: Silver
car3.drive();             // Output: You drive the Charger
