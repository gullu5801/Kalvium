const products = [
  { id: 1, name: "Laptop", price: 800, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 600, category: "Electronics" },
  { id: 3, name: "T-shirt", price: 20, category: "Clothing" },
  { id: 4, name: "Blender", price: 50, category: "Home Appliances" },
  { id: 5, name: "Jeans", price: 40, category: "Clothing" },
];

// Implement each function here

function filterByCategory(products, category) {
  // Use filter method here
  return products.filter(product => product.category === category);
}

function getProductNames(products) {
  // Use map method here
  return products.map(product => product.name);
}

function calculateTotalPrice(products) {
  // Use reduce method here
  return products.reduce((total, product) => total + product.price, 0);
}

function logProductDetails(products) {
//  Use the forEach method to iterate through the products array.
// - For each product, log the details to the console in the following format:
// - "Product Name: [name], Price: $[price], Category: [category]"
products.forEach(product => {
  console.log(`Product Name: ${product.name}, Price: $${product.price}, Category: ${product.category}`);
});
}

function getExpensiveProducts(products, minPrice) {
//   Use both filter and map HOFs.
// - First, use filter to find products where the price is greater than or equal to minPrice.
// - Then, use map to return an array containing only the product names of those filtered products.
return products
    .filter(product => product.price >= minPrice)
    .map(product => product.name);
}

console.log("--- Task 1: Electronics ---");
console.log(filterByCategory(products, "Electronics"));

console.log("\n--- Task 2: Product Names ---");
console.log(getProductNames(products));

console.log("\n--- Task 3: Total Price ---");
console.log(calculateTotalPrice(products));

console.log("\n--- Task 4: Product Details ---");
logProductDetails(products);

console.log("\n--- Task 5: Expensive Products (>= 50) ---");
console.log(getExpensiveProducts(products, 50));