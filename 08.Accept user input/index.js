//To accept user inputs we can use two different ways:


//User input 1 : window.prompt


let username = window.prompt(`Whats your username?`);

console.log(username);


//User input 2 : html id


let username2;

//By using onclick method we can give a command to a specified button and we use function to apply the action that we want from the button to do
document.getElementById("mySubmit").onclick = function () {
    username2 = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username2}`;

}