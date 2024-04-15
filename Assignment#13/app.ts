// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Answer

let Transportation : string[] = [
    "I would like purchase a BMW car" ,
     "I wanna gift Honda civic to my Mom" ,
      "My Son likes Honda 125 "];
      

 // for loop 
 
for ( let i = 0; i < Transportation.length ; i++){
    console.log( ` ${Transportation[i]} `);
};

// for of loop
let favouriteTransport : string[] = ['car' , 'bus' , 'Train' , 'bike'];
 for (let transport of favouriteTransport) {
    console.log(`I would like to own a ${transport}`)
     };