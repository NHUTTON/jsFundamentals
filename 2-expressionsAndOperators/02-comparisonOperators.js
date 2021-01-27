// equal
console.log(3 == 3) //true

console.log('3' == 3) //true
/*
    - coersion is the process of converting one value type to another
        -JS assumes we made a mistake here and that we want to compare two values that are the same type.
*/

//strict equal check - this overrides JS coersion
console.log(3 === 3); //true
console.log('3' === 3); // false - this is stricly comparing a string and a number 

// not equal
console.log('3' != 3) // false - coersion ignores the data type

// strict not equal
console.log('3' !== 3) // true - overrides coersion 

// greater than
console.log(3 > 2); // true

//less than
console.log(2 < 3); // true

//greater than or equal to
console.log(3 >= 2); //true

//less than or equal to
console.log(2 <= 3); //true

// and
2 && 3

let x = 5;
let y = 6;

if(x >= 1 && y >= 1){
console.log('true'); //allows us to check if multiple values are true or false
}

// or
console.log(2 || 3); // 'or' allows us to check multiple values but only requires one to be true or false