// Arrow functions = a more concise way to write function expressions.
// They are especially useful for simple functions.
// Basic Syntax: (parameters) => expression or { code block }

const hello = (name, age) => {
    // `name` and `age` are the input parameters.
    // The arrow function prints a greeting using template literals.
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}

// Call the function with arguments:
hello("Mahan", 17);

// setTimeout takes a callback function and a delay (in milliseconds).
// Here, the arrow function has no parameters and prints "Hello" after 3 seconds.
setTimeout(() => console.log("Hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

// .map() - transforms each element in the array:
// Squares each number
const squares = numbers.map((element) => Math.pow(element, 2));

// Cubes each number
const cubes = numbers.map((element) => Math.pow(element, 3));

// .filter() - filters the array based on a condition:
// Keeps only even numbers (i.e., divisible by 2)
const evenNums = numbers.filter((element) => element % 2 === 0);

// Keeps only odd numbers (i.e., not divisible by 2)
const oddNums = numbers.filter((element) => element % 2 !== 0);

// .reduce() - reduces the array to a single value:
// The reduce function takes an accumulator and the current element
const total = numbers.reduce((accumulator, element) => accumulator + element);

// Print all the results:
console.log(squares);      // [1, 4, 9, 16, 25, 36]
console.log(cubes);        // [1, 8, 27, 64, 125, 216]
console.log(evenNums);     // [2, 4, 6]
console.log(oddNums);      // [1, 3, 5]
console.log(total);        // 21
