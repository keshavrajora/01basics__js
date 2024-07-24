let score = "keshav";

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; , false => 0;

let isLoggedIn = "keshav";

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "keshav" => true


// let someNumber = 33;
// let stringNumber = String(someNumber);  // Using String() function
// console.log(stringNumber);  // Output: "33"
// console.log(typeof stringNumber);

let someNumber = 33;
let stringNumber = someNumber.toString();  // Using .toString() method
console.log(stringNumber);  // Output: "33"

// *********************** Operations **********************

let value = 3;
let negValue = -value;
console.log(negValue);

// 2+2
// 2-2
// 2*2
// 2**2
// 2/2
// 2%2

let str1 = "hello";
let str2 = " world";

let str3 = str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(-false);

let gameCounter = 100;
gameCounter ++;
console.log(gameCounter);