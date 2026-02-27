# Higher Order Functions Assignment

## Overview

- In this assignment, you will work with a list of products and use Higher Order Functions (HOFs) such as `map`, `filter`, `reduce`, `forEach` to process and manipulate data. 

- The tasks include filtering products by category, extracting product names, calculating total prices, logging product details, and finding expensive products.

- Go to app.js and complete the functions.

## Task 1: `filterByCategory(products, category)`

**Objective**:  
Complete the  function `filterByCategory` that filters products by their category.

### Expected Behavior:
- Input: An array of products and a string `category`.
- Output: An array of products that match the given category.

### Example:
# Higher Order Functions Assignment

## Overview

In this assignment, you will work with a list of products and use Higher Order Functions (HOFs) such as `map`, `filter`, `reduce`, `forEach` to process and manipulate data. The tasks include filtering products by category, extracting product names, calculating total prices, logging product details, and finding expensive products.

## Task 1: `filterByCategory(products, category)`
**Objective**:  
Write a function `filterByCategory` that filters products by their category.
### Expected Behavior:
- Input: An array of products and a string `category`.
- Output: An array of products that match the given category.

## Task 2: getProductNames(products)
**Objective:**
Write a function `getProductNames` that returns an array of product names.
- Use the map method to create a new array containing only the names of the products.
- The function will take in an array of products and should return an array of strings (product names).
```
Example:
getProductNames(products);
// Expected Output:
// ["Laptop", "Smartphone", "T-shirt", "Blender", "Jeans"]
```


## Task 3: calculateTotalPrice(products)
**Objective:**
- Write a function `calculateTotalPrice` that calculates the total price of all products.

**Instructions:**
- Use the reduce method to calculate the sum of all product prices.
- The function should return a single number representing the total price of all products combined.
```
Example:
calculateTotalPrice(products);
// Expected Output: 1510
```

## Task 4: logProductDetails(products)
**Objective:**
- Write a function logProductDetails that logs each product’s name, price, and category to the console.

**Instructions:**
- Use the forEach method to iterate through the products array.
- For each product, log the details to the console in the following format:
- "Product Name: [name], Price: $[price], Category: [category]"
```
Example:

logProductDetails(products);
// Expected Output in the console:
// Product Name: Laptop, Price: $800, Category: Electronics
// Product Name: Smartphone, Price: $600, Category: Electronics
// Product Name: T-shirt, Price: $20, Category: Clothing
// Product Name: Blender, Price: $50, Category: Home Appliances
// Product Name: Jeans, Price: $40, Category: Clothing
```

## Task 5: getExpensiveProducts(products, minPrice)
**Objective:**
- Write a function getExpensiveProducts that returns an array of product names where the price is greater than or equal to the specified minimum price (minPrice).

**Instructions:**

- Use both filter and map HOFs.
- First, use filter to find products where the price is greater than or equal to minPrice.
- Then, use map to return an array containing only the product names of those filtered products.

```
Example:
getExpensiveProducts(products, 50);
// Expected Output:
// ["Laptop", "Smartphone"]
```


For this assignment, you should use the following Higher Order Functions:
- map: Transforms an array by applying a function to each element.
- filter: Filters the array based on a condition.
- reduce: Reduces the array to a single value (in this case, total price).
- forEach: Executes a provided function once for each array element.
- every: Tests whether all elements in the array pass the provided condition.
- some: Tests whether some elements in the array pass the provided condition.
- find: Returns the first element that satisfies the condition.
- sort: Sorts the array based on a given condition (optional for this task but useful in future scenarios).