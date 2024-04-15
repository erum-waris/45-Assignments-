"use strict";
//Q # 15 
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Answer
// First part....
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let Guest_list = ["Kanwal", "Huma", "Fatima", "Uroosa"];
for (let i = 0; i < Guest_list.length; i++) { //for loop is using for printing to each Guest
    console.log(`Dear ${Guest_list[i]}! \n Unfortunately,
    "I have heard that hina is not going to make dinner for us.\n "Thankyou" \n`);
}
;
//template literals are used to print message
//  second part 
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// the guest 
let absent_guest = "Hina";
console.log(`Hey ${absent_guest}! \n "You are not going to make dinner for your guests, it's unexpected."\n `);
// third part 
// / • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let Guest_list1 = ['Kanwal', 'Huma', 'Hina', 'Fatima', 'Uroosa'];
Guest_list.splice(2, 1, "Erum")[0]; //Replacing the name from Hina to Erum.
//by using splice method
// Fourth n part
// • Print a second set of invitation messages, one for each person who is still in your list/.
let newGuestList = ['Kanwal', 'Huma', 'Uroosa', 'Fatima', 'Erum'];
newGuestList.forEach(newGuestList => {
    console.log(`Dear ${newGuestList}! \n "I'm Ecstatic to invite you for a Dinner at "ZamZama" Resturant."\n "Thank you" \n`);
});
