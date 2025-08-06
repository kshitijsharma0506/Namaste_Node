//Destructure ing or Return Multiple variables {a,b}
const {calculateSum} = require('./sum');
const {calculateMultiply} = require('./multiply');

//Returns Single variable obj ==> obj.a or obj.b
// const {calculateSum, calculateMultiply} = require('./calculateSumMultiply');

module.exports = {calculateSum, calculateMultiply};

