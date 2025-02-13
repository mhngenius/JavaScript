//Random number generator

//between 50 and 100

const min = 50;
const max = 100;


//We need to subtract the min from the max add max to it and multiply it by the random to get the correct value
let randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);


