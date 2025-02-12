//Accepting user input using html elements

const PI = 3.14159;
let radius;

document.getElementById("mySubmit").onclick = function () {

    radius = document.getElementById("myText").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";


}