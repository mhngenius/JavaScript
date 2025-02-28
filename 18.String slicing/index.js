//String slicing = slicesa certain and specified part of a string


const fullName = "Mahan Mehrabi";

let firstName = fullName.slice(0, 5); //(beggining index , end index)
let lastName = fullName.slice(6, 13);
let fisrtChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

//Dyanmic
let firstNameD = fullName.slice(0, fullName.indexOf(" "));
let lastNameD = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(fisrtChar);
console.log(lastChar);

//Dyanmic
console.log(firstNameD);
console.log(lastNameD);

const email = "sample@gmail.com"

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(userName);
console.log(extension);