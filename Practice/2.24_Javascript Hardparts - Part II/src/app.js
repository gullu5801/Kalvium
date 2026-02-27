// --------------------------------------------------
// Mock API Function (DO NOT MODIFY)
// --------------------------------------------------
function fetchWeatherByCity(city, callback) {
  const weatherData = {
    london: "Cloudy, 18°C",
    newyork: "Sunny, 25°C",
    tokyo: "Rainy, 22°C"
  };

  setTimeout(() => {
    if (weatherData[city.toLowerCase()]) {
      callback(null, weatherData[city.toLowerCase()]);
    } else {
      callback("City not found!", null);
    }
  }, 1000);
}

// --------------------------------------------------
// Task 1: Callbacks
// --------------------------------------------------
/**
 * TODO:
 * Use fetchWeatherByCity to get weather data
 * - On success → callback(null, weather)
 * - On error   → callback(error, null)
 */
function getWeatherWithCallback(city, callback) {
  // TODO: Implement using callbacks
  fetchWeatherByCity(city, (error, weather) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, weather);
    }
  });
}

// --------------------------------------------------
// Task 2: Promises
// --------------------------------------------------
/**
 * TODO:
 * Return a Promise
 * - Resolve with weather data
 * - Reject with error message
 */
function getWeatherWithPromise(city) {
  // TODO: Implement using Promise
  return new Promise((resolve, reject) => {
    fetchWeatherByCity(city, (error, weather) => {
      if (error) {
        reject(error);
      } else {
        resolve(weather);
      }
    });
  });
}

// --------------------------------------------------
// Task 3: Async / Await
// --------------------------------------------------
/**
 * TODO:
 * Use async/await
 * - Await the Promise-based weather function
 * - Throw error if city is invalid
 */
async function getWeatherAsync(city) {
  // TODO: Implement using async/await
  try {
    const weather = await getWeatherWithPromise(city);
    return weather;
  } catch (error) {
    throw error;
  }
}

// --------------------------------------------------
// Task 4: Fetch API
// --------------------------------------------------
/**
 * TODO:
 * Use fetch()
 * - If response.ok is false → reject with "City not found!"
 * - Parse JSON
 * - Return formatted string:
 *   "City: Condition, Temp°C"
 */
function getWeatherWithFetch(city) {
  // TODO: Implement using Fetch API
  return fetch(`https://wttr.in/${city}?format=j1`)
    .then(response => {
      if (!response.ok) {
        throw "City not found!";
      }
      return response.json();
    })
    .then(data => {
      const condition = data.current.condition.text;
      const temp = data.current.temp_c;
      return `${city}: ${condition}, ${temp}°C`;
    })
    .catch(() => {
      throw "City not found!";
    });
}

// --------------------------------------------------
// Task 5: Axios
// --------------------------------------------------
/**
 * TODO:
 * Use axios.get()
 * - Extract required data from response
 * - Return formatted string
 * - Handle error response properly
 */
function getWeatherWithAxios(city) {
  // TODO: Implement using Axios
    return axios
      .get(`https://wttr.in/${city}?format=j1`)
      .then(response => {
        const data = response.data;
        const condition = data.current.condition.text;
        const temp = data.current.temp_c;
        return `${city}: ${condition}, ${temp}°C`;
      })
      .catch(error => {
        if (error.response &&
            error.response.data &&
            error.response.data.error &&
            error.response.data.error.message) {
          throw error.response.data.error.message;
        }
        throw "City not found!";
      });
}

// --------------------------------------------------
// Task 6: Recursion with Retry
// --------------------------------------------------
/**
 * TODO:
 * Use recursion to retry fetching weather
 * - retries default = 3
 * - If success → resolve
 * - If error & retries left → retry
 * - If retries exhausted → reject with error
 */
function getWeatherWithRecursion(city, retries = 3) {
  // TODO: Implement recursion-based retry logic
  return new Promise((resolve, reject) => {
    fetchWeatherByCity(city, (error, weather) => {
      if (!error) {
        resolve(weather);
      } else {
        if (retries > 0) {
          resolve(getWeatherWithRecursion(city, retries - 1));
        } else {
          reject(error);
        }
      }
    });
  });
}

// --------------------------------------------------
// UI Interaction Handlers (DO NOT MODIFY)
// --------------------------------------------------
function handleCallbackRequest() {
  const city = document.getElementById("cityInput").value.trim();
  getWeatherWithCallback(city, (error, weather) => {
    displayResult(error, weather);
  });
}

function handlePromiseRequest() {
  const city = document.getElementById("cityInput").value.trim();
  getWeatherWithPromise(city)
    .then(weather => displayResult(null, weather))
    .catch(error => displayResult(error, null));
}

async function handleAsyncRequest() {
  const city = document.getElementById("cityInput").value.trim();
  try {
    const weather = await getWeatherAsync(city);
    displayResult(null, weather);
  } catch (error) {
    displayResult(error, null);
  }
}

function handleFetchRequest() {
  const city = document.getElementById("cityInput").value.trim();
  getWeatherWithFetch(city)
    .then(weather => displayResult(null, weather))
    .catch(error => displayResult(error, null));
}

function handleAxiosRequest() {
  const city = document.getElementById("cityInput").value.trim();
  getWeatherWithAxios(city)
    .then(weather => displayResult(null, weather))
    .catch(error => displayResult(error, null));
}

function handleRecursiveRequest() {
  const city = document.getElementById("cityInput").value.trim();
  getWeatherWithRecursion(city)
    .then(weather => displayResult(null, weather))
    .catch(error => displayResult(error, null));
}

// --------------------------------------------------
// Display Helper (DO NOT MODIFY)
// --------------------------------------------------
function displayResult(error, weather) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = error
    ? `<span style="color: red;">${error}</span>`
    : `<span>${weather}</span>`;
}
