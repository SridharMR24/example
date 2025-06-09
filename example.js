// console.log("2">"3");
// console.log("mango">"banana");
// console.log(null == undefined);
// console.log(undefined === null);
// console.log(null < 1);

const firstname = "Sridhar"
const nickname = ""
const username = firstname && nickname && "hi";
console.log(`Name - ${username}`);

const firstName = ""
const nickName = ""
const userName = firstName || nickName || null;
console.log(`Name - ${userName}`);