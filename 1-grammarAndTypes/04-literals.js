/*
Literals
    -a literal represents a fixed value 
        -literals include: data types and our added by developers to their code
            -string literal
            -numeric literal
            -boolean literal
            -onject literal
            -array literal
*/

//string literal
let car = 'Ford';

//numeric literal
let december = 12;


//boolean literal
let tired = true;

//object literal - colon after the key assigns the value, each key value pair is seperated by a comma.
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

console.log(soup.b);  //objects use dot notation and allows us to grab and output a specific key value.

//arrays literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days[2])

/* arrays use bracket notation and similar to dot notation allow us to grab a specific value from our data. items are automatically numbered starting at 0, left to right.*/

//when working with indecies, JS will start counting indecies starting at 0
// when using the length property JS starts counting at 1

console.log(days.length)

