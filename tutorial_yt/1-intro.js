const amount = 12;
if(amount > 10) {
  console.log("Amount is greater than 10");
} else {
  console.log("Amount is 10 or less");
}
console.log("This is the end of the script");


//CMD > node 1-intro.js
// Output:
// Amount is greater than 10
// This is the end of the script

console.log(__dirname); // Path to the current directory
console.log(__filename); // Name of the current file

setInterval(() => {
  console.log("Hello World");
}, 1000); // Logs "Hello World" every second