/* 
Booleans: has two possible values: TRUE or FALSE
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL: this is an empty value or conatainer with nothing in it. This serves as a space to to fill
*/

let empty = null;
console.log(empty);

/*
Undefined: no value is assigned but it does not act as an empty container such as NULL
*/

let undef;
console.log(undef);

/*
NULL vs Undefined: 
NULL:
    -NULL is like a container with nothing in it
Undefined:
    -Variable has not been initialized or created yet

    think of variables with NULL and Undefined as UPS packages.
        -NULL: are packages that were intentionally picked up with nothing but have been assembled.
        -Undefined: are packages that need to be assembled and give items to ship.
*/

/*
NUMBERS: numbers are literally just numbers, dont need to write anything special in JS.
*/

let degrees = 90;
console.log(degrees)

let precise = 999999999999999 //15 9's
console.log(precise); // 15 9's

let rounded = 9999999999999999 
console.log(rounded) //16 9s: JS gives you space for 15 9s before it round up

let notQuite = 0.2 + 0.1;
console.log(notQuite) //JS rounds out at a certain number, so if mathis needed BEWARE!

let numbersAreHard = (0.2 * 10 +0.1 *10) / 10;
console.log(numbersAreHard) 

/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote or double quotes. ('') , ("")
*/

let stringOne = 'Oh hi Mark';
let stringTwo = "Oh hi Mark";
console.log(stringOne, stringTwo); //same output 

// NUMBERS vs STRINGS:
let first = 1050 + 100 //number
let second = '1050' + '100' // string concatenation

console.log(first) //number
console.log(second) // string concatenation

/*
OBJECTS: are used to store many {"key value pairs"} instead of a singular value
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true,
}
console.log(frodo);
console.log(typeof frodo); //typeof is a keyword that shows the data type

/*
ARRAYS: the are containers that hold lists of items inside  [square brakets] and can include multiple data types
*/

let list = ['item 1', undefined, 3 ];

/*    1      2          3       
1. name of the list
2. array uses a square braket
3. data type seperated by commas
*/   

let burritos = ['Large', 4, true]
console.log(burritos); //arrays are still OBJECTS
console.log(typeof burritos)

/*
- when JS sees that we're trying to combine two or more NUMBERS, it adds the  values together using the built in math functionality. 

- when JS sees us trying to combine one or more STRINGS, instead of using the built in math functionality, it combines the two strings instead without the values.  
*/

let example = 1050 + '100'; //COERISON: this will default to STRING CONCATENATION even though there is a NUMBER

console.log(example);
console.log(typeof example); 

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/


let firstName = 'Nick'

let lastName = 'Hutton'

let houseNumber = 1200

let street = 'Merts Drive'

let city = 'Indianapolis'

let state = 'IN'

let zipCode = 46237

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipCode ) // STRING Concatenation

console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipCode}`) // String INTERPOLATION allows us to plug in variables 

console.log(`Hello my name is ${firstName}`);

/*
STRING PROPERTIES
- Properties are qualities that are associated with a data type 
    -(var.property)
*/

let myName = 'Nick'
console.log(myName.length); //4: characters in the 'string'

/*
String Methods
 - methods are tools that help us manipulate the data 
    - var.method() parenthesis make the method run.
*/

let myNameIs = 'Nick'
console.log(myNameIs.toUpperCase()) //method that changes/manipulates the data to upper case

let homeTown = 'My home town is Augusta';
console.log(homeTown.includes('Augusta'))

// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(' '))

