"use strict";

// console.log("Hello from external JavaScrip");
//
// alert("Welcome to my Website!");
//
// let userColor = prompt("What is your favorite color?");
//
// alert(userColor + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let LittleMermaid = Number(prompt("Days"));
let BrotherBear = Number(prompt("Days"));
let Hercules    = Number(prompt("Days"));
let pricePerDay = 3;
let totalPrice  = Number(LittleMermaid + BrotherBear + Hercules) * pricePerDay;
alert("$" + totalPrice)
