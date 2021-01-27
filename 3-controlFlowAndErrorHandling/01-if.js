/*
    Conditionals
        - a falsy value is a value that is considered false when encountered in a boolena context
            - there are 6 falsy values in JavaScript
                1. false
                2. 0
                3. "", '', ``
                4. null
                5. undefined
                6. NaN (not a number)
*/

//Example

if (true){
    console.log('will it run');
}

let isOn = true;
if (isOn == true);{
console.log('The light is on!')
}

let isOn = false;
if (isOn == false); {
    console.log('The light is off')
}

/*
    - JavaScript allows us to reference a variable that's already been declared and assign it a new value (or reinitialize that value), but we cannot declare variables with the same name. 

    - general rule of thumb:
        -when declaring a new variable, the variable name needs to be prefaced by one of our 3 availble JS keywords to declare a new variable (var, let, const)
        - when assigning a new value to a variable that already exists, we simply just need to reference a variable that's already been named.
*/

let weather = 65;

if(weather < 70) {
    console.log('Wear a jacket!')
}

