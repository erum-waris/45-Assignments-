//14.. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Answer

let Guests : string[] = ["Zujajah" , "Umaimah" , "Hooriya"];
for (let guest of Guests) {
    
    console.log(`"Respected ${guest}"! \nI would like to invite you for a birthday party..\n \t "Thank you"! \n \t`)}
;

// for each method

Guests.forEach(guest => {
    console.log(`Dearest ${guest}! \n "I am inviting you for dinner tonight" \n \t'THANK YOU' \n`)
});
    
