# SmartPhone and MobileCampus Code-Along Assignment

Welcome to the mentor-led code-along! In this assignment, you will be working with a series of progressions to implement classes in JavaScript, specifically focusing on inheritance and method implementation. You will follow the four progressions outlined below to build a class hierarchy for `SmartPhone`, `AndroidPhone`, `IPhone`, and `MobileCampus`. 

Please follow the instructions carefully for each progression, and make sure to test your code using the provided test cases.

---

## Progression 1: SmartPhone

### Objective:
- Implement the `SmartPhone` class.
- Define the constructor for the class to accept parameters such as `model`, `price`, and `features`.
- Implement the `displayFeatures` method that prints all features of the smartphone.
- Implement the `remainingAmount` method that calculates and returns the remaining amount based on the price of the phone and the amount paid.

### Instructions:
1. Create the `SmartPhone` class.
2. Implement a constructor that initializes the model, price, and features.
3. Implement the `displayFeatures` method to log the features.
4. Implement the `remainingAmount` method to calculate the remaining amount after subtracting the amount paid (passed as a parameter to the method).

### Test Case Guidelines:
- **displayFeatures**: The method should print all the features of the smartphone in a readable format.
- **remainingAmount**: Ensure that the remaining amount is calculated correctly based on the total price and the paid amount.

---

## Progression 2: AndroidPhone

### Objective:
- Extend the `SmartPhone` class to create the `AndroidPhone` class.
- Implement the constructor, `displayFeatures`, and `remainingAmount` methods specific to the `AndroidPhone` class.

### Instructions:
1. Extend the `SmartPhone` class to create the `AndroidPhone` class.
2. Override the `displayFeatures` method to add Android-specific features.
3. Implement the `remainingAmount` method to handle price calculations, potentially with different parameters for Android phones.
4. The constructor should inherit from the `SmartPhone` constructor and should add any Android-specific properties.
5. It should return `Customer has remaining Rs.4000 after buying the android phone.`

### Test Case Guidelines:
- **displayFeatures**: The method should print the features of the Android phone along with the features from the `SmartPhone` class.
- **remainingAmount**: Make sure the remaining amount is calculated correctly for an Android phone, with proper inheritance of price from `SmartPhone`.

---

## Progression 3: IPhone

### Objective:
- Extend the `SmartPhone` class to create the `IPhone` class.
- Implement the constructor, `displayFeatures`, and `remainingAmount` methods specific to the `IPhone` class.

### Instructions:
1. Extend the `SmartPhone` class to create the `IPhone` class.
2. Override the `displayFeatures` method to add iPhone-specific features.
3. Implement the `remainingAmount` method to handle price calculations, potentially with different parameters for iPhones.
4. The constructor should inherit from the `SmartPhone` constructor and should add any iPhone-specific properties.

### Test Case Guidelines:
- **displayFeatures**: Ensure the features of the iPhone are displayed in a readable format, and include any features unique to iPhones.
- **remainingAmount**: Make sure the calculation for the remaining amount is correct for iPhones.

---

## Progression 4: MobileCampus

### Objective:
- Implement the `MobileCampus` class.
- Define the constructor and implement the `changeMobileAvailabilityNumber` method.

### Instructions:
1. Create the `MobileCampus` class with a constructor that accepts parameters such as `campusName` and `mobileAvailabilityNumber`.
2. Implement the `changeMobileAvailabilityNumber` method that allows the mobile availability number to be updated.

### Test Case Guidelines:
- **changeMobileAvailabilityNumber**: Ensure the method updates the mobile availability number correctly, and it is reflected when printed or accessed.

---

## How to Approach the Assignment

1. **Follow the Progressions**: Start with the `SmartPhone` class and complete each progression sequentially. This will ensure that you understand each step of the inheritance process and class construction.
   
2. **Test Your Code**: Use the test cases after completing each progression. The tests will ensure your implementation is correct and meets the specified requirements.

3. **Ask for Help**: If you get stuck at any point, feel free to ask your mentor for clarification. We are here to guide you through the process.

4. **Practice Inheritance**: Pay special attention to how the `AndroidPhone` and `IPhone` classes inherit from the `SmartPhone` class. The concept of inheritance is key to understanding how these classes interact.

---