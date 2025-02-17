//Else if statements = we use this statements when we havemore than one condition to check


let age = 19 /*12*/ /*-1*/ /*101*/ /*0*/;


if (age >= 100) {
    console.log(`You are TOO OLD to enter this site`);
}
else if (age >= 18) {
    console.log(`You are old enough to enter this site!`)
}
else if (age == 0) {
    console.log(`You can't enter , You were just born`)
}
else if (age < 0) {
    console.log(`Your age can't be below 0`)
}
else {
    console.log("You must be 18+ to enter this site")
}

