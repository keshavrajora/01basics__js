import * as _ from 'lodash';

const arr = [
    {
        name: "John",
        age: 20,
        mk: 25,
        contact: [{
            email: "john@example.com",
            phone: "123-456-7890",
            address: [{
                street: "123 Elm St",
                city: "New York",
                state: "NY",
                zip: "10001"
            }]
        }],
        hobbies: ["Reading", "Cycling"],
        profession: [{
            title: "Student",
            major: "Computer Science"
        }]
    },/*  */
    // {
    //     name: "golu",
    //     age: 24,
    //     mk: 22,
    //     contact: [{
    //         email: "golu@example.com",
    //         phone: "234-567-8901",
    //         address: {
    //             street: "456 Oak St",
    //             city: "Los Angeles",
    //             state: "CA",
    //             zip: "90001"
    //         }
    //     }],
    //     hobbies: ["Photography", "Traveling"],
    //     profession: {
    //         title: "Graphic Designer",
    //         company: "Creative Co."
    //     }
    // },
    // {
    //     name: "aadhya",
    //     age: 25,
    //     mk: 32,
    //     contact: [{
    //         email: "aadhya@example.com",
    //         phone: "345-678-9012",
    //         address: {
    //             street: "789 Pine St",
    //             city: "Chicago",
    //             state: "IL",
    //             zip: "60601"
    //         }
    //     }],
    //     hobbies: ["Cooking", "Gardening"],
    //     profession: {
    //         title: "Data Scientist",
    //         company: "Tech Solutions"
    //     }
    // },
    // {
    //     name: "keshav",
    //     age: 25,
    //     mk: 29,
    //     contact: [{
    //         email: "keshav@example.com",
    //         phone: "456-789-0123",
    //         address: {
    //             street: "101 Maple St",
    //             city: "Houston",
    //             state: "TX",
    //             zip: "77001"
    //         }
    //     }],
    //     hobbies: ["Gaming", "Music"],
    //     profession: {
    //         title: "Software Engineer",
    //         company: "Innovatech"
    //     }
    // },
];


const arr1 = _.flatMap(arr,data =>
     _.map(data.profession,'title')
);
arr1
// const hobbies = _.flatMap(arr, person => person.hobbies);

// console.log(hobbies);
    

// const arr1 = _.flatMapDeep(arr, data => {
//     return _.flatMapDeep(data.contact, data=>{
//       return _.flatMapDeep(data.address,add=>{
//         return add.zip
//       })
//     })
//   });
// arr1

// const arr1 = arr.flatMap(person => person.contact.map(contact => contact.address));
// const arr2 = arr.flatMap(person => person.address.map(address => address.zip));
// console.log(arr1);


// const arr1 = arr.map((val)=> {
//     return val.contact.map((contact)=>
//     {
// return contact.address.map((address)=>
// {
// return address.zip
// })
//     })
    

    

// })

// const data = arr.flatMap((val)=>{
// return val.contact.map((contact)=>{
// return contact.address.

// })
// })

// arr1
// console.log(arr1);

// data

