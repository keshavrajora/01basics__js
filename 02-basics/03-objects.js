// singleton

//object.create
//object literals
const mySum = Symbol("key1")

const JsUser = {
    name: "keshav",
    "full name": "keshav jangid",
    [mySum]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "keshav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["maoday", "tuesday"],
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySum]);

JsUser.email = "keshav@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "keshav@chrome.com";

// console.log(JsUser);

JsUser.greeting = function(){
      console.log("Hello js user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// console.table(JsUser);