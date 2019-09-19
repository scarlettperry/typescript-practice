//arow functions

// const multiplyNUmbers = (number1: number, number2: number) => {
//     return number1 * number2;
// }

//short syntax for ^
const multiplyNUmbers = (number1: number, number2: number) => number1 * number2;

console.log(multiplyNUmbers(10,3));

//default parameter

const countdown = (start: number = 10): void => {
    console.log(start)
    while (start > 0){
        start--;
    }
    console.log("done", start)
};
countdown(100);

//destructuring arrays
const myHobbies = ["Netflix", "Travelling"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// short syntax for ^
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

//destructuring objects
const data = {userName: "scarpy", userAge: 1001};
//has to be the same name as object keys or need to reassign name ex userName: myName
const {userName, userAge} = data;
console.log(userName, userAge);

//exercies - Re-write the below Code using the ES6 Features you learned throughout this Module.
// var double = function(value) {
//     return value * 2;
// };
// console.log(double(10));

const double = (value: number): number => {
    return value * 2;
};

console.log(double(10));

// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet();
// greet("Anna");

const greet = (name: string = "Max"): void => {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);

const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);

const scientist = {firsttName: "Will", experience: 12};
const {firsttName, experience} = scientist;
console.log(firsttName, experience);



