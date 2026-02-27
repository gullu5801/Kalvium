let example = "example";
console.log(example[1]);
example[1]="u";
console.log(example);
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
console.log(su);

const multi = numbers.reduce((acc,n) => acc*n,1);
console.log(multi);

function fibonacci(n) {
  // 1. BASE CASE
  if (n < 2) {
    return n;
  }

  // 2. RECURSIVE STEP
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

console.log(fibonacci(6)); 

let a = 5;
let b = 1;
function sub(a,b){
    return a -b;
}
console.log(sub(5,3));

let arr = [];
const sum =  arr.map(a => a+a);
const even = arr.filter(a => a%2==0);

function squad119(sum){
    return squad119()
}