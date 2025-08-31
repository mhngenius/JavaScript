// sort() = method used to sort elements of an array in place.
//         Sorts elements as strings in lexicographic order, not alphabetical
//         Lexicographic = (alphabet, numbers + symbols) as strings

// Sorting an array of strings lexicographically
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort(); // Sorts the array elements as strings in lexicographic order
console.log(fruits); // Output: ["apple", "banana", "coconut", "orange", "pineapple"]

// Sorting numbers requires a compare function to sort numerically
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// Ascending numerical sort using compare function (a - b)
numbers.sort((a, b) => a - b); // Compare function returns negative if a should come before b
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Descending numerical sort using compare function (b - a)
numbers.sort((a, b) => b - a); // Compare function returns positive if b should come before a
console.log(numbers); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Sorting objects by numeric properties
const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Squidward", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4.0 }
];

// Sort people by age in ascending order
people.sort((a, b) => a.age - b.age); // Compare function for ascending age
console.log(people);

// Sort people by age in descending order
people.sort((a, b) => b.age - a.age); // Compare function for descending age
console.log(people);

// Sort people by GPA in ascending order
people.sort((a, b) => a.gpa - b.gpa); // Compare function for ascending GPA
console.log(people);

// Sort people by GPA in descending order
people.sort((a, b) => b.gpa - a.gpa); // Compare function for descending GPA
console.log(people);

// Sorting objects by string properties using localeCompare()
people.sort((a, b) => a.name.localeCompare(b.name)); // localeCompare() properly compares strings alphabetically
console.log(people);

// Fisher-Yates algorithm for shuffling an array (commented out)
/*
const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]; // Swap elements
    }
}
*/