// Assignment # 34 

/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/

// Answer
const birds : string[] =["Pigeon" , "Parrot" , "Sparrow"];

for (const bird of birds) {
    console.log(`${bird}`);    
};

birds.forEach(bird => {
    console.log(`A ${bird} would make environment cheerful.`);
    
});console.log("All birds may have flown out of our house , but the sweet \n",
             "memories of it's gentle ,chirps and gracefull",
            "will presence forever remain in our heart!!");
