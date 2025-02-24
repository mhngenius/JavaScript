//String methods



let userName = "   Mahan          ";
userName = userName.trim(); //trim remove the spaces
console.log(userName);
// userName = userName.repeat(3); //repeat the value
// console.log(userName);
console.log(userName.charAt(0)); //says what character its in that index number
console.log(userName.indexOf("h")); //says the index number of a character
console.log(userName.lastIndexOf("a")); //shows the last index of a character
console.log(userName.length); //as its obvious tells the length of a value
userName = userName.toUpperCase(); //covert all of the value into uppercase letters
console.log(userName);
userName = userName.toLowerCase();//covert all of the value into lowercase letters
console.log(userName);
let result = userName.startsWith("m");//boolean method that tells if an value starts with specified letter or not
console.log(result);
let result2 = userName.endsWith("m");//boolean method that tells if an value ends with specified letter or not
console.log(result2);

