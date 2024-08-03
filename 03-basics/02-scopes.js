// var c = 3000;

let a = 2000;

if (true){
    const a = 10;
    let b = 20;
    var c = 30;

    // console.log("INNER: ",  a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "keshav";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    // two();
     
}

// one();

if (true){
    const username = "keshav";
    if(username === "keshav"){
        const website = " https://youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

console.log(addone(2));
function addone(num){
    return num + 1;
}


const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(3));