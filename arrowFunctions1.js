var inputs = process.argv.slice(2);
var result = inputs.map(word => word[0]).reduce((previous,current) => previous + current);
console.log(`[${inputs}] becomes \"${result}\"`);