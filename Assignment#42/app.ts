// Assignment # 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Answer
function make_great(magicians:string[]){
    magicians.forEach(magician => {
        console.log(` Great magician ${magician}!\n You have a power to show your talent and i impressed.`);
        
    });   
};
let magicians :string[]=["Seigfied" ,"Roy" ,"Dynamo" ,"Derren Brown"];   

function show_magicians(magicians:string[]){

    
    for (let index = 0; index < magicians.length; index++) {
    console.log(magicians[index]);
    
        
    }
}       

make_great(magicians)         //modified th original array
show_magicians(magicians)       //modified original array