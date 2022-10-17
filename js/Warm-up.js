"use strict";
//Warm-up:
//
// Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

// function numMultipliedFive(){
//     let typeNum = Number(prompt("what is your num?"));
//     if(isNaN(typeNum)){
//         alert("0");
//     } else {
//         alert(typeNum * 5);
//     }
//
// };
// numMultipliedFive();

// function hasLowerCase(string){
//
//
//
//
//     for (let i = 0 ; i < string.length ; i++){
//         // console.log(i);
//         console.log(string[i]);
//         if(string[i] === (string[i]).toLowerCase){
//             return lowerCaseCount === 0
//         }
//     }
// }
// hasLowerCase("Cui");

/*
if string[i] === /[a-z]/ return true
 */

// function hasLowerCase(str) {
//     return (/[a-z]/.test(str));
// }
//
// console.log(hasLowerCase("CUI"));

// Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
//
//     EX:
// inBetween(1, 10, 5) returns true
// inBetween(25, 26, 25) returns false
// inBetween(0, 1, 0.5) returns true

function inBetween(min,max,num){
    // let boolean;
    // if(num>min && num <max){
    //     boolean = true;
    //     return boolean;
    //     //return true;
    // }
        return num<max && num>min;
}
inBetween(4,6,5);

// Morning Warm-Up:
//
// Create a function named "typePrinter" that accepts an array as an input, and logs the data type of each element to the console.
//
    let arr = [true, "Icon", 25, "66", false, 0];



function typePrinter(userArr){
        for(let i = 0; i<userArr.length; i++){
                console.log(typeof userArr[i]);
        }
}

typePrinter(arr);













