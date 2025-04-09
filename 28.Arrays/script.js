//Arrays = variables like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

console.log(fruits);
console.log(fruits[1]); //write an specified index of an array

fruits[0] = "coconut"; //change the index value
console.log(fruits[0]);

fruits.push("kiwi"); //push = append some value at the end of the array
console.log(fruits);

fruits.pop(); ///pop = remove the last value of an array
console.log(fruits);

fruits.unshift("strawberry"); //unshift = add a value at the beginning of an array
console.log(fruits);

fruits.shift(); //shift = remove a value from the beginning of an array
console.log(fruits);

let numOfFruits = fruits.length; //length = tells the length of an array
console.log(numOfFruits);

let fruits2 = ["apple", "orange", "banana", "mango"];
let numOfFruits2 = fruits2.length;
console.log(numOfFruits2);

let index = fruits.indexOf("banana"); //indexOf = tells the index numnber of an certain value or element
console.log(index);

let index2 = fruits.indexOf("peach");
console.log(index2); //printing an non existing value in an array returns -1

let sorted = fruits.sort(); // sort = sorts in alphabetical order
console.log(sorted);

let reversed = fruits.reverse(); // reverse = reverse the lements of an array in alphabetical order
console.log(reversed);