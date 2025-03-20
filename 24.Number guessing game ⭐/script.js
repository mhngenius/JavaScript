//Number guessing game


const minNum = 1;
const maxNNum = 100;
const answer = Math.floor(Math.random() * (maxNNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert(`Please enter a valid number`);
    }
    else if (guess < minNum || guess > maxNNum) {
        window.alert(`Please enter a valid number`);
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert(`TOO LOW! TRY AGAIN!`);
        }
        else if (guess > answer) {
            window.alert(`TOO HIGH! TRY AGAIN!`);
        }
        else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}