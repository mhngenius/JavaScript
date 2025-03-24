//Variable scope = where a variable is recognized and accessable

//1)local

function function1() {
    let x = 1;
    console.log(x); //console.log(y);
}

function function2() {
    let x = 2; //let y = 2;
    console.log(x);
}

function1();
function2();

//2)global

let x = 3;

function1();
function2();

function function3() {
    //let x = 1; ----> 1
    console.log(x);
}

function function4() {
    // let x = 2; ----> 2
    console.log(x);
}