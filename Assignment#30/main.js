"use strict";
// Assignment # 30
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
// Answer
// part 1
let users = ["Admin", "username1", "username2", "username3", "username4"];
users.forEach(user => {
    if (user === "Admin") {
        console.log(" Hello Admin! Would you like to see a status report?");
    }
    else {
        console.log(` HI ${user}! "Thank you for logging in  again."`);
    }
});
let usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach((username) => {
    if (username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for loggin in again.`);
    }
});