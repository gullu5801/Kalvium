// --------------------------------------------------
// Crypto Price Tracker - Starter Code
// --------------------------------------------------
//
// 👉 Instructions for Students:
// - You should ONLY edit this file (app.js)
// - Do NOT change function names or UI structure
// - Follow the TODO comments carefully
// - Your goal is to make all Jasmine tests pass
//
// --------------------------------------------------

// API Endpoint (Already provided – do NOT change)
const apiUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";

// --------------------------------------------------
// TODO 1️⃣: Fetch crypto prices using fetch()
// --------------------------------------------------
async function fetchCryptoPrice() {
  try {
    console.log("Fetching data using fetch...");

    // TODO:
    // 1. Use fetch() to call the API (apiUrl)
    // 2. Store the result in a variable called `response`
    // 3. Use await

    // const response = ???
    const response = await fetch(apiUrl);

    // ❗ This check is already written for you
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // TODO:
    // 4. Convert the response to JSON
    // 5. Store it in a variable named `cryptoPrices`

    // const cryptoPrices = ???
    const cryptoPrices = await response.json();

    // TODO:
    // 6. Log the following exactly in console:
    // "Fetch response:", cryptoPrices

    // console.log(???)
    console.log("Fetch response:", cryptoPrices);

    // ❗ Validation check (already provided)
    if (!cryptoPrices.bitcoin || !cryptoPrices.ethereum) {
      throw new Error("Invalid API response from fetch.");
    }

    // TODO:
    // 7. Call updateUI()
    //    - Pass cryptoPrices
    //    - Pass the string: "Fetched using fetch()"

    // updateUI(???)
    updateUI(cryptoPrices, "Fetched using fetch()");

  } catch (error) {
    console.error("Fetch API Error:", error);

    // ❗ Error UI is already handled
    document.getElementById("cryptoData").innerHTML =
      `<p style="color: red;">Error fetching data using fetch.</p>`;
  }
}

// --------------------------------------------------
// TODO 2️⃣: Fetch crypto prices using Axios
// --------------------------------------------------
async function axiosCryptoPrice() {
  try {
    console.log("Fetching data using Axios...");

    // TODO:
    // 1. Use axios.get() to call the API (apiUrl)
    // 2. Store the result in a variable called `response`
    // 3. Use await
    const response = await axios.get(apiUrl);

    // const response = ???

    // ❗ Validation check (already provided)
    if (!response.data || !response.data.bitcoin || !response.data.ethereum) {
      throw new Error("Invalid API response from Axios.");
    }

    // TODO:
    // 4. Log the following exactly in console:
    // "Axios response:", response.data

    // console.log(???)
    console.log("Axios response:", response.data);

    // TODO:
    // 5. Store response.data in a variable called `cryptoPrices`

    // const cryptoPrices = ???
    const cryptoPrices = response.data;

    // TODO:
    // 6. Call updateUI()
    //    - Pass cryptoPrices
    //    - Pass the string: "Fetched using Axios"

    // updateUI(???)
    updateUI(cryptoPrices, "Fetched using Axios");

  } catch (error) {
    // ❗ Error handling intentionally left minimal
    // Students do NOT need to modify this
  }
}

// --------------------------------------------------
// UI Update Function (Already completed – DO NOT edit)
// --------------------------------------------------
function updateUI(cryptoPrices, method) {
  console.log(`Updating UI with: ${method}`);
  document.getElementById("cryptoData").innerHTML = `
      <p>${method}</p>
      <p>Bitcoin Price: $${cryptoPrices.bitcoin.usd}</p>
      <p>Ethereum Price: $${cryptoPrices.ethereum.usd}</p>
  `;
}

// --------------------------------------------------
// Event Listeners (Already completed – DO NOT edit)
// --------------------------------------------------
document.getElementById("fetchBtn").addEventListener("click", fetchCryptoPrice);
document.getElementById("axiosBtn").addEventListener("click", axiosCryptoPrice);
