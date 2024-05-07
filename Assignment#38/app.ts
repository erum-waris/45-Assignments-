// Assignment # 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// Answer

function describe_city(country:string="pakistan",
                        city:string="karachi",
                        message:string="it is located in") {
    console.log(`${country} has populated city, ${city} , ${message} ${country}.`);
    
} 
describe_city()   // default values+

describe_city( "Switzerland","Chur")       // default message

describe_city( "London" , "Newham","This city is located in") //custom value

describe_city( "Saudi Arabia" , "Makkah")  //default message