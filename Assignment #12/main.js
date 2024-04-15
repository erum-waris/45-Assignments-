"use strict";
// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person's name..
// Answer
let Cousins = ["Erum!", "Huma!", "Madiha!", "Kanwal!", "Uroosa!"];
console.log(Cousins[0], `\n "Assalam u alaikum! How are you?" \n`);
console.log(Cousins[1], `\n "Assalam u alaikum! How are you?" \n`);
console.log(Cousins[2], `\n "Assalam u alaikum! How are you?" \n`);
console.log(Cousins[3], `\n "Assalam u alaikum! How are you?" \n`);
console.log(Cousins[4], `\n "Assalam u alaikum! How are you?" \n`);
//Another method with for loop
let Brothers = ["Faisal", "Zeeshan", "Osama", "Umair"];
let message = ` \n " I'm inviting you ! i arranged a party please come at my home for Celebration". \n `;
for (let i = 0; i < Brothers.length; i++) {
    console.log(`Dearest Brother ${Brothers[i]}! `, message);
}
;
//  for each method
Brothers.forEach(brother => {
    console.log(`My Dearest Bro ${brother}!`, message);
});
