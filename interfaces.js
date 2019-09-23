"use strict";
//needs to have at least have a name key
function greetPerson(person) {
    console.log("Hello, " + person.name);
}
var person = {
    firstName: "Scar",
    age: 1001
};
function changeName(person) {
    console.log(person.firstName);
    person.firstName = 'Scarlett';
    console.log(person.firstName);
}
changeName(person);
var myDoubleFunction;
myDoubleFunction = function (number1, number2) {
    return (number1 + number2) * 2;
};
console.log(myDoubleFunction(10, 20));
