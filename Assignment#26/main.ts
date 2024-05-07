// Assignment # 26 

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

// Answer
// part 1
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color : string[] = [ "green" , "yellow" , "red"];

if( alien_color[0] === "green"){
    console.log( "Is alien_color green : The player just earned 5 points for shooting the alien.");
    
}else {
    console.log(
        " Have a nice day"
    );
    
} 

// part 2 

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.
if( alien_color[0] !== "green"){
console.log( " The player just earned 5 points") 
} else{
    console.log( "Is alien_color not green : The player earned 10 points for shooting the alien");
    
}