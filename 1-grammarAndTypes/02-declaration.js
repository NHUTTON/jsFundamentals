/*
NOTES: 
-variables: are named containers for storing data values and referring to later (we can name them wwhatever we want)
    - a variable name must begin withj a letter, underscore, or dollar sign
    - numbers may follow the above characters, but cannot come first
    -JS is case sensitive - (Hi and hi are different variables.)
    -No spaces in variable names (camelCasing is suggested)
        -snake_Casing, PascalCasing
    - This is good practice because it helps keep everything readable - 
        let myName = 'Nick'
*/

let a = 2;

  let      b      =     2;
/* (1)    (2)    (3)    (4)

1. Keyword
2. Variable name (we can name this whatever we want)
3. Assignment Operator (this equal sign is denoting what our variable equals) there are multiple assignment operators
4. Value of the variable (named 'b' in this example)

Var, Let, and Const:

-var: this is an 'old' keyword that is not used often anymore
-let: 'new' keyword for variables 
const: this declares an unchangeable variable 
*/

/*
NOTES:
-declarations: are on the LEFT SIDE of a variable
    -it is simply : let x
    - declarations are on the left side of the assignemnt operator
-initialization: are on the RIGHT SIDE of the variable
    -it sets the value of the variable
    -it incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10    
 */

 let x;
 console.log('Declaration', x);

 x=10
 console.log('initialization', x);

 x=33
 console.log('Initialization 2', x);

 let y = 'Hello';
 console.log('Both', x, y);

 let today = 'Great';
 const elevenFifty = 'Wonderful'; //constant variable, cannot change throughout the doc.
 console.log(today, elevenFifty)

 today = 'Lovely!';
 console.log(today);