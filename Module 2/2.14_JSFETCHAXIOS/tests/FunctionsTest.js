describe("Crypto Price Fetching and UI Update", function () {

  it("should fetch crypto prices using fetch() and update the UI correctly", function (done) {
      const apiURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";

      // Simulate API fetch request
      fetch(apiURL)
          .then(response => response.json())
          .then(cryptoPrices => {
              // Call the student's function
              fetchCryptoPrice();

              // Wait for the DOM update
              setTimeout(() => {
                  const cryptoData = document.getElementById("cryptoData").innerHTML;

                  expect(cryptoData).toContain(`Bitcoin Price: $${cryptoPrices.bitcoin.usd}`);
                  expect(cryptoData).toContain(`Ethereum Price: $${cryptoPrices.ethereum.usd}`);
                  expect(cryptoData).toContain("Fetched using fetch()");

                  done();
              }, 2000); // Wait for fetch to complete and update the DOM
          })
          .catch(error => {
              fail(`API Fetch failed: ${error}`);
              done();
          });
  });

  it("should fetch crypto prices using Axios and update the UI correctly", function (done) {
      const apiURL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";

      // Simulate API Axios request
      axios.get(apiURL)
          .then(response => {
              const cryptoPrices = response.data;

              // Call the student's function
              axiosCryptoPrice();

              // Wait for the DOM update
              setTimeout(() => {
                  const cryptoData = document.getElementById("cryptoData").innerHTML;

                  expect(cryptoData).toContain(`Bitcoin Price: $${cryptoPrices.bitcoin.usd}`);
                  expect(cryptoData).toContain(`Ethereum Price: $${cryptoPrices.ethereum.usd}`);
                  expect(cryptoData).toContain("Fetched using Axios");

                  done();
              }, 2000); // Wait for Axios to complete and update the DOM
          })
          .catch(error => {
              fail(`API Axios request failed: ${error}`);
              done();
          });
  });

});
