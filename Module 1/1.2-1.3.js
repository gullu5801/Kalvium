let exmple = `somethingexample  of multiline`;

// console.log(exmple);

console.log(`${exmple}`);

// //Object Disjructing
// const user = {
//     id: 42,
//     username: "jdoe",
//     email: "jdoe@example.com"
// };

// // The variable names must match the object keys
// const { username, email } = user;

// console.log(username);

// const { email: userEmail } = user;
// console.log(userEmail); // "jdoe@example.com"

function sum(a, b) {
    return a + b;
}

function add(a) {
    return function (b) {
        return a + b;
    }
}


let somethingexample = "xyz"
console.log(somethingexample);
console.log(somethingexample[0]);
somethingexample[0] = "a";
console.log(somethingexample);

const n = [1, 2, 3, 4];
const into3 = n.map(a => a * a);
console.log(into3);
const filterInfo = into3.filter(a => a % 2 == 0);
console.log(filterInfo);

// array.reduce((accumulator, currentItem) => {
//     return ...;
// }, initialValue);

const numbers = [1, 2, 3, 4];
const su = numbers.reduce((acc, n) => acc + n, 0);
console.log(su)