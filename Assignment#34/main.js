"use strict";
// Assignment # 34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
// Answer
// creating  array for pizza names then using loop for printing name of each
const fav_pizzas = ["Chicken fajita pizza",
    "Chicken cheese burst pizza",
    "Pizza burger"];
for (let i = 0; i < fav_pizzas.length; i++) {
    console.log(`${fav_pizzas[i]}`);
    ;
}
;
for (let i = 0; i < fav_pizzas.length; i++) {
    console.log(`${fav_pizzas[i]} is my favourite,I really like it.`);
    ;
}
;
console.log("1) I like to eat pizza everyday.\n", "2) I like every flavoured pizza.\n", "3) i like to eat spicy flavoured pizza.\n", "4) I love pizza.");
