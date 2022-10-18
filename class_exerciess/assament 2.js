// Your solutions will go here :)
// Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string
function lowerCase(input) {
    if (typeof input === "string") {
        return input.toLowerCase();
    } else{
        return false;
    }
}
// Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.func

function isAllLowerCase(input){
    if(typeof input === "string"){
        if(input.toLowerCase() === input){
            return true;
        }else{
            return false;
        }
    }else {
        return false;
    }
}

// Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are uppercase otherwise it should return false.

function isAllUpperCase(input){
    if(typeof input === "string"){
        if(input.toUpperCase() === input){
            return true;
        }else{
            return false;
        }
    }else {
        return false;
    }
}


// Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome, if the string is palindrome should return false.

function isNotPalindrome(input){
    if(typeof input === "string"){
        const arrayValues = input.split("");

        const reverseArrayValues = arrayValues.reverse();

        const reverseString = reverseArrayValues.join("");

        if(input.toLowerCase() == reverseString.toLowerCase()) {
            return false;
        }
        else {
            return true;
        }
    }else {
        return true;
    }
}


// Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.

function multiplyBy2(input){
    if(typeof input === "number"){
        return Number(input) * 2;
    }else if(Number(input) == parseFloat(input)){
        return Number(input) * 2;
    }else {
        return false;
    }
}


// Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.

function convertHourToSec(input){
    if(typeof input === "number" && input >= 0){
        return Number(input) * 3600;
    }else if(Number(input) == parseFloat(input) && Number(input) >= 0){
        return Number(input) * 3600;
    }else {
        return false;
    }
}


// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(num1, num2, num3){
    if(Number(num1) == parseFloat(num1) && Number(num2) == parseFloat(num2) && Number(num3) == parseFloat(num3)){
        if(Number(num1) < Number(num2) && Number(num1) < Number(num3)){
            return Number(num1);
        }else if(Number(num2) < Number(num1) && Number(num2) < Number(num3)){
            return Number(num2);
        }else if(Number(num3) < Number(num1) && Number(num3) < Number(num2)){
            return  Number(num3);
        }
    }else {
        return false;
    }
}

// Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.

function addStringLengths(str1, str2){
    if(typeof str1 === "string" && typeof str2 === "string"){
        return str1.length + str2.length;
    }else{
        return false;
    }
}


// Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.

function subtract(num1, num2){
    if(Number(num1)== parseFloat(num1) && Number(num2)== parseFloat(num2) ){
        return Number(num1) - Number(num2);
    }else {
        return false;
    }
}


// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decial places. If either or both inputs are not numeric or numeric strings, calculateChange should return false.

function calculateChange(totalPaid, totalCost){
    if(Number(totalCost)== parseFloat(totalCost) && Number(totalPaid)== parseFloat(totalPaid) ){
        return "$" + (Number(totalPaid) - Number(totalCost)).toFixed(2);
    }else {
        return false;
    }
}








































