

##  Problem Statement

As a newly hired JavaScript Developer at a HealthTech startup, you are responsible for building a core utility library for a patient analytics dashboard. These utilities will process vital health data such as heart rate, blood pressure, and temperature readings.

To ensure accuracy, reliability, and maintainability, the engineering team enforces **strict functional programming principles**. Your implementations must be:

* ✅ Pure (no side effects)
* ✅ Predictable
* ✅ Reusable
* ✅ Immutable (where required)

---

##  What You Need To Build

Implement the following utility functions in:

```
src/app.js
```

---

##  Tasks

### 1️⃣ `aggregateVitals(vitals, aggregator, initialValue)`

Build a custom function that mimics `Array.prototype.reduce`.

* Takes:

  * `vitals` → array of numbers
  * `aggregator` → callback function
  * `initialValue` → starting value
* Returns a single accumulated result

**Example:**

```js
aggregateVitals([70, 80], (a, b) => a + b, 0) // → 150
```

---

### 2️⃣ `adjustReadings(readings, adjustmentFactor)`

Apply an adjustment factor to each reading.

* Must return a **new array**
* Must NOT mutate the original array

**Example:**

```js
adjustReadings([100, 200], 0.10) // → [110, 220]
```

---

### 3️⃣ `createThresholdChecker(threshold)`

Use closures to create a threshold checker.

* Returns a function
* Returned function checks if value exceeds threshold

**Example:**

```js
const isHigh = createThresholdChecker(100);
isHigh(120); // → true
```

---

### 4️⃣ `flattenPatientData(data)`

Flatten a deeply nested array.

* Must use **recursion**
* ❌ `Array.prototype.flat()` is NOT allowed

**Example:**

```js
flattenPatientData(["HR", ["BP", ["Temp"]]])
// → ["HR", "BP", "Temp"]
```

---

### 5️⃣ `vitalStats` (IIFE Module)

Create an IIFE module exposing:

* `getMaxReading(readings)`
* `getMinReading(readings)`
* `getAverageReading(readings)`

⚠️ Edge Case:

* If array is empty → average should return `0`

---

## 🧪 Test Cases

Your implementation will be validated using **Jasmine tests**.

### Key Behaviors Tested:

* ✅ Custom reduce logic works correctly
* ✅ Functions are pure (no mutation)
* ✅ Closures maintain independent state
* ✅ Recursive flattening works correctly
* ✅ `.flat()` is NOT used
* ✅ IIFE module structure is correct
* ✅ Edge cases (empty arrays) handled properly


---

##  Rules & Constraints

* ❌ Do NOT modify test files
* ❌ Do NOT change function names or parameters
* ❌ Do NOT use `.flat()` in Task 4
* ❌ No console logs in final submission
* ✅ Keep functions pure where required
* ✅ Return new arrays instead of mutating inputs

---

##  Submission Guidelines

1. Implement all functions in `src/app.js`
2. Ensure all Jasmine tests pass
3. Keep code clean and readable
4. Follow functional programming principles

