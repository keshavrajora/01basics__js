// write a function that finds and prints the smallest number among three give numbers.

function findSmallestNumber(num1, num2, num3) {
  let smallest = num1;
  if (num2 < smallest) {
    smallest = num2;
  } else if (num3 < smallest) {
    smallest = num3;
  }
  console.log("The smallest number is:", smallest);
}
// findSmallestNumber(1, 4, 6);
// findSmallestNumber(5, 6, 4);
// findSmallestNumber(5, -6, 4);
// findSmallestNumber(5, -600, 4);
// findSmallestNumber(0, 5, -4);

function smallestNumber(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else if (num3 < num1 && num3 < num2) {
    return num3;
  }
}
console.log(smallestNumber(4, 5, 2));
console.log(smallestNumber(4, -5, 2));
console.log(smallestNumber(-4, 5, 2));

const number = [
  11, 32, 533, 1, 324, 324, 12, 12, 122, 32, 123, 3, 2, 111, 344, 5, 5, 44,
];
number.sort((a, b) => a - b);
console.log("sorted in ascending order: ", number);

function num(a, b, c) {
    
    const isSmallest = (a < b && a < c) || (b < a && b < c) || (c < a && c < b);
    console.log(isSmallest);
}

// Example usage
num(2, 3, 4); 
num(5, 1, 3); 
num(7, 9, 7); 
