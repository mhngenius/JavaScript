//Logical operators

// and = && = to specify a condition and another condition was true
// or = || = to specify if one of two consitions is true
// not = ! = to specify if some condition is false



const temp = -100;

if (temp > 0 && temp <= 30) {
    console.log("The weather is GOOD!")
}
else {
    console.log("The weather is BAD!")
}



const temp2 = 250;

if (temp2 > 0 || temp2 <= 30) {
    console.log("The weather is GOOD!")
}
else {
    console.log("The weather is BAD!")
}

const isSunny = false;
if (!isSunny) {
    console.log("It is Sunny!")
}
else {
    console.log('IT is NOT sunny!')
}