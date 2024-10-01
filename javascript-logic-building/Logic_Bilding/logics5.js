// Write a function that and print the maximun element in an array of number.

function findTheBiggestNumber(arrayOfNumber){
     if(!arrayOfNumber || arrayOfNumber.length === 0){
        throw new Error("we need some  number in the array!")
     }

    let biggestNumber = arrayOfNumber[0];
    for (let i = 1; i < arrayOfNumber.length; i++) {
if(arrayOfNumber[i] > biggestNumber){
    biggestNumber = arrayOfNumber[i];
}        
    }
return biggestNumber;    
}
// console.log("[7,7,9,8,8,8] = ",findTheBiggestNumber([7,7,9,8,8,8]));
// console.log("[80,99,88,96] = ",findTheBiggestNumber([80,99,88,96]));
// console.log("[775,944,857] = ",findTheBiggestNumber([775,944,857]));
// console.log("[55,43,67,43] = ",findTheBiggestNumber([55,43,67,43]));
// console.log("[4343,6785,897,5674] = ",findTheBiggestNumber([4343,6785,897,5674]));
// console.log(" = ",findTheBiggestNumber( ));
// console.log("null = ",findTheBiggestNumber(null ));
 

//////////// or /////////////////

function findTheBiggestNumber2(arrayOfNumber){
    const maxNumber = Math.max(3,4,6);
    console.log(maxNumber);
    
}
findTheBiggestNumber2([])