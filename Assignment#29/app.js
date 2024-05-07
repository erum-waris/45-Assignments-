"use strict";
// Assignment # 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// Answer
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Mango", " Guava", "Pomegranate"];
if (favorite_fruits.includes("Mango")) {
    console.log(" I really like Mangoes.");
}
else if (favorite_fruits.includes("Guava")) {
    console.log(" I like Guava. ");
}
else if (favorite_fruits.includes("Pomegranate")) {
    console.log(" I am into it.");
}
else if (favorite_fruits.includes("black grapes")) {
    console.log(" This is not my cup of tea.");
}
