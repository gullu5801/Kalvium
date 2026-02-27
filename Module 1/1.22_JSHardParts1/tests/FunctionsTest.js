describe("Higher Order Functions Assignment", () => {

  const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 600, category: "Electronics" },
    { id: 3, name: "T-shirt", price: 20, category: "Clothing" },
    { id: 4, name: "Blender", price: 50, category: "Home Appliances" },
    { id: 5, name: "Jeans", price: 40, category: "Clothing" },
  ];

  // Test for filterByCategory
  describe("filterByCategory", () => {
    it("should return products of the specified category", () => {
      const result = filterByCategory(products, "Clothing");
      expect(result).toEqual([
        { id: 3, name: "T-shirt", price: 20, category: "Clothing" },
        { id: 5, name: "Jeans", price: 40, category: "Clothing" }
      ]);
    });

    it("should return an empty array for a non-existent category", () => {
      const result = filterByCategory(products, "Food");
      expect(result).toEqual([]);
      expect(filterByCategory.toString()).toContain('filter');
    });
  });

  // Test for getProductNames
  describe("getProductNames", () => {
    it("should return an array of product names", () => {
      const result = getProductNames(products);
      expect(result).toEqual([
        "Laptop", "Smartphone", "T-shirt", "Blender", "Jeans"
      ]);
      expect(getProductNames.toString()).toContain('map');

    });
  });

  // Test for calculateTotalPrice
  describe("calculateTotalPrice", () => {
    it("should return the total price of all products", () => {
      const result = calculateTotalPrice(products);
      expect(result).toBe(1510); // 800 + 600 + 20 + 50 + 40 = 1510
      expect(calculateTotalPrice.toString()).toContain('reduce');

    });
  });

  // Test for logProductDetails
  describe("logProductDetails", () => {
    it("should log product details to the console", () => {
      spyOn(console, 'log');
      logProductDetails(products);
      
      expect(console.log).toHaveBeenCalledWith("Product Name: Laptop, Price: $800, Category: Electronics");
      expect(console.log).toHaveBeenCalledWith("Product Name: Smartphone, Price: $600, Category: Electronics");
      expect(console.log).toHaveBeenCalledWith("Product Name: T-shirt, Price: $20, Category: Clothing");
      expect(console.log).toHaveBeenCalledWith("Product Name: Blender, Price: $50, Category: Home Appliances");
      expect(console.log).toHaveBeenCalledWith("Product Name: Jeans, Price: $40, Category: Clothing");
      expect(logProductDetails.toString()).toContain('forEach');

    });

  });

  // Test for getExpensiveProducts
  describe("getExpensiveProducts", () => {
   

    it("should return an empty array if no products meet the price criteria", () => {
      const result = getExpensiveProducts(products, 1000);
      expect(result).toEqual([]);
      expect(getExpensiveProducts.toString()).toContain('filter');



    });
  });

});