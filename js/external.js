"use strict";

console.log("Hello from external JavaScrip");

alert("Welcome to my Website!");

let userColor = prompt("What is your favorite color?");

alert(userColor + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
let LittleMermaid = Number(prompt("Days"));
let BrotherBear = Number(prompt("Days"));
let Hercules    = Number(prompt("Days"));
let pricePerDay = 3;
let totalPrice  = Number(LittleMermaid + BrotherBear + Hercules) * pricePerDay;
alert("$" + totalPrice)

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googlePay = prompt();
let amazonPay = prompt();
let facebookPay = prompt();
let googleHours = prompt();
let amazonHours = prompt();
let facebookHours = prompt();
let totalPayment = googleHours*googlePay + amazonHours*amazonPay + facebookHours*facebookPay;
alert ("Total payment is $" + totalPayment);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let classNotFull = confirm("Is space in the class?");
let notConflict = confirm("Schedule is not conflict.");
alert(classNotFull && notConflict);

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let notExpired = confirm("Offer active");
let PremiumMembers = confirm("Are you a Premiunm Menbers?");
let items = prompt("How many items did you buy?");
alert((parseFloat(items) > 2 || PremiumMembers) && notExpired);












