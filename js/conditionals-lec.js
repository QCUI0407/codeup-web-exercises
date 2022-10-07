"use strict";
// IF STATEMENT - allows you to execute code based on certain conditions.

//   if(condition){
// if the condition is met, the code in the curly braces will be  executed.
//   }

// If statement condition will ALWAYS evaluate a boolean.

if(typeof "icon" === "boolean") {
    console.log("Run this code!");
}

if("") {
    console.log("Run this code!");
}

// IF / ELSE STATEMENT - in addition to the IF statement, the ELSE will block will run if the condition is NOT met.

if(typeof true === false){
    // condition evaluates to true, run this code
    console.log("The condition evaluates to true!");
} else {
    // condition evaluates to false, run this code.
    console.log("The condition evaluates to false!");
}

let currentShow = prompt("What show are you currently watching?");

// if(currentShow.toLowerCase() === "house of dragons" || currentShow.toLowerCase() === "rick and morty" || currentShow.toLowerCase() === "cyberpunk") {
//     console.log("Whoa! I love that show!")
// } else {
//     console.log("Hey I haven't seen that show yet, I'll have to give it a try!")
// }

// MINI-EXERCISE!

// TODO: 1. Create two string variables one for password and one for username.
let username = "jayman";
let password = "password1";
// TODO: 2. Create two more variables named userUsername and userPassword that prompt the user to enter in their credentials.
// let userUsername = prompt("Please enter your username.")
// let userPassword = prompt("Please enter your password");
// TODO: 3. Create an if statement and log to the console if the user enters the correct information.

// TODO: 4. If the username matches the user, AND the password matches the user password, log to the console that they have successfully logged in. Otherwise, log to the console that the credentials are incorrect.
// if(username === userUsername && password === userPassword) {
//     console.log("You have successfully logged in!")
// } else {
//     console.log("Invalid credentials, try again.")
// }

// We want to put our more specific conditions first, so that the more general ones can catch the conditions that are not met.

// if(username === userUsername) {
//     console.log("Your username is correct.");
// } else if( password === userPassword) {
//     console.log("Your password is correct.")
// } else if(username === userUsername && userPassword === password) {
//
// }

// Example:
// username = "jayman"
// password = "password1"

// IF/ELSE IF/ELSE
// if(condition){
//     // if condition evaluates to true, run this code,
// } else if(condition2) {
//     // if the second condition is met, run this code.
// } else {
//     // if no condition is met, run this code.
// }

// Teacher is dismissing students by clothes they are wearing.

let shoes = 'red';
let shirt = 'hawaiian'
let pants = 'denim';
let jacket = true;
let emergency = true;

if(shoes === 'blue') {
    console.log("Everyone is dismissed.")
} else if(shirt === 'polo') {
    console.log("If you're wearing a hawaiian shirt, you are dismissed.")
} else if(pants === 'plaid') {
    console.log("If you're waring plaid pants, you are dismissed.")
} else if(!jacket) {
    console.log("if you're wearing a jacket, you're dismissed.")
} else {
    console.log("Everyone else is dismissed!");
}

if (true) {
    console.log("Hello, I'm another conditional statement!")
}

console.log("The class is now at recess.")

let num = 20;

// if(num % 2 === 0 && num % 5 === 0) {
//     console.log("The number is divisible 5, 2, and is an even number");
// } else if(num % 2 === 0) {
//     console.log("The number is even and divisible by 2");
// } else if(num % 5 === 0) {
//     console.log("The number is divisible by 5.")
// } else {
//     console.log("The number is odd, and not divisible by 5.")
// }

// if(num % 5 === 0) {
//     console.log("The number is divisible 5, 2, and is an even number");
// } else if(num % 2 === 0) {
//     console.log("The number is even and divisible by 2");
// } else if(num % 2 === 0 && num % 5 === 0) {
//     console.log("The number is divisible by 5.")
// } else {
//     console.log("The number is odd, and not divisible by 5.")
// }

// TERNARY OPERATOR / STATEMENT

let myName = "Codeup";

// If myName is equal to "Codeup", assign the greeting variable "Hello, " + myName, if myName is not equal, assign the greeting variable "Hello, stranger!"
let greeting = myName === "Codeup" ? "Hello, " + myName : "Hello stranger!";

console.log(greeting);

if(myName === "Codeup") {
    console.log("Hello, " + myName)
} else {
    console.log("Hello stranger!")
}

// let compsFavShow = (currentShow.toLowerCase() === "house of dragons" || currentShow.toLowerCase() === 'rick and morty') ? "Sick!" : "I don't like that show.";

// alert(compsFavShow);

// SWITCH STATEMENTS

let menu = prompt("Please choose an item:\n1. cheeseburger \n2. chicken sandwich\n3.chili cheese fries\n4. philly cheesesteak");
// switch(menu)  {
//     case '1':
//         alert("The cheeseburger costs: $5.99")
//         break;
//     case '2':
//         alert("The chicken sandwich comes with pickles and is $4.99");
//         break;
//     case '3':
//         alert("The chili cheese fries are $2.99")
//         break;
//     case '4':
//         alert("The philly cheesesteak has mushrooms and is $7.99");
//         break;
//     default:
//         alert("Sorry, that item is not on the menu!")
// }

if(menu === '1') {
    alert("The cheeseburger costs: $5.99")
} else if(menu === '2') {
    alert("The chicken sandwich comes with pickles and is $4.99");
} else if(menu === '3') {
    alert("The chili cheese fries are $2.99")
} else if(menu === '4') {
    alert("The philly cheesesteak has mushrooms and is $7.99");
} else {
    alert("Sorry, that item is not on the menu!");
}

let input = "Gimme a beat!"

// if(typeof input === "string") {
//     if(input.length > 6) {
//         console.log("Boots and cats")
//     } else {
//         console.log("That string ain't ready for the flow.")
//     }
//
// } else {
//     console.log("You gave me something else, I said give me a beat!")
// }


let hungry = confirm("Are you hungry?")

function orderFood() {
    if(hungry) {
        let menu = prompt("Please choose an item:\n1. cheeseburger \n2. chicken sandwich\n3.chili cheese fries\n4. philly cheesesteak");
        switch(menu)  {
            case '1':
                alert("The cheeseburger costs: $5.99")
                break;
            case '2':
                alert("The chicken sandwich comes with pickles and is $4.99");
                break;
            case '3':
                alert("The chili cheese fries are $2.99")
                break;
            case '4':
                alert("The philly cheesesteak has mushrooms and is $7.99");
                break;
            default:
                alert("Sorry, that item is not on the menu!")
        }
    } else {
        alert("Must be nice..")
    }
}