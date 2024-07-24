const accountId = 12345678;
let accountEmail = "yashrajora@gmail.com";
var accountPassword = "88738";
accountCity = "jaipur";
accountEmail = "keshav@gmail.com";
accountPassword = "8738298"
accountCity = "Bengaluru";
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

const  profile= {
     accountId : 12345678,
     accountEmail : "yashrajora@gmail.com",
     accountPassword : "88738",
     accountCity : "jaipur",
     myAge : 19,
}
console.table([profile])