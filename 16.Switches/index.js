//Switches

//If we have a lot of else if statement we can use "Switch / cases" instead

let day = 3;

switch (day) { //the main statement in the variable and the variable in the switch
    case 1: //and different conditions in case part
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Teusday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default: //"default" is like "else" it specifies what happens if none the cases were right
        console.log(`${day} is not a day`)

}


let testScore = 33;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break
    case testScore >= 80:
        letterGrade = "B";
        break
    case testScore >= 70:
        letterGrade = "C";
        break
    case testScore >= 60:
        letterGrade = "D";
        break
    default:
        letterGrade = "F";
}

console.log(letterGrade);