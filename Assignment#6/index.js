"use strict";
// Question 6
// 6 .Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Answer
let person_name = ` \t Erum Adil \n `;
console.log(person_name);
let stripped = person_name.trim();
console.log("My name is :", stripped);
// STRIPPING Method;
// let Person-Name ="    \t ERUM WARIS \n    "  ;
// console.log("Name With Whitespaces:", Person-Name);
// let strippedName =  Person-Name .trim();
// console.log("Stripped Name:", strippedName);
