/**
 * Health Analytics Utility Toolkit
 *
 * Instructions:
 * 1. Implement all functions below as per requirements.
 * 2. DO NOT change function names or parameters.
 * 3. Keep functions pure where specified (no mutations).
 * 4. Avoid using restricted methods where mentioned.
 * 5. Your goal is to pass all Jasmine test cases.
 */


/* =====================================================
   Task 1: aggregateVitals
   ===================================================== */
/**
 * Build a custom reduce-like function.
 *
 * @param {Array} vitals - array of numbers
 * @param {Function} aggregator - callback(accumulator, currentValue)
 * @param {*} initialValue - starting value
 * @returns {*} final accumulated result
 *
 * TODO:
 * - Loop through the array
 * - Apply aggregator on each element
 * - Return final accumulated value
 */
function aggregateVitals(vitals, aggregator, initialValue) {

  // TODO: implement
  let accumulator = initialValue;

  for (let i = 0; i < vitals.length; i++) {
    accumulator = aggregator(accumulator, vitals[i]);
  }

  return accumulator;

}



/* =====================================================
   Task 2: adjustReadings
   ===================================================== */
/**
 * Adjust each reading by a given factor.
 *
 * @param {Array} readings - array of numbers
 * @param {number} adjustmentFactor - e.g., 0.10 for +10%
 * @returns {Array} new adjusted array
 *
 * TODO:
 * - Return a NEW array
 * - Do NOT mutate the original array
 * - Each value should be increased by (value * adjustmentFactor)
 */
function adjustReadings(readings, adjustmentFactor) {

  // TODO: implement
  return readings.map(function (reading) {
    return reading + (reading * adjustmentFactor);
  });
}



/* =====================================================
   Task 3: createThresholdChecker
   ===================================================== */
/**
 * Create a closure-based threshold checker.
 *
 * @param {number} threshold
 * @returns {Function} function that takes value and returns true/false
 *
 * TODO:
 * - Return a function
 * - Inner function should compare value > threshold
 */
function createThresholdChecker(threshold) {

  // TODO: implement
  return function (value) {
    return value > threshold;
  };

}



/* =====================================================
   Task 4: flattenPatientData
   ===================================================== */
/**
 * Flatten a deeply nested array using recursion.
 *
 * @param {Array} data - nested array
 * @returns {Array} flattened array
 *
 * TODO:
 * - Use recursion
 * - Handle nested arrays
 * - DO NOT use Array.prototype.flat()
 */
function flattenPatientData(data) {

  // TODO: implement
  let result = [];

  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      result = result.concat(flattenPatientData(data[i]));
    } else {
      result.push(data[i]);
    }
  }

  return result;
}



/* =====================================================
   Task 5: vitalStats (IIFE Module)
   ===================================================== */
/**
 * Create an IIFE module that exposes:
 * - getMaxReading
 * - getMinReading
 * - getAverageReading
 *
 * TODO:
 * - Use an IIFE
 * - Return an object with 3 methods
 * - Handle edge case: average of empty array should return 0
 */
const vitalStats = (function () {

  function getMaxReading(readings) {


    // TODO: implement
    return Math.max(...readings);
  }

  function getMinReading(readings) {

    // TODO: implement
    return Math.min(...readings);
  }

  function getAverageReading(readings) {

    // TODO: implement
    if (readings.length === 0) {
      return 0;
    }

    let sum = 0;

    for (let i = 0; i < readings.length; i++) {
      sum += readings[i];
    }

    return sum / readings.length;
  }

  return {
    getMaxReading,
    getMinReading,
    getAverageReading
  };

})();