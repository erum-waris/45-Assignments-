/*    Assignment no 17;

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/



// Answer ,, Part 1
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let friends :string[] =["Amna" , "Habiba" , "Raiqa"]
friends.forEach(Girl => {
    console.log(` ${Girl}! \n Unfortunately! I can't invite more than two guests.\n Thanks for your cooperation.\n`);

});


// adding 2 names by using unshift method.
friends.unshift("Nabeela","Maimoona");
console.log("updated guest list : ",friends);

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// print updated list.

//using pop method for removing items from an array

while (friends.length > 2) {
    let removeFriends : string | undefined = friends.pop();
    if (removeFriends !== undefined) {
        console.log(`Sorry! ${removeFriends} i can't invite you for dinner as th big table won't be arriving on time so i only can invite two friends for dinner see you next time.\n \t "THANK YOU" \n`)
    }
};
//Print a message to each of the two people still on your list, letting them know they’re still invited. 
for (let friend of friends) {
    console.log(`Excited to invite you for a dinner. \n Dear ${friend}! \n you are invited it will be great honour for me that you will join us on dinner tonight. \n \t`)
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//using splice method to remove the rest of names from the list

friends.splice(0 , friends.length);

console.log( "updated list:" ,friends);









