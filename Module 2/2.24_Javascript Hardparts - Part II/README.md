# Weather Forecast App

## Overview

The **Weather Forecast App** is a project designed to reinforce all the asynchronous programming concepts covered in this module. This project demonstrates various approaches to handling asynchronous operations in JavaScript, including:

- **Callbacks**
- **Promises**
- **Async/Await**
- **Fetch API**
- **Axios**
- **Recursion (with retry mechanism)**

The app simulates fetching weather data for a given city using a pre-implemented mock API function and provides multiple methods to retrieve and display that data.

## Features

- **Simulated API**: Uses a mock function (`fetchWeatherByCity`) to simulate asynchronous weather data fetching.
- **Multiple Asynchronous Patterns**: Implements weather data retrieval using callbacks, promises, async/await, Fetch API, Axios, and recursion.
- **Error Handling**: Demonstrates robust error handling techniques including retries using recursion.
- **Simple UI**: A user-friendly interface that allows you to input a city name and choose the asynchronous method to fetch the weather data.

## Tasks

This project is broken down into the following tasks:

1. **Task 1: Callbacks**
   - Implement `getWeatherWithCallback(city, callback)` by using the pre-implemented `fetchWeatherByCity` function.
   - Use the callback to handle both success (weather data) and error cases.

2. **Task 2: Promises**
   - Implement `getWeatherWithPromise(city)` by wrapping the `fetchWeatherByCity` call inside a Promise.
   - Resolve the promise with the weather data or reject it with an error message.

3. **Task 3: Async/Await**
   - Implement `getWeatherAsync(city)` using async/await.
   - Use a try...catch block to handle errors while awaiting the Promise that wraps the `fetchWeatherByCity` function.

4. **Task 4: Fetch API**
   - Implement `getWeatherWithFetch(city)` using the Fetch API to call a real weather API.
   - Validate the response, parse the JSON, and return a formatted string with the weather details.
   - **Note:** Replace `YOUR_API_KEY` with a valid API key if testing against a real API.

5. **Task 5: Axios**
   - Implement `getWeatherWithAxios(city)` using Axios to fetch weather data from a real API.
   - Format the extracted data into a user-friendly string.
   - **Note:** Replace `YOUR_API_KEY` with a valid API key if testing against a real API.

6. **Task 6: Recursion**
   - Implement `getWeatherWithRecursion(city, retries = 3)` using recursion.
   - If an error occurs and retries remain, recursively retry fetching the data.
   - Reject the promise with an error if all retry attempts fail.

## Technologies Used

- **HTML** for the user interface.
- **CSS** for styling the application.
- **JavaScript** for implementing asynchronous functions.
- **Fetch API** and **Axios** for making HTTP requests.

