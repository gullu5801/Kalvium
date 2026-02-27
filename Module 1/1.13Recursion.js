function first() {
    console.log("First function start");
    second();
    console.log("First function end");
}

function second() {
    console.log("Second function start");
    third();
    console.log("Second function end");
}

function third() {
    console.log("Third function start");
    console.log("Third function end");
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1)
}
console.log(factorial(5));


function sumofArray(arr) {
}
console.log(sumofArray([1, 2, 3, 4, 5]));

function sumOfDigits(n) {
}
console.log(sumOfDigits(123))

function reverseString(str) {
    return (str.length <= 1) ? str : str[str.length - 1]
        + reverseString(str.slice(0, -1));
}
console.log(reverseString("911 dauqS"));



// function sumOfDigits(n) {

//     if (n === 0) {
//         return 0;
//     }

//     const lastDigit = n % 10;

//     const remainingDigits = Math.floor(n / 10);

//     const recursiveSum = sumOfDigits(remainingDigits);

//     return lastDigit + recursiveSum;
// }

//return n < 1 ? 1 : n * factorial(n - 1)
//return arr.length <= 0 ? 0 : arr[0] + sumofArray(arr.slice(1))
//return n < 10 ? n : n % 10 + sumOfDigits(Math.floor(n / 10));
// return (str.length <= 1) ? str : str[str.length - 1]
//  + reverseString(str.slice(0, -1)); 