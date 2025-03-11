//Strict equality = Checks whether two values ​​are not only equal in quantity but also have the same data type and we write them like "==="

const PI = 3.14;

if (PI === "3.14") {
    console.log("This is pi")
}
else {
    console.log("This is NOT pi!")
}

const PI2 = 3.14;

if (PI2 != "3.14") {
    console.log("This is NOT pi")
}
else {
    console.log("This is pi!")
}

const PI3 = 3.14;

if (PI3 !== "3.14") {
    console.log("This is NOT pi")
}
else {
    console.log("This is pi!")
}
