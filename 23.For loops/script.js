// For loops = another type of loops which you can specify the duration of loop

for (let i = 0; i <= 2; i++) {
    console.log(`Hello`)

}

for (let i2 = 2; i2 <= 10; i2 += 2) {
    console.log(i2);

}

for (let i3 = 10; i3 > 0; i3--) {
    console.log(i3);

}
console.log(`HAPPY NEW YEAR!`);

for (let i4 = 10; i4 > 0; i4 -= 3) {
    console.log(i4);

}
console.log(`HAPPY NEW YEAR!`);

for (let i = 1; i <= 20; i++) {

    if (i == 13) {
        continue; //= skip
    }
    else {
        console.log(i);
    }

}