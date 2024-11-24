// IIFE (Immediately Invoked Function Expression) ==>
// An IIFE is a JavaScript function that runs as soon as it is defined.
// It has two major parts:
// 1. The function expression wrapped in parentheses ()
// 2. The immediate invocation operator () at the end
// Example:
// (function() {
//   // code here
// })();
// 
// IIFEs are useful for:
// - Avoiding global scope pollution
// - Creating private scope
// - Module patterns


// This code demonstrates an IIFE (Immediately Invoked Function Expression) 
// that creates a module-like structure

(function (require, exports, module) {
    // The function takes 3 parameters that mimic Node.js module system:
    // - require: for importing other modules
    // - exports: for exporting values
    // - module: for module-related properties
    
    // This require statement is incomplete/commented out
    require(//Path);
    const calculateMultiply =(a,b)=>{
        return(a*b);
    }
    module.exports = {calculateMultiply};
    
})(); // The parentheses () at the end immediately invoke the function

