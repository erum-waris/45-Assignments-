"use strict";
//  Question # 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Answer
//  person's name in lower case
let personName = "ABDUL RAHEEM";
console.log("toLowercase:", personName.toLowerCase());
// Person's name in upper case
let person_name = "Muhammad Affan";
console.log("toUppercase:", person_name.toUpperCase());
// Person's name in Titlecase
let PersonName = "adil";
console.log("TitleCase:", PersonName.charAt(0).toUpperCase() + PersonName.slice(1).toLowerCase());
// another method for Title Case
let sentence = "this is my book ";
// step 1
let words = sentence.split(" ");
//  step2
let titlecaseName = " ";
// step 3  using for loop
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    console.log(titlecaseName);
}
;
