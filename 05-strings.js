const myName = "keshav";
const repoCount = 50;

// console.log(myName + repoCount, "velue");

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const lastName = new String('jangid_rajora_khati');

console.log(lastName [0]);
console.log(lastName.__proto__);

// console.log(lastName.length);
// console.log(lastName.toUpperCase());
console.log(lastName.charAt(2));
console.log(lastName.indexOf('j'));

const newString = lastName.substring(0, 7)
console.log(newString);

const anotherString = lastName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    keshav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://keshav.com/keshav%20jangid";

console.log(url.replace('%20', '_'));

console.log(url.includes("keshav"));

console.log(lastName.split('_'));