const numbers = process.argv.slice(2);
var minNumber = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${minNumber}`);