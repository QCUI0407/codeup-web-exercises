"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
    let blue = "blue is the color of the sky";
    let red = "Strawberries are red";
    let cyan = "I don't know anything about cyan";
    let userColor = prompt("write a color").toLowerCase()
    function analyzeColor(input){
        if (input === "blue") {
           alert(blue);
        } else if (input === "red") {
            alert(red);
        } else if (input === "cyan"){
            alert(cyan);
        } else{
            alert("????????????");
        }
    }
   analyzeColor(userColor);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

switch (randomColor){
    case "blue":
        alert(blue)
        break;
    case "red":
        alert(red)
        break;
    case "cyan":
        alert(cyan)
        break;
    default:
        alert("change to other color")
};

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

//  let userColor = prompt("write a color").toLowerCase()
//  function analyzeColor(input){
//      if (input === "blue") {
//         alert(blue);
//      } else if (input === "red") {
//          alert(red);
//      } else if (input === "cyan"){
//          alert(cyan);
//      } else{
//          alert("????????????")
//      }
//  };
// analyzeColor(userColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let yourNum = prompt("pick a number from 0 - 5");
function calculateTotal(num, num1){
    if (num == 0){
        alert("lucky num is " + num + "\n"
            +"price before the discount $" + num1 +"\n"
            +"price after the discount is$" + (num1 * 1));
    } else if(num == 1){
        alert("lucky num is " + num + "\n"
            +"price before the discount $" + num1 +"\n"
            +"price after the discount is$" + ((1- 0.1) * num1));
    } else if(num == 2){
        alert("lucky num is " + num + "\n"
            +"price before the discount $" + num1 +"\n"
            +"price after the discount is$" +((1-0.25)*num1));
    } else if(num == 3){
        alert("lucky num is " + num + "\n"
            +"price before the discount $" + num1 +"\n"
            +"price after the discount is$" + ((1-0.35)*num1));
    } else if(num == 4){
        alert("lucky num is " + num + "\n"
            +"price before the discount $" + num1 +"\n"
            +"price after the discount is$" +((1- 0.5) * num1));
    } else if(num == 5){
        alert("lucky num is " + num + "\n"
            +"price before the discount $" + num1 +"\n"
            +"price after the discount is$" +("0"));
    };
};
calculateTotal(yourNum, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let totalBill = prompt("what is your total bill?")
calculateTotal(luckyNumber, totalBill);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let userTypeNum = confirm("Would you like to enter a number？");
function userFinalNum(){
    if(userTypeNum){
        let userNum = prompt("what is your number?");
        let userNumAbsolute = Math.abs(Number(userNum));
        let userNumPlus100 = Number(userNum) + 100;
        let totalForUserNumPlus100 = userNum + " plus 100 is " + userNumPlus100;
        if(isNaN(userNum)){
            alert("please write only number.")
        } else {
            //0
            if(userNum == 0){
                switch (true){
                    case true:
                        alert("0 is not even or odd.");
                    case ture:
                        alert(totalForUserNumPlus100);
                    case ture:
                        alert("0 is not negative or positive.");
                }
            } else if(userNumAbsolute - Number(parseInt(userNumAbsolute)) > 0){
                //decimal,pos
                if(userNum>0){
                    switch (true){
                        case true:
                            alert(userNum + " is decimal number.");
                        case ture:
                            alert(totalForUserNumPlus100);
                        case ture:
                            alert(userNum + " is positive number.");
                    }
                } else{
                    switch (true){
                        case true:
                            alert(userNum + " is decimal number.");
                        case ture:
                            alert(totalForUserNumPlus100);
                        case ture:
                            alert(userNum + " is negative  number.");
                    }
                }
            }else{
                //not zero
                //odd & pos
                if(userNumAbsolute%2 === 1 && userNum > 0){
                    switch (true){
                        case  true:
                            alert(userNum +" is odd number.");
                        case true:
                            alert(totalForUserNumPlus100);
                        case true:
                            alert(userNum + " is positive number.");
                    }
                }//even & pos
                else if(userNumAbsolute%2 === 0 && userNum > 0){
                    switch (true){
                        case  true:
                            alert(userNum +" is even number.");
                        case true:
                            alert(totalForUserNumPlus100);
                        case true:
                            alert(userNum + " is positive number.");
                    }
                }//odd & neg
                else if(userNumAbsolute%2 === 1 && userNum < 0){
                    switch (true){
                        case  true:
                            alert(userNum +" is odd number.");
                        case true:
                            alert(totalForUserNumPlus100);
                        case true:
                            alert(userNum + " is negative  number.");
                    }
                }//even & neg
                else if(userNumAbsolute%2 === 0 && userNum < 0){
                    switch (true){
                        case  true:
                            alert(userNum +" is even number.");
                        case true:
                            alert(totalForUserNumPlus100);
                        case true:
                            alert(userNum + " is negative  number.");
                    }
                }
            }
        }
    }
    else{
        alert("Good Bye.");
    }
};

userFinalNum();










