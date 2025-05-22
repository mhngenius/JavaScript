// reduce() = reduces the elements of an array to a single value 
//            by repeatedly applying a function (like summing, finding max/min, etc.)

// An array of item prices
const prices = [5, 30, 10, 25, 15, 20];

// Use reduce() to calculate the total sum of prices
// The 'sum' function is passed as a callback to reduce()
const total = prices.reduce(sum);

// Log the total, formatted to 2 decimal places (like currency)
console.log(`$${total.toFixed(2)}`);

// This is the callback function used for summing
// It takes the accumulated result and the current element, and returns their sum
function sum(accumulator, element) {
    return accumulator + element;
}

// An array of student grades (Note: one value is missing between 50 and 90)
const grades = [75, 50, , 90, 80, 65, 95];
// That empty spot will be treated as `undefined` and skipped by reduce()

// Use reduce() to find the maximum grade in the array
const max = grades.reduce(getMax);

// Use reduce() to find the minimum grade in the array
const min = grades.reduce(getMin);

// Log the max and min values
console.log(max);
console.log(min);

// Callback function to return the greater of two numbers
function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

// Callback function to return the smaller of two numbers
function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}
