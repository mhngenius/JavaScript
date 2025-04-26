//sum


function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(`Your total is $${total}`);


//average


function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number / numbers.length;
    }
    return result;
}

const total2 = getAverage(75, 100, 85, 90, 50);
console.log(tota2);


//strs


function combineStrings(...strings) {
    return strings.join(" ");
}
const fullname = combineStrings("Mr", "spongebob", "squarepants", "III");

console.log(fullname);
