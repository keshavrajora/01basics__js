const userEmail = "";

if (userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, null, 0n, -0, BigInt, "", undefined, NaN

// const falsyValues = [false, 0, null, 0n, -0, BigInt, "", undefined, NaN];

// for(let i = 0; i < falsyValues.length; i++){
//     if(falsyValues[i]){
//         console.log(`Value ${falsyValues[i]} is truthy`);
//     }else{
//         console.log(`Value ${falsyValues[i]} is falsy`);
//     }
// }

// truthy values
// "0", "false", " ", [], {}, function(){}, 

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operators (??): null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 12 ?? 21;
console.log("value: ",val1);


// Terniary Operators 
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");
