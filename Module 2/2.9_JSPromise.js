//Syntax
// varibles = new PromiseRejectionEvent((callbacks)=>){
//     async function;
// }


const deliveryPromise = new Promise((resolve, reject) => {
  const isRestaurantOpen = false;
  
  setTimeout(() => {
    if (isRestaurantOpen) {
      resolve("🍕 Pizza delivered successfully!");
    } else {
      reject("❌ Restaurant is closed");
    }
  }, 2000);
});

// Consuming the promise
deliveryPromise
  .then(message => console.log(message))
  .catch(error => console.error(error));

//Syntex async await
// async function functionName() {
//   try {
//     const result = await someAsyncFunction();
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data'); // Pauses here
        let data = await response.json(); // Pauses here
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
