describe("Weather Forecast Functions", function() {

  describe("getWeatherWithCallback", function() {
      it("1. should return weather data for a valid city", function(done) {
          getWeatherWithCallback("london", function(error, weather) {
              expect(error).toBeNull();
              expect(weather).toBe("Cloudy, 18°C");
              done();
          });
      });

      it("2. should return an error for an invalid city", function(done) {
          getWeatherWithCallback("unknownCity", function(error, weather) {
              expect(error).toBe("City not found!");
              expect(weather).toBeNull();
              done();
          });
      });
  });

  describe("getWeatherWithPromise", function() {
      it("should resolve with weather data for a valid city(already implemented)", function(done) {
          getWeatherWithPromise("newyork")
              .then(function(weather) {
                  expect(weather).toBe("Sunny, 25°C");
                  done();
              })
              .catch(function() {
                  fail("Promise should not be rejected");
                  done();
              });
      });

      it("should reject with an error for an invalid city(This is already done)", function(done) {
          getWeatherWithPromise("mars")
              .then(function() {
                  fail("Promise should not be resolved");
                  done();
              })
              .catch(function(error) {
                  expect(error).toBe("City not found!");
                  done();
              });
      });
  });

  describe("getWeatherAsync", function() {
      it("3. should return weather data for a valid city using async/await", async function() {
          const weather = await getWeatherAsync("tokyo");
          expect(weather).toBe("Rainy, 22°C");
      });

      it("should throw an error for an invalid city using async/await", async function() {
          try {
              await getWeatherAsync("pluto");
              fail("Error should have been thrown");
          } catch (error) {
              expect(error).toBe("City not found!");
          }
      });
  });

  describe("getWeatherWithFetch", function() {
      it("4. should fetch weather data for a valid city", function(done) {
          spyOn(window, 'fetch').and.returnValue(Promise.resolve({
              ok: true,
              json: () => Promise.resolve({
                  location: { name: "Paris" },
                  current: { condition: { text: "Clear" }, temp_c: 20 }
              })
          }));

          getWeatherWithFetch("Paris")
              .then(function(weather) {
                  expect(weather).toBe("Paris: Clear, 20°C");
                  done();
              })
              .catch(function() {
                  fail("Fetch should not fail for a valid city");
                  done();
              });
      });

      it("5. should return an error for an invalid city", function(done) {
          spyOn(window, 'fetch').and.returnValue(Promise.resolve({
              ok: false
          }));

          getWeatherWithFetch("UnknownCity")
              .then(function() {
                  fail("Promise should not be resolved");
                  done();
              })
              .catch(function(error) {
                  expect(error).toBe("City not found!");
                  done();
              });
      });
  });

  describe("getWeatherWithAxios", function() {
      it("6. should fetch weather data for a valid city using Axios", function(done) {
          spyOn(axios, 'get').and.returnValue(Promise.resolve({
              data: {
                  location: { name: "Berlin" },
                  current: { condition: { text: "Foggy" }, temp_c: 15 }
              }
          }));

          getWeatherWithAxios("Berlin")
              .then(function(weather) {
                  expect(weather).toBe("Berlin: Foggy, 15°C");
                  done();
              })
              .catch(function() {
                  fail("Axios request should not fail for a valid city");
                  done();
              });
      });

      it("7. should return an error for an invalid city using Axios", function(done) {
          spyOn(axios, 'get').and.returnValue(Promise.reject({
              response: { data: { error: { message: "City not found!" } } }
          }));

          getWeatherWithAxios("UnknownCity")
              .then(function() {
                  fail("Promise should not be resolved");
                  done();
              })
              .catch(function(error) {
                  expect(error).toBe("City not found!");
                  done();
              });
      });
  });

  describe("getWeatherWithRecursion", function() {
      it("8. should retry and return weather data for a valid city", function(done) {
          let callCount = 0;
          spyOn(window, 'fetchWeatherByCity').and.callFake((city, callback) => {
              callCount++;
              if (callCount < 2) {
                  return callback("Temporary error", null);
              }
              return callback(null, "Partly Cloudy, 19°C");
          });

          getWeatherWithRecursion("london")
              .then(function(weather) {
                  expect(weather).toBe("Partly Cloudy, 19°C");
                  expect(callCount).toBe(2);
                  done();
              })
              .catch(function() {
                  fail("Recursive function should eventually succeed");
                  done();
              });
      });

      it("9. should fail after maximum retries", function(done) {
          spyOn(window, 'fetchWeatherByCity').and.callFake((city, callback) => {
              return callback("Temporary error", null);
          });

          getWeatherWithRecursion("mars", 3)
              .then(function() {
                  fail("Promise should not be resolved");
                  done();
              })
              .catch(function(error) {
                  expect(error).toBe("Temporary error");
                  done();
              });
      });
  });

});
