
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "KESHAV",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// **************************************************************************************************************************

// stack (primitive), heap (non-primitive)

let  myIstaName = "keshav.j.009";
let anotherName = myIstaName;
anotherName = "keshav jangid"

console.log(myIstaName);
console.log(anotherName);

let userOne = {
    email: "kesh@gmail.com",
    upi: "keshav@upi.com",
}

let userTwo = userOne;

userTwo.email = "kesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);