/*
else is a 'catch all' for an if statement 
let 'variable' = x;
if ('condition') {
    console.log('')
} else {
    console.log('')
}
*/

let weather = 75;

if (weather < 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket neccesary')
}

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name> ?'
*/

//BRONZE
let myName = 'Nick';

if (myName === 'Nick') { //strict equal checking both value and data type
    console.log(myName)
} else {
    console.log('Hello, what is your name?')
}

//SILVER
let myName = 'Nick'

if (myName == 'Nick') {
    console.log('Hello, my name is', myName + '!') // string concatenation
} else {
    console.log('Hello, what is your name')
}

//GOLD
let myName = 'Nick';

if (myName == 'David') {
    console.log('Hello, my name is', myName + '!') // string concatenation
} else {
    console.log(`Hello, is your name ${myName}?`) //string interpolation
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that first letter of the string, plus the rest of the string to lowercase
    If the first letter is not uppercase, console.log the first letter of the string to uppercase, plus the rest of the string to lowercase
*/

//BRONZE
let firstName = 'BrEyAnNa'

if (firstName[0] == firstName[0].toUpperCase()) {
    console.log(firstName)
} else {
    console.log(`hey, this isn't written correctly`)
}
//BRONZE    
let myName = 'zAcHaRy';
console.log(myName.charAt(0))
//z
if (myName[0] == myName[0].toUpperCase()) {
    console.log(myName)
} else {
    console.log("hey, this isn't written correctly")
}

//SILVER
let myName = 'zAcHaRy' 

if (myName[0] == myName[0].toUpperCase()) {
    console.log(myName.charAt(0))
} else {
    console.log(myName.slice(1).toLowerCase())   //SLICE BREAKS THE ELEMENT AT THE TARGET IN THE PARENTHESIS
}

//Silver
let firstName = 'brEyAnNa'

if (firstName[0] == firstName[0].toUpperCase()) {
    console.log(firstName[0])
} else {
    console.log(firstName.substring(1).toLowerCase()) // SUBSTRING IS THE SAME AS SLICE.. BREAKING THE ELEMENT AT THE DESIGNATED TARGET
}

//GOLD
let myName = 'zAcHaRy'; // this is a statement - we are stating that the variable of 'myName' has a value of 'zachary'

if (myName[0] == myName[0].toUpperCase()) {
    let isUpperCase = myName[0] + myName.slice(1).toLowerCase();  //this is an expression - any valid unit of code that resolves to a value
    console.log(isUpperCase);
} else {
    let notUpperCase = myName[0].toUpperCase() + myName.substring(1).toLowerCase();
    console.log(notUpperCase)
}

// ELSE IF

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 20;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.")
}   else if (age >= 18 && age <= 20) {
        console.log('You can vote!')
}   else if (age >= 21 && age <= 24) {
        console.log("You can drink") 
}   else if (age >= 25) {
        console.log('You can rent a car!')
} else {
    console.log(age);
}


// correct structure
let age = 20;
if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything fun.");
}

// incorrect structure 
let age = 30;
if (age >= 18) {
    console.log("Yay! You can vote!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else {
    console.log("you're too young to do anything fun")
}