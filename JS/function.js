console.log("This is Js file for Function.");

let name1 = "Vikash";
let name2 = "Bhavesh";
let name3 ="Virat";
let name4 = "S Gill";

function greet(name) {
    console.log(name + " Good Morning");
    console.log(name + " is a good Player");
}

function sum(a,b,c) {
    let d = a+b+c;
    return d;
}

let result = sum(1,2,3);
console.log(result);


greet(name1);
greet(name2);
greet(name3);
greet(name4);