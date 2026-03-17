## Learning Goals
In this exercise, the aim is to understand the concept of custom hooks.

You can follow the links below - to get a better idea of custom hooks.

[Article on custom hooks Creating useFetch - custom hook](https://www.w3schools.com/react/react_customhooks.asp)
Task:
Your task is to create a custom hook called -> useStorage --> which stores the value typed in a text field, both into local storage and session storage.

Your ouptut would look something like below: Also, to check whether, your input is being stored or not, you can go to application tab and see the local storage and session storage, options -> like shown below.
![](https://kq-storage.s3.ap-south-1.amazonaws.com/fewd_v2/fewd+11.gif)

NOTE: Notice how, even after refreshing the page, the value in the text field, remains the same.
use `npm run test:serve` to visualise test cases.

##  Test Cases

| # | Test Case Description                                                               |
| - | ----------------------------------------------------------------------------------- |
| 1 | Returns the initial value when both localStorage and sessionStorage are empty       |
| 2 | Updates and stores the value in both localStorage and sessionStorage                |
| 3 | Retrieves the value from localStorage if it exists                                  |
| 4 | Retrieves the value from sessionStorage if localStorage is empty                    |
| 5 | Persists the stored value across component unmount and remount (refresh simulation) |



##  Constraints

* Do not rename the hook function
* Do not change function parameters
* Do not hardcode values
* Do not directly manipulate the DOM


##  Submission Guidelines

* Edit **only the `src/useStorage.jsx` file**
* Ensure:

  * No console errors
  * All test cases pass successfully
* Code should be:

  * Clean
  * Readable
  * Properly indented

Happy Coding ❤️!
 