//Method chaining

//with methos chaining we basically do a bunch of string methods at the same time by making a chain of them by using "."s 

let userName = window.prompt(`Enter your username:`);

userName = userName.trim().charAt(0).toUpperCase(); + userName.trim().slice(1).toLowerCase();

console.log(userName);