// function sayMyName() {
//     console.log("K");
//     console.log("E");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("V");
// }
// sayMyName()

// function addTwoNumbers(number1, number2) {
//          console.log(number1 + number2);
// }
// addTwoNumbers(5, '10')

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}
const result = addTwoNumbers(5, 2);
// console.log("Result: ",  result);

function logingUserMessage(username = ("sam")){
    if(username === undefined) {
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(logingUserMessage("keshav"));
// console.log(logingUserMessage());

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(1));


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300,500,2000));



function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300,500,2000));


const userObject = {
    username: 'keshav',
    price: 299
};

function handleUserObject(user) {
    console.log(`username: ${user.username}, and price is ${user.price}`);
}

// handleUserObject(userObject);

handleUserObject({
    username: "sam",
    price: 599,
});

const myNewArray = [200,300,499,699,999];

function returnSecondValue(getArray){
    return getArray[4]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,599,899,988,1999,20000]));