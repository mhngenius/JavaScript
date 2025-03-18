//While loops = loops are used when you want the program to do an action more than 1 time while loops is a type of loops which you basically tell the code "do this while this condition is true" 


let username = "Mahan";

while (username === "") {
    console.log("You don't have a username");
}
console.log(`Hello ${username}`);



let username2 = "";

while (username2 === "" || username2 === null) {
    username2 = window.prompt(`Enter your username:`)
}
console.log(`Hello ${username2}`);