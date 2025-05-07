//Callbacks = a function that is passed as an argument to antother function.

hello(goodbye);//hello(wait); , hello(leave;

function hello(Callback) {
    console.log("Hello!");
    Callback();
}

function wait() {
    console.log("Wait!")
}

function leave() {
    console.log("Leave!");
}

function goodbye() {
    console.log("Goodbye!");
}

//callback exercise

sum(displayPage, 1, 2); //sum(displayConsole, 1, 2);

function sum(Callback, x, y) {
    let result = x + y;
    Callback(result);

}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {

    document.getElementById("myH1").textContent = result;
}
