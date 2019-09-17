"use strict";
console.log("It works!");
var age;
age = 1001;
// age = "1001";
// default name: any;
var firstName;
firstName = "Scarlett";
firstName = false;
//it can hold any items, but has to be an array
var hobbies = ["netflix", "yelp", "travel"];
hobbies = [10];
// hobbies = 10;
// tuples - mixed types with limited number of items and fixed format
//tuple item-types must be in the same format as the type declaration
var address = ["Street", 100];
// address = [100, "Street"];
//enum - a variable that takes small set of possible values
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//any - try to avoid this, gives up the advantages of typescript. better to give it a single type.
var car = "Toyota";
console.log(car);
car = { brand: "Toyota", series: 4 };
console.log(car);
var myName = "Scarlett";
//function return value
function returnName() {
    return myName;
}
console.log(returnName());
//void - function should not return anything
function sayHello() {
    console.log("Hello");
}
sayHello();
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, "Scarlett"));
console.log(multiply(2, 4));
//assign a variable to a function type
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects      assignging the property of the object
var userData = {
    name: "Scarlett",
    age: 1001
};
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2.data);
//union types - allowing multiple, specific types
var myRealAge = 1001;
myRealAge = "1001";
// myRealAge = false;
//check types
console.log(typeof myRealAge);
