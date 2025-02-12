// Constants = variables which their value doesnt change for example:

const PI = 3.14159;
let radius;

radius = window.prompt("Please enter the radius of the circle: ");
radius = Number(radius);

let circumference = 2 * PI * radius;

console.log(circumference);