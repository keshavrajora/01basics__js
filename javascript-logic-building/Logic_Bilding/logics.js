// console.log('hello world');

// function sum(a,b) {
//    return a+b
// }
// console.log(sum(2,3));

//      //or

// function sum1(a,b) {
//     const sum = a + b;
//     console.log("Sum: ", sum);

// }
// sum1(2,3);
// sum1(2,4380540);
// sum1(2,-55);
// sum1(-232,-21323);
// sum1(-3232,3);

// function calculateArea(length, width){
//     if(length <= 0){
//         throw RangeError("Length should be a positive number");
//     }else if(width <= 0){
//         throw RangeError("width should be a positive number");
//     }
//     const area = length * width;
//     console.log("Area: ", area);
// }

// calculateArea(5, 10);
// calculateArea(-5, 10);
// calculateArea(-5, -10);
// calculateArea(5, -10);
// calculateArea(5, 0);
// calculateArea(0.1, 0.3);

// function checkNumber(num){
//     if(num % 2 === 0){
//         console.log(num, "is an even number");
//     }else{
//         console.log(num, "is an opp number");

//     }
// }

// checkNumber(2);
// checkNumber(3);

// function checkNumber(num){
//     switch (num % 2) {
//         case 0:
//             console.log(num, "is an even number");
//             break
//             case 1:
//                 console.log(num, "is odd number");
//                 break;
//         default:
//             console.log(num, "is not a number");
//     }
// }

// checkNumber(2);
// checkNumber(2);

// function checkNumber(num){
//     const result = num % 2 === 0 ? "even" : "odd";
//     console.log(num,"is an", result, "number");

// }
// checkNumber(2);
// checkNumber(3);

// function checkNumber(num) {
//   const result = ["even", "odd"];
//   console.log(num, "is an ", result[num % 2], "number");
  
// }
// checkNumber(2);
// checkNumber(5);


// write a function that finds and prints the smallest number among three give numbers.

// function findSmallestNumber(num1,num2,num3){
//     let smallest = num1;
//         if (num2 < smallest){
//             smallest = num2;
//         }if (num3 > smallest){
//             smallest = num3;
//         }
//         console.log("The smallest number is", smallest);
        
// }

// findSmallestNumber(10,5,8);
// findSmallestNumber(8,10,5)
// findSmallestNumber(10, 3, 7);

// or

function findSmallestNumber(num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }else if(num2 < num1 && num2 < num3){
        return num2;
    }else if(num3 < num1 && num3 < num2){
        return num3;
    }
    return num1;
}
console.log(findSmallestNumber(1,2,3));
console.log(findSmallestNumber(-1,-2,-3));
console.log(findSmallestNumber(10,232,332));
console.log(findSmallestNumber(2,2,2));


const number = [1,2,3,4,7,2,5,1,5,3,8,9,34,32];
number.sort((a,b)=> a-b);
console.log("sorted in ascending order: ", number);
