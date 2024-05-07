// Assignmnt # 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Answer

const Magicians :string[] =["Daniyal" , "Roy" , "Siegfried"]

//creating make_great function

function make_great(Magicians : string[] ) : string[]
{
        let greatMagicians :string[] = []
    for (const Magician of Magicians){

        greatMagicians.push(`${Magician} "The Great".`);
    }
    return greatMagicians;
    }

//creating show_magicians function

function show_magicians(Magicians:string[]){

    console.log(Magicians);
    
}

   

console.log("Original magicians:");
show_magicians(Magicians); // Shows original names

let greatMagicians = make_great(Magicians.slice()); // Creates a new modified array

console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names