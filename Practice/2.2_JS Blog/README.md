## Objective:
The goal of this assignment is to practice working with JavaScript classes and DOM manipulation. You will implement two methods, addTitle() and addDescription(), in the Blog class, which will dynamically add an h1 and a p element to the DOM when called. This will allow you to understand how to interact with HTML elements using JavaScript and modify the webpage content.


## Setting up the Blog Class:
- The Blog class is already provided with a constructor that initializes title and detail properties. You need to complete the two methods: addTitle() and addDescription().
- addTitle() should create an h1 element, set its id to blog-title, and set its inner HTML to the title property of the instance.
- addDescription() should create a p element, set its id to blog-description, and set its inner HTML to the detail property of the instance.

## DOM Manipulation:
- When either of these methods is called, they should append the created elements to an existing container in the DOM with the id of card-text. 
- Ensure that the content of the h1 and p elements matches the values passed to the Blog constructor.
- Helper Functions: You will also see the helperAddPost() function in the boilerplate code, which toggles the visibility of an element with the ID popupContact. 
- This function is unrelated to the task at hand but can be used for further interaction if needed.

## Testing:
- Jasmine tests are provided to validate your implementation. Ensure that your methods pass the following tests:

- When addTitle() is called, an h1 element should be created with the correct title.
- When addDescription() is called, a p element should be created with the correct description.

## Additional Function:
- An empty helperPost() function is provided, but it is not part of this assignment. - You can add your own code to this function if required, but it is not necessary for completing the task.

## Approach:
- Focus on understanding how to create elements dynamically using JavaScript and how to manipulate the DOM by appending child elements.
- Use document.createElement() to create the elements (h1 and p).
- Modify the inner HTML of these elements to display the title and detail values from the Blog class.
- Use document.getElementById('card-text').appendChild() to append the newly created elements to the DOM.


## Assignment Deliverables:
- Complete the addTitle() and addDescription() methods.
- Ensure that your code passes the provided Jasmine test cases.
- Submit the file with the completed Blog class.
