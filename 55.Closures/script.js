// Closures = A function defined inside of another function,
//            the inner function has access to the variables
//            and scope of the outer function.
//            Allow for private variables and state maintenance
//            Used frequently in JS frameworks: React, Vue, Angular


// ---------------- EXAMPLE 1 ----------------
function outer() {                       // outer function declaration
  let message = "Hello";               // local variable "message" scoped to 'outer'

  function inner() {                   // inner function (closure)
    console.log(message);            // inner has access to outer's variable "message"
  }

  inner();                             // calling inner() inside outer() -> prints "Hello"
}

message = "Goodbye";                     // This creates/updates a global variable "message"
// NOTE: It does NOT affect the "message" inside outer(),
// because outer() has its own private "message" variable.

outer();                                 // calling outer() executes inner() inside it
// result: prints "Hello" to the console


// ---------------- EXAMPLE 2 ----------------
function createCounter() {               // function factory (returns counter functions)
  let count = 0;                       // private variable, only accessible inside createCounter

  function increment() {               // closure function that modifies count
    count++;                         // increase private "count"
    console.log(`Count increased to ${count}`); // template literal outputs new count
  }

  function getCount() {                // closure that returns the current count
    return count;                    // provides a way to read the private variable
  }

  // Return an object that exposes only the functions,
  // but keeps 'count' hidden (encapsulation)
  return { increment, getCount };
}

// Create a counter instance
const counter = createCounter();

// Call increment multiple times
counter.increment(); // Count increased to 1
counter.increment(); // Count increased to 2
counter.increment(); // Count increased to 3
counter.increment(); // Count increased to 4
counter.increment(); // Count increased to 5
counter.increment(); // Count increased to 6

console.log(counter.count);              // undefined
// Because "count" is not directly exposed, only increment & getCount were returned.

console.log(`The current count is ${counter.getCount()}`);
// Calls getCount() -> returns 6
// Uses template literal to print "The current count is 6"


// ---------------- EXAMPLE 3 ----------------
function createGame() {                  // function factory for a game system
  let score = 0;                       // private variable, holds the score of the game

  function increaseScore(points) {     // closure to increase score
    score += points;                 // add the given points
    console.log(`+${points}pts`);    // show feedback in console
  }

  function decreaseScore(points) {     // closure to decrease score
    score -= points;                 // subtract points
    console.log(`-${points}pts`);    // show feedback in console
  }

  function getScore() {                // closure to return the score
    return score;                    // gives access to the private variable
  }

  // Return an object with public methods, keeping "score" private
  return { increaseScore, decreaseScore, getScore };
}

// Create a game instance
const game = createGame();

// Use the game methods
game.increaseScore(5);                   // adds 5 -> "+5pts"
game.increaseScore(6);                   // adds 6 -> "+6pts"
game.decreaseScore(1);                   // subtracts 1 -> "-1pts"
game.decreaseScore(2);                   // subtracts 2 -> "-2pts"

console.log(`The final score is ${game.getScore()}pts`);
// calls getScore() -> returns 8
// prints "The final score is 8pts"
