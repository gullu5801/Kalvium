/* =================================================
   Closures & Scope Assignment - Starter Code
   ------------------------------------------------
   Instructions:
   - Complete each TODO step carefully
   - Do NOT rename variables or functions
   - Do NOT change function signatures
   - Use closures (functions inside functions)
   - Return the exact strings expected by the tests
   ================================================= */

/* TODO 1:
   Create a global constant named NEG_INF
   - Set its value to -1000000
*/

const NEG_INF = -1000000

/* TODO 2:
   Define a function named createPop
   - It should accept two parameters:
     1. arrayOfNumbers (Array)
     2. itemToSearch (Number)
*/
function createPop(arrayOfNumbers, itemToSearch) {

  /* TODO 3:
     Create two variables in the local scope of createPop:
     - currIndex → initialize it to NEG_INF
     - check → initialize it to false
  */
  let currIndex = NEG_INF;
  let check = false;

  /* TODO 4:
     Create an inner function named searchForElement
     - This function should loop through arrayOfNumbers
     - If itemToSearch is found:
         - Update currIndex with the index
         - Set check to true
     - If not found:
         - Leave currIndex as NEG_INF
         - Leave check as false
  */
  function searchForElement() {

    // TODO
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] === itemToSearch) {
        currIndex = i;
        check = true;
        break;
      }
    }
  }

  /* TODO 5:
     Call the searchForElement function here
  */
 searchForElement()

  /* TODO 6:
     Return a function (closure) that:
     - Uses currIndex and check
     - If check is true, return:
       "The item is present and is at index ${currIndex}"
     - If check is false, return:
       "The item is not present and is at index ${currIndex}"
  */
       return function () {
         if (check) {
           return `The item is present and is at index ${currIndex}`;
         } else {
           return `The item is not present and is at index ${currIndex}`;
         }
       };

}
