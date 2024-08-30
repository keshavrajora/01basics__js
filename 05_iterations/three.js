// for of loops

// ["", "", "", "", "",]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6];

for (let value of arr) {
    // console.log(value);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
    
}


// Maps

const map = new Map();
map.set('IN',"India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Red Dead Redemption 2',
    game3: 'Cyberpunk 2077'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } Error

for (const [key, value] of Object.entries (myObject)) {
    console.log(key, ':-', value);
}