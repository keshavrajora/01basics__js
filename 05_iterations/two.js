// while loop

// while loop

let index = 0;
while (index <= 10) {
    // console.log(`value of index ${index}`);
    index = index + 2
};


let myArray = ["false", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr++;
}



// const myArray = ["false", "batman", "superman"];
// while (myArray.length) {
//     console.log(`myArray: ${myArray}`);
//     myArray.pop();
    
// }
// console.log("Array is  new empty", myArray);


// do while loop

let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

const myArrays = ["false", "batman", "superman"];

do {
    console.log(`myArray: ${myArray}`);
    myArray.pop(); // Remove the last element of the array
} while (myArray.length > 0);

console.log('Array is now empty:', myArray);
