// Assignment # 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Answer

let Magicians :string[] =["Paul Daniels" ,"Harry Houdini" ,"Siegfried" ,"Roy"]

function show_magicians(magician : string[]){
    Magicians.forEach(Magician => {
        console.log(`${Magician}`);
        
    });
}

show_magicians(Magicians);