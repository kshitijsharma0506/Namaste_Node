// Multiple statements
const {calculateSum, calculateMultiply} = require("./calculate/index");

// Single statement
// const calculate = require("./calculate/index");
// const data = require("./data");

console.log(JSON.stringify(data))
const a=10;
const b=21;

console.log(global); // this is global object
console.log(this); /// Empty Object 

// Multiple statements
console.log("Sum: " + calculateSum(a,b));
console.log("Multiplying: "+ calculateMultiply(a,b));


// Single statement
// console.log("Sum: " + calculate.calculateSum(a,b));
// console.log("Multiplying: "+ calculate.calculateMultiply(a,b));

