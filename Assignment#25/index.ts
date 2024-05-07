//  Question # 25

/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/

// Answer
// part 1
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color : string[] = ["green" ,"yellow" , "red"];

// part 2 
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if( alien_color[0] === "green"){
    console.log("The player just earned 5 points");
}else{
    console.log("00 points");
    
};

// part 3
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.

let version : number = 1.0;
let version1 : number =2.0;
                                            // version checking with "AND &&" operator
if(version === 1.0 && version1 === 0.0){

    console.log(" Test passed"); 

}else{    
    console.log(" ' ' ");        // as test fails here output will be empty  
};
                    // version checking with "OR ||" operator
if( version === 0.0 || version1 === 2.0){

  console.log(" Test passed");      //test passed outpt will be shown
  
} else {
    console.log(" ' ' ");
    
}