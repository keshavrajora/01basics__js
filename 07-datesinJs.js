// Dates

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(myDate.toJSON());

// const myCreatedDate = new Date(2024, 6, 30, 9, 45);
const  myCreatedDate = new Date("07-30-2024");
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

const newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.toLocaleString()} and the time`

newDate.toLocaleString('default',{
    weekday: 'long',
})

// console.log(newDate);