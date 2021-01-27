/*
- SWITCH statements execute a block of code when a CASE is evaluated as true 
- the switch statement often incorporates the BREAK keyword, as well as the DEFAULT keyword - although both keywords are optional
- the BREAK keyword breaks out of a case evaluated as true. This will stop the execution of more cases from being tested. If the BREAK keyword is 'omitted' the next statement in the SWITCH statement will be evaluated.
- the default keyword specifies code to run if none of the cases evaluated as true. There can only be one default keyword in a switch statement. 
*/

let officeCharacter = 'Michael'

switch (officeCharacter) {
    case "Michael": 
        console.log('My mind is going a mile an hour');
        break;
    case "Dwight":
        console.log('Perfectenschlag');
        break;
    case "Jim": 
        console.log('Bears. Beets. Battlestar Galactica.');
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, do i know you?`)    
}