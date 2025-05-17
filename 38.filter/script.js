// filter() = creates a new array by keeping only the elements that match a specific condition

// An array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7];

// Filter out even numbers using the isEven function
let evenNums = numbers.filter(isEven);

// Filter out odd numbers using the isOdd function
let oddNums = numbers.filter(isOdd);

// Print the even numbers
console.log(evenNums); // [2, 4, 6]

// Print the odd numbers
console.log(oddNums);  // [1, 3, 5, 7]

// Function that checks if a number is even
function isEven(element) {
    return element % 2 === 0; // returns true if divisible by 2
}

// Function that checks if a number is odd
function isOdd(element) {
    return element % 2 === 1; // returns true if remainder is 1 when divided by 2
}

// An array of ages
const ages = [16, 17, 18, 18, 19, 20, 60];

// Filter out adults (age 18 or older)
const adults = ages.filter(isAdult);

// Filter out children (under 18)
const children = ages.filter(isChild);

// Print adult ages
console.log(adults);   // [18, 18, 19, 20, 60]

// Print child ages
console.log(children); // [16, 17]

// Function that returns true if age is 18 or more
function isAdult(element) {
    return element >= 18;
}

// Function that returns true if age is less than 18
function isChild(element) {
    return element < 18;
}

// An array of words
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

// Filter words with 6 or fewer characters
const shortWords = words.filter(getShort);

// Filter words with more than 6 characters
const longWords = words.filter(getLong);

// Print short words
console.log(shortWords); // ["apple", "orange", "banana", "kiwi"]

// Print long words
console.log(longWords);  // ["pomegranate", "coconut"]

// Function that returns true if the word is 6 letters or shorter
function getShort(element) {
    return element.length <= 6;
}

// Function that returns true if the word is longer than 6 letters
function getLong(element) {
    return element.length > 6;
}
