//do while loops = basically another form of while loops 

let loggedin = false;
let username;
let password;

do {
    let username = window.prompt("Enter your username:");
    let password = window.prompt("Enter your password:");

    if (username === "myUsername" && password === "myPassword") {
        loggedin = true;
        console.log("You are logged in!");
    } else {
        console.log("Invalid credentials! Please try again.");
    }
} while (!loggedin);