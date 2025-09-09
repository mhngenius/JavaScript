// shuffle on array / Fisher - Yates algorhythm
// This is the Fisher–Yates algorithm (also known as Knuth Shuffle). 
// It efficiently randomizes the order of items in an array. 
// Complexity: O(n), which means it shuffles in linear time.

const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// Declares a constant variable "cards" and assigns it an array representing a deck of cards (without suits).
// The array contains strings ('A', 'J', 'Q', 'K') and numbers (1–10).
// const means the variable reference cannot be reassigned, but its content (the array) can still be modified.

console.log(cards);
// Prints the "cards" array to the console before shuffling.
// console.log is often used for debugging and testing output in JavaScript.

function shuffle(array) {
  // Defines a function named "shuffle" that takes one parameter called "array".
  // This function will randomize the order of the array elements using Fisher–Yates algorithm.

  for (let i = array.length - 1; i > 0; i--) {
    // "for" loop starts at the last index of the array (array.length - 1) 
    // and decrements (i--) until it reaches index 1.
    // Syntax: for (initialization; condition; iteration) { ... }
    // Here, initialization = let i = array.length - 1
    // condition = i > 0
    // iteration = i--

    const random = Math.floor(Math.random() * (i + 1));
    // Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive).
    // Multiplying by (i + 1) ensures the range is from 0 to i (inclusive).
    // Math.floor() rounds down to the nearest integer.
    // Example: if i = 5, random will be any integer from 0 to 5.

    [array[i], array[random]] = [array[random], array[i]];
    // This is "array destructuring assignment" in ES6.
    // It swaps the elements at index "i" and "random".
    // Without destructuring, we would need a temporary variable:
    // let temp = array[i]; array[i] = array[random]; array[random] = temp;
    // But with destructuring, we can swap in a single line.
  }
}
