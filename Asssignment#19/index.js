"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Answer
let Guests = ["Sir Zia Khan", "Sir Daniyal", "Sir Qasim", "Sir Ameen Alam"];
// using for of loop to print message for each person
for (let Guest of Guests) {
    console.log(` Respected ${Guest}! \n \t "You are invited for dinner at ZamZama.\n \t "THANK YOU" \n`);
}
console.log(`\n There are ${Guests.length} Guests in the list who are still invited for a dinner./t`);
