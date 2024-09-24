// Write a function that tells if a given number is even or odd 

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(isOddOrEven(2)); 
console.log(isOddOrEven(7)); 

function isNumber(num){
    const result = num % 2;
    if(result === 0 ){
        return "Even num"
    }else{
        return "ODD num"
    }
}
console.log(isNumber());

const rendomNum = 92;
if(rendomNum % 2 === 0){
    console.log("EVEN Number");
    
}else{
    console.log("ODD Number");
    
}

function OddEvenNum(num){
    return num % 2===0 ? "EVEN NUMBER" : "ODD NUMBER";
}
console.log(OddEvenNum(9));
console.log(OddEvenNum(2));

