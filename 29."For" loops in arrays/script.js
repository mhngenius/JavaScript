//for loops in arrays

let fruits = ["apple", "orange", "banana", "coconut"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

for (let i2 = fruits.length - 1; i > 0; i--) {
    console.log(fruits[i2]);
}