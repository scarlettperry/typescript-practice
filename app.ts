console.log("It works!");

let age: number;
age = 1001;
// age = "1001";

// let myName; default myName: any;
// myName = "Scarlett";
// myName = false;

//it can hold any items, but has to be an array
let hobbies: any[] = ["netflix", "yelp", "travel"]
hobbies = [10];
// hobbies = 10;

// tuples - mixed types with limited number of items and fixed format
//tuple item-types must be in the same format as the type declaration
let address: [string, number] = ["Street", 100];
// address = [100, "Street"];