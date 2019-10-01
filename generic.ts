
//*infers* the type by the type of the argument
//make code flexible but still type checks
function echo<T>(data: T){
    return data;
}

console.log(echo("hello"));
console.log(echo("hello").length);
console.log(echo({name: "your name", age: "your age"}));
// console.log(echo(27).length); <- get typescript compiler error; can't call length on a number

function print<T>(args: T[]){
    args.forEach((element) => console.log(element));
}
// print("hello"); <-- get compiler error
print(["apples", "bananas"]);
print<number>([1,2,3]);
