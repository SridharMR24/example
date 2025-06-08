const readlineSync = require("readline-sync");

const userName = readlineSync.question("May i know your name?");

console.log(`Hi ${userName}`);
