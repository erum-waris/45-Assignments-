"use strict";
//  Assignment # 27
Object.defineProperty(exports, "__esModule", { value: true });
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Answer
// part 1
// version # 1 if else chain for  Alien color green
let alien_color = "green";
if (alien_color == "green") {
    console.log('alien_color green: The player earned 5 points');
}
else if (alien_color == "yellow") {
    console.log(" The player earned 10 points");
}
else if (alien_color == "red") {
    console.log(" The player earned 15 points");
}
else {
    console.log(" you loose! try again");
}
// part 2
// version # 2 if else chain for  Alien color yellow
let alien_color1 = "yellow";
if (alien_color1 == "green") {
    console.log(' The player earned 5 points');
}
else if (alien_color1 == "yellow") {
    console.log("alien_color yellow: The player earned 10 points");
}
else if (alien_color1 == "red") {
    console.log(" The player earned 15 points");
}
else {
    console.log(" you loose! try again");
}
// part 3
// version # 3 if else chain for  Alien color red
let alien_color2 = "red";
if (alien_color2 == "green") {
    console.log(' The player earned 5 points');
}
else if (alien_color2 == "yellow") {
    console.log(" The player earned 10 points");
}
else if (alien_color2 == "red") {
    console.log("alien_color red: The player earned 15 points");
}
else {
    console.log(" you loose! try again");
}
// part 4
// version # 4 if else chain for  Alien color is not match and else block will run
let alien_color3 = "grey";
if (alien_color3 == "green") {
    console.log(' alien_color green: The player earned 5 points');
}
else if (alien_color3 == "yellow") {
    console.log("alien_color yellow: The player earned 10 points");
}
else if (alien_color3 == "red") {
    console.log(" alien_color red: The player earned 15 points");
}
else {
    console.log("alien_color not matched: you loose! try again");
}
