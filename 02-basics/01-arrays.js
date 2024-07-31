// // array 

// const myArr = [1, 2, 3, 4, 5, 6,];
// console.log(myArr[1]);

// // array methods 

// const arr = [1, 2, 3, 4, 5,];
// arr.push(6);
// arr.pop(); // last value is removed from array
// arr.unshift(9)// fist value add to array
// arr.shift(); // first value is removed from array

// console.log(arr);
// console.log(arr.includes(2)); // true and false values
// console.log(arr.indexOf(9)); 

// const newArr = arr.join()
// console.log(arr);
// console.log(newArr);  // not a array format , string type array format

// // slice , splice      (Most inpotent)

const arrs = [0, 1, 2, 3, 4, 5, 6,];

console.log("A ", arrs);

const mynew1 = arrs.slice(1, 3);

console.log(mynew1);
console.log("B ", arrs);

const mynew2 = arrs.splice(1, 3);

console.log("c ", arrs);
console.log(mynew2);