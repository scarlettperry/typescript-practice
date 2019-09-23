                    //needs to have at least have a name key
function greetPerson(person: {name: string}) {
    console.log("Hello, " + person.name);
}

const person = {
    firstName: "Scar",
    age: 1001
};

// greetPerson(person);

//interface = contract to make sure a certain field is avaialble

//define how this contract should look like
interface NamedPerson {
    firstName: string
}

function changeName(person: NamedPerson){
    console.log(person.firstName);
    person.firstName = 'Scarlett';
    console.log(person.firstName);
}

changeName(person);

//interface and functions
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc

myDoubleFunction = function(number1: number, number2: number): number {
    return (number1 + number2) * 2
}

console.log(myDoubleFunction(10, 20));
