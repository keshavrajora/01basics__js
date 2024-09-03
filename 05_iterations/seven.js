const myNumers = [1,2,3,4,5,6,7,8,9,10];

// const newNumers = myNumers.map((num) => num + 10)

// or //

// const newNumers = myNumers.map((num) => {
//     return num + 10
// })

            // or //

// const newNumers = myNumers.map((num) => {
//     if(num){
//         return num + 10
//     }
// })

         // or //

const newNumers = myNumers
                       .map((num) => num * 10)
                       .map((num) => num + 1)
                       .filter((num) => num >= 40);

console.log(newNumers);