let numbers = [1, 2, 3, 4, 5];


let squares = numbers.map(function(x) {
  return x * x;
});
console.log(squares);


// Create an anonymous function that takes
// two numbers as arguments and returns their product.
let aymulti = function(a,b){
    return a*b
}

let multiply = (a,b) => a*b;
console.log(multiply(5,10));

(function() {
  // Function logic here  
})();

let counter = (function() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
})();

counter()
counter()
counter()
console.log(counter());



// Challenge 1: Convert the following function to 
// an anonymous function:

function makeMeAnonymous(randomNumber) {
  return randomNumber * 100;
}

//Ans
let ch1 = a => a*100;
   

//console.log(makeMeAnonymous(2));

// Chalange 3 Your task is to use 
// Immediately invoked functions - in order to get 
// the following output:

// The value of i = 1
// The value of i = 2
// The value of i = 3
// The value of i = 4
// The value of i = 5

for(let i = 1;i<=5;i++){
    (function(argu){
        console.log("The value of i = ",argu)   
    }(i))
}

console.log("hello")
setTimeout(function(){
    console.log("hello")
},5000)
   