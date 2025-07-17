// static = keyword that defines properties or methods that belong
//         to a class itself rather than the objects created
//         from that class (class own anything static, not the objects)

// Define a utility class for mathematical operations
class mathUtil {
    // Static property - belongs to the class itself
    static PI = 3.14159;  // Class-level constant for pi

    // Static method to calculate diameter
    static getDiameter(radius) {  // Method belongs to class, not instances
        return radius * 2;  // Returns diameter (radius × 2)
    }

    // Static method to calculate circumference
    static getCircumference(radius) {
        return 2 * this.PI * radius;  // Uses class's PI property (2πr)
    }

    // Static method to calculate area
    static getArea(radius) {
        return this.PI * radius * radius;  // Uses class's PI property (πr²)
    }
}

// Using the static methods/properties without creating class instances:
console.log(mathUtil.PI);  // Access static property directly from class
console.log(mathUtil.getDiameter(10));  // Call static method (returns 20)
console.log(mathUtil.getCircumference(10));  // Call static method (~62.8318)
console.log(mathUtil.getArea(10));  // Call static method (~314.159)

// Define a User class to track user instances
class user {
    // Static property to track total users across all instances
    static userCount = 0;  // Shared across all User instances

    // Constructor called when creating new instances
    constructor(username) {
        this.username = username;  // Instance property
        user.userCount++;  // Increment the class-level counter
    }

    // Static method to get total user count
    static getUserCount() {
        // 'this' refers to the class in static methods
        console.log(`There are ${this.userCount} users online`);
    }

    // Instance method (available to individual user objects)
    sayHello() {
        console.log(`Hello, My username is ${this.username}`);
    }
}

// Creating user instances (calls constructor each time)
const user1 = new user("Spongebob");  // Creates 1st user, increments count to 1
const user2 = new user("Patrick");    // Creates 2nd user, increments count to 2
const user3 = new user("Sandy");      // Creates 3rd user, increments count to 3

// Accessing instance properties:
console.log(user1.username);  // "Spongebob" (instance-specific)
console.log(user2.username);  // "Patrick"
console.log(user3.username);  // "Sandy"

// Calling instance methods:
user1.sayHello();  // Outputs greeting for user1
user2.sayHello();  // Outputs greeting for user2
user3.sayHello();  // Outputs greeting for user3

// Accessing static property:
console.log(user.userCount);  // 3 (total users created)

// Calling static method:
user.getUserCount();  // Outputs "There are 3 users online"