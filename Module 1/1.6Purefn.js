//1. Dependency on Global State

let taxRate = 0.2;

const calculateTax = (amount) => {
    return amount * taxRate;
};
`
A.
Pure, because it does not modify the 'tax' variable.

B.
Impure, because it performs a mathematical operation.

C.
Pure, because it always returns a number.

D.
Impure, because it relies on the external variable 'tax'.
`

//2. Modifying External State

let count = 0;

const increment = () => {
    count++;
    return count;
};

//3. Mutating Arguments

const addItem = (cart, item) => {
    cart.push(item);
    return cart;
};

//4. Console Logging (Side Effect)

const multiply = (a, b) => {
    console.log(a * b);
};

`
5. Which of the following is considered a Side Effect?

A.
Returning a calculated value.

B.
Modifying the DOM (e.g., changing innerHTML).

C.
Calling another pure function.

D.
Creating a local variable inside the function.
`