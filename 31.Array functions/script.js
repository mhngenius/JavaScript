// --- SUM ---

// Function to sum an arbitrary number of numbers
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number; // add each number to result
    }
    return result; // return the total sum
}

// Call the sum function with numbers and print the result
const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}`);


// --- AVERAGE ---

// Function to calculate the average of an arbitrary number of numbers
function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number; // first, sum all the numbers
    }
    return result / numbers.length; // then divide the sum by how many numbers
}

// Correct call to get the average and print it
const total2 = getAverage(75, 100, 85, 90, 50);
console.log(total2);


// --- STRINGS ---

// Function to combine multiple strings into one, separated by spaces
function combineStrings(...strings) {
    return strings.join(" "); // join all strings with a space between them
}

// Call the function and combine the strings into a full name
const fullname = combineStrings("Mr", "Spongebob", "Squarepants", "III");

console.log(fullname);
