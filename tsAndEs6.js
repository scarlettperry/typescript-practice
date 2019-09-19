"use strict";
//arow functions
// const multiplyNUmbers = (number1: number, number2: number) => {
//     return number1 * number2;
// }
//short syntax for ^
var multiplyNUmbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNUmbers(10, 3));
//default parameter
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("done", start);
};
countdown(100);
//destructuring arrays
var myHobbies = ["Netflix", "Travelling"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// short syntax for ^
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//destructuring objects
var data = { userName: "scarpy", userAge: 1001 };
//has to be the same name as object keys or need to reassign name ex userName: myName
var userName = data.userName, userAge = data.userAge;
console.log(userName, userAge);
//exercies - Re-write the below Code using the ES6 Features you learned throughout this Module.
// var double = function(value) {
//     return value * 2;
// };
// console.log(double(10));
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);
var scientist = { firsttName: "Will", experience: 12 };
var firsttName = scientist.firsttName, experience = scientist.experience;
console.log(firsttName, experience);
