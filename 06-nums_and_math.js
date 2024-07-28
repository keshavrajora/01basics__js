const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const num = 20000000;
console.log(num.toLocaleString('en-IN'));


// ************************************************ Maths **************************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.7));
console.log(Math.ceil(5.3));
console.log(Math.floor(5.9));
console.log(Math.min(4, 3, 6, 2, 9, 8));
console.log(Math.max(8, 2, 6, 2, 9, 3));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) +min);