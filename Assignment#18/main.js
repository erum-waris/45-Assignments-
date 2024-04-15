"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
// Answer..
// part ( 1 )
// Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
let placeToVisit = ["Skardu", "NathiaGali", "Switzerland", "Makkah", "Madina"];
console.log("Original array :", placeToVisit);
// part ( 2 )
// • Print your array in alphabetical order without modifying the actual list.
let places = placeToVisit.slice().sort();
console.log("Alphabetical order:", places);
// part ( 3 )
// • Show that your array is still in its original order by printing it.
console.log("Original Array:", placeToVisit);
// part ( 4 )
// Print your array in reverse alphabetical order without changing the order of the original list.
let reverseOrder = placeToVisit.slice().sort().reverse();
console.log("Reversed Alphabetical Order:", reverseOrder);
// part ( 5 )
//Show that your array is still in its original order by printing it again.
console.log("Original Array:", placeToVisit);
// part ( 6 )
// • Reverse the order of your list reversed . Print the array to show that its order has changed.
console.log("reverse order has changed ");
placeToVisit.reverse();
console.log("Changed List:", placeToVisit);
// part ( 7 )
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
let reverseList = placeToVisit.reverse();
console.log("Again Original Order:", reverseList);
// part ( 8 )
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical Order:", placeToVisit.sort());
// part ( 9 )
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("Reverse Order:", placeToVisit.sort().reverse());
