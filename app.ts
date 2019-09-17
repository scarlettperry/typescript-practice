console.log("It works!");

let age: number;
age = 1001;
// age = "1001";

// default name: any;
let firstName; 
firstName = "Scarlett";
firstName = false;

//it can hold any items, but has to be an array
let hobbies: any[] = ["netflix", "yelp", "travel"]
hobbies = [10];
// hobbies = 10;

// tuples - mixed types with limited number of items and fixed format
//tuple item-types must be in the same format as the type declaration
let address: [string, number] = ["Street", 100];
// address = [100, "Street"];

//enum - a variable that takes small set of possible values
enum Color {
    Gray,
    Green,
    Blue
}
let myColor: Color = Color.Green;
console.log(myColor);

//any - try to avoid this, gives up the advantages of typescript. better to give it a single type.
let car: any = "Toyota";
console.log(car);
car = {brand: "Toyota", series: 4};
console.log(car);

let myName: string = "Scarlett";
//function return value
function returnName(): string {
    return myName;
}
console.log(returnName())

//void - function should not return anything
function sayHello(): void{
    console.log("Hello")
}
sayHello()

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, "Scarlett"));
console.log(multiply(2,4));

//assign a variable to a function type
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(5,2));

//objects      assignging the property of the object
let userData: {name: string, age: number} = {
    name: "Scarlett",
    age: 1001
};

// userData = {
//     a: "Hello",
//     b: 22
// };

//type alias - create own type
                //holds array of #s, function with param that is boolean that returns an array of numbers
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [1, 2, 3],
    output: function(all: boolean): number[]{
        return this.data;
    }
};
console.log(complex2.data);

//union types - allowing multiple, specific types
let myRealAge: number | string = 1001;
myRealAge = "1001";
// myRealAge = false;

//check types
console.log(typeof myRealAge)
//can do conditional statements

//exercise

//before
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };

//after
let bankAccount: {money: number, deposit: (value: number) => void} = {
    money: 2000,
    deposit(value: number){
        this.money += value;
    }
};



