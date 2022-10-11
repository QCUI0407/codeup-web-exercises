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

function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}

console.log(hasLowerCase("CUI"));