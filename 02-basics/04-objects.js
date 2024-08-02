// const tinderUser = new Object()
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "keshav";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "keshav1234@gmail.com",
    fullName: {
        userFullName: {
            firstname: "keshav",
            lastname: "jangid",
        }
    }
}
// console.log(regularUser.fullName.userFullName.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2, obj3,}
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);

const user = [
    {
        id: "123abc",
       email: "k123@gmail.com",
    },
    {
        id: "123abc",
       email: "k123@gmail.com",
    },
    {
        id: "123abc",
       email: "k123@gmail.com",
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "599",
    courseInstructor: "keshav",
}
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "keshav",
//     "coursename": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {},
]