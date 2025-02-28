//exercise1:

let username = "   mahan";

let result = username.startsWith(" "); //startsWith= tells the characters that the variable starts with

if (result) {
    console.log(" Your username can't begin with ` `")
}
else {
    console.log(username);
}

//exercise2

let username2 = "mahan    ";

let result2 = username.endsWith(" ");//endsWith = tells the characters that the variable ends with

if (result) {
    console.log(" Your username can't end with ` `")
}
else {
    console.log(username);
}

//exercise3

let username3 = "Mahan Mehrabi";

let result3 = username.includes(" ");//includes = shows if some element include something

if (result) {
    console.log(" Your username can't include ` `")
}
else {
    console.log(username);
}

//exercise4

let phoneNumber = "123-456-7890"
phoneNumber = phoneNumber.replaceAll("-", "/"); //replaceAll = takes all of a certain character and replaces it with another character
console.log(phoneNumber);

let phoneNumber2 = "123-456-7890"
phoneNumber2 = phoneNumber2.padStart(20, "0"); //padStart = (the amount , the element you wanna append) = appends a value at the beggining of another value until it becomes as long as the number on the left
console.log(phoneNumber2);

let phoneNumber3 = "123-456-7890"
phoneNumber3 = phoneNumber3.padEnd(20, "0"); ////padEnd = (the amount , the element you wanna append) = appends a value at the end of another value until it becomes as long as the number on the left
console.log(phoneNumber3);