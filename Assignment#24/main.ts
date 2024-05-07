//  Assignment # 24

/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

// Answer

// part 1
//Tests for equality and inequality with strings

let myName : string = "Erum Waris";     // with father's name
let my_Name : string = "Erum Adil";     // with husband's name

console.log( "Equality checking :" ,myName === my_Name);       //false
console.log("Inequality checking :" ,myName !== my_Name);     // true

// part 2
// Tests using the lower case function

let lowerCase : string = "affan";
let upperCase : string = "AFFAN ";

console.log("Is LowerCase : 'affan' " , upperCase.toLowerCase() === lowerCase )   //true
console.log("Is lowerCase: 'affan' " , upperCase === lowerCase);                 //false

// part 3
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.

let a :number = 34;
let b :number = 23;
let c = b + a;

console.log("Is Greater than :" , a > b);       //true

console.log(" Is Less than :" , a < b);         //false

console.log("Is Greater than equal to : " , c >= a );    //true 

console.log("Is Less than equal to :" , c <= b);            //false

console.log(" Is Equal to :" , a === b);               //false

console.log(" Is Not Equal to :", c !== a );            //true

// part 4
// • Tests using "and" and "or" operators

let fruit : string = "Mango";

let Fruit : string = "Apple";

let Fruit1 : string = "Water Melon";
                                                                                //using if else statement 
                                                                                //  logical  opertors " AND && " ,"OR ||"
if( fruit === "Mango" && Fruit === "Apple" || Fruit1 === "Water Melon" ){
    console.log("Let's make milkshake");
    
}else{ console.log(" Drink water")};


// part 5
// • Test whether an item is in a array

let bucket : string[] = ["bottles" , "boxes" ,"shopping bags"] 

console.log("Item is in array/ bucket :" , bucket[1] === "basket ball");  // false

console.log("Item is in array/ bucket :" , bucket[2] === "shopping bags");   //true

// part 6
// • Test whether an item is not in a array

console.log("Item is not in  array/ bucket :" , bucket.includes("shopping bags"));   //true 

console.log("Item is not in array/ bucket :" , bucket.includes("bats"));   //false






 















 
