// Function expressions = a way to define functions as values or variables

// setTimeout takes a callback function and a delay in milliseconds
setTimeout(function () {
    console.log("Hello");
}, 3000); // prints "Hello" after 3 seconds

// --- Function Declaration ---

// Declare a function (this can be hoisted)
function square(element) {
    return Math.pow(element, 2); // returns the square of the element
}

const numbers = [1, 2, 3, 4, 5, 6];

// Use the declared 'square' function in map
const squares = numbers.map(square);

console.log("Squares using declared function:", squares); // [1, 4, 9, 16, 25, 36]

// --- Function Expression ---

// Using an anonymous function directly inside map
const squares2 = numbers.map(function (element) {
    return Math.pow(element, 2);
});

console.log("Squares using function expression:", squares2); // [1, 4, 9, 16, 25, 36]

// You used numbers2 here, but it's not defined. Fix: use 'numbers'
const cubes = numbers.map(function (element) {
    return Math.pow(element, 3);
});

console.log("Cubes:", cubes); // [1, 8, 27, 64, 125, 216]

// Filter even numbers using a function expression
const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
});

console.log("Even Numbers:", evenNums); // [2, 4, 6]

// Filter odd numbers using a function expression
const oddNums = numbers.filter(function (element) {
    return element % 2 !== 0;
});

console.log("Odd Numbers:", oddNums); // [1, 3, 5]

// Use reduce to calculate the sum of the array
const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
}, 0); // important: set initial value to 0

console.log("Sum of Numbers:", total); // 21
