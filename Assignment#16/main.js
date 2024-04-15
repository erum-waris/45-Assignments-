"use strict";
//  Question # 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// Answer;
//  part 1;
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//                                                                         
let GuestList = ["Sehrish", "Ifrah", "Saira", "Anabiya"]; //printing message to each person by using for loop..
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Dear ${GuestList[i]}!  \n 'I am thrilled to inform you that i found a bigger table for Dinner at Resturant, Tonight..So please attend tonight's Dinner party with me.'\n "Thank you" `);
}
// part 2;
// • Add one new guest to the beginning of your array.
//Adding 1 item in th beginning by unshift method.
let Guest_List = ["Sehrish", "Ifrah", "Saira", "Anabiya"];
Guest_List.unshift("Maira");
console.log(Guest_List);
// part 3;
// • Add one new guest to the middle of your array.
Guest_List.splice(Math.floor(Guest_List.length / 2), 0, "Rania");
console.log(Guest_List);
// • Use append() to add one new guest to the end of your list.
let friends = ["Rania", "warda", "Amna", "Rabiya"];
friends.push("Iqra");
console.log(friends);
// part 3
// • Print a new set of invitation messages, one for each person in your list.
let Girls = ["Amal", "Afshan", "Humaira", "Maria", "Anamika", "Hoorain"];
//printing message to guests by using for each loop
Girls.forEach(Girls => {
    console.log(`Hey Dear ${Girls}! \n "I am Thrilled to invite you for a dinner, as i found a big dinner table . \n`);
});
