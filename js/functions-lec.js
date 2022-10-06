"use strict";
(function(){
//someFunctions(arguments)
//Arguments are OPTIONAL


//function myFunction(input) {
//     var output = /* do something to calculate output */;
//     return output;
// }


// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.

function returnFive(){
    return 5;
}

console.log(returnFive());

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

function isFive(num) {
    return console.log(Boolean(Number(num) == 5))
}
isFive("5.000");
// how many inputs should the function have?
// 1
// what are the data types for the inputs?
// number or string
// what is the data type of the output/return value?
// boolean


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

function isShortWord(str){
    return console.log(str.length < 5);
}

isShortWord("    ")

// how many inputs?
// what data type for inputs?
// what is the return type?


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

function isSameLength(str1,str2){
    return  console.log(str1.length == str2.length);
}

isShortWord(5, 5);

// How many inputs?
// What type of input?
// What type of output?


}())
