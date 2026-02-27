// console.log("Hello World!");
// document.write("Hello World!");

var a = 10;
console.log(a);
console.log(typeof a);

console.log("------------------")
a = "Hello World!";
console.log(a);
console.log(typeof a);

console.log("------------------")
a = true;
console.log(a);
console.log(typeof a);

console.log("------------------")
a = null;
console.log(a);
console.log(typeof a);

console.log("------------------")
a = undefined;
console.log(a);
console.log(typeof a);

var sayHello = function() {
    console.log("Hello World!");
}

console.log("------------------")
var numArray = [1, 2, 3, 4, 5];
console.log(numArray);
console.log(typeof numArray);

console.log("------------------")
var array=new Array("cat","dog","rabbit");
console.log(array);
console.log(typeof array);

console.log("------------------")
var person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);
console.log(typeof person); 

console.log("------------------")
const symbol = Symbol("unique");
console.log(symbol);
console.log(typeof symbol);

console.log("------------------")
const symbol2 = Symbol("unique");
if (symbol === symbol2) {
    console.log("Symbols are equal");
} else {
    console.log("Symbols are not equal");
}

var a = 10, b = 20, c = 30, linebreak = "<br>";

document.write("a+b+c= ");
document.write(a + b + c);
document.write(linebreak);

document.write("a x b x c= ");
document.write(a * b * c);
document.write(linebreak);

document.write("a/b/c= ");
document.write(a / b / c);
document.write(linebreak);

document.write("a-b-c= ");
document.write(a - b - c);
document.write(linebreak);

document.write("a%b%c= ");
document.write(a % b % c);
document.write(linebreak);

document.write("a++ + b++ + c++= ");
document.write(a++ + b++ + c++);
document.write(linebreak);