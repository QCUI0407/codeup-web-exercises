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




// Warm-Up:
//
// Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.
//
//     Ex:
// average(["6", 5, 3, 2, 9])                       // returns 5
// average([true, 6, 9, 3, 10])                     // returns false
// average([{name: "Codey the Duck}, 10, 3, false]) // returns false
//     average([1, 2, 3, 4, 5])                         // returns 3
//     average(["5.5", "five", 3, 6, 7])                // returns false

// function average(input){
//         for(let i = 0 ; i < input.length; i++){
//             if(!isNaN(parseFloat(input.slice(i,1))))
//                 let num = ""
//                 num =+ input[i]
//             return   num/ (i+1);
//         }
//         else{
//                 return false;
//             }
//     }
// }
// average(["6", 5, 3, 2, 9])


//----------sol 1
function isNumeric(input){
    return !isNaN(parseFloat(input));
}
//
// //==sol 1
//
// function average(arr){
//     let i = 0;
//     let sum = 0;
//     while(i < arr.length){
//         sum += parseFloat(arr[i]);
//         i++
//     }
//     return sum/arr.length
// }


//-----------for loop
function average(input){
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        if (isNumeric(input[i])){
            sum += parseFloat(input[i])
        }else {
            return false;
        }
    }
}
average();
