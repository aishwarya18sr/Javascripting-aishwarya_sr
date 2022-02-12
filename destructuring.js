const userArray = process.argv.slice(2);
let user = {};
[,user.username, user.email] = userArray;
console.log(`{ username: \'${user.username}\', email: \'${user.email}\' }`);
