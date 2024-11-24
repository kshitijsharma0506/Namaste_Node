
const {calculateSum, calculateMultiply} = require("./calculate/index");
const data = require("./data");

console.log(JSON.stringify(data))
const a=10;
const b=21;

console.log(global);
console.log(this); /// Empty Object 

console.log("Sum: " + calculateSum(a,b));
console.log("Multiplying: "+ calculateMultiply(a,b));