// if
// <, >, <=, >=, ==, !=, ===

const inUserloggedIn = true;

if (2 != 3){
    // console.log("executed");    
}

const temperature = 41;
if(temperature === 41){
    console.log("less than 50");
}else{
    console.log("temperature is greaten than 50");
}


const score = 200;

if(score > 100){
    const power = "fly";
    console.log(`user power: ${power}`);    
}

let belance = 1000;

// if(belance > 500) console.log("test");

// if (belance < 500){
//     console.log("less than 500");
// }else if(belance < 750){
//     console.log("less than 750");
// }else if(belance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }


const inUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true; 

if(inUserLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy coures");   
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}