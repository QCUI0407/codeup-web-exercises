"use strict";

// var car = new Object();
// let cup = new Object();

//object literal notation
// let car = {};

// console.log(typeof car);
// "object"

// let book = {};
// book.title = "Berserk";
// book.author = "Kentaro Miura";
// book.title = "Berserk Deluxe vol.4";
// book["volumes"] = 4;
// let publishedWorks = {
//     bookTitles: ["Berserk", "Vagabond"]
// }
//
// let authorObj = {
//     name: "Kentaro Miura",
//     works: publishedWorks
// }
//
// let bookTitle = prompt("Enter book title");
// let book = {
//     title: bookTitle,
//     author: authorObj,
//     volume: 4
// };
//
// console.log(book.title);
// console.log(book["title"]);
// console.log(book.author.name)
// console.log(book);
// console.log(book.author.works.bookTitles)

// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

var car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();