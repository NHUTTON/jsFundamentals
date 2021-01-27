// a ternary is the shortcut version to write a conditional

let num = 6;

// if/else
if (num > 0) {
    console.log(`The number is positive`);
}   else {
    console.log(`The number is negative`);
}

//this is a TERNARY
let num = -10

num > 0 ? console.log(`The number is positive`) : console.log(`The number is negative`);

let luckyNumber = 6;

(luckyNumber == 4) ? console.log(`The numbers match`) : (luckyNumber < 4 ) ? console.log(`The number is less than the lucky number`) : (luckyNumber > 4) ? console.log('The number is greater than the lucky number') : console.log(luckyNumber);

