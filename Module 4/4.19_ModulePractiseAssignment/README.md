

Modern applications often allow users to customize their viewing experience. One common accessibility feature is the ability to adjust text size.

In this assignment, you will build a **custom React Hook** called:

```
useTextSizePreference
```

This hook will:

* Manage a text size preference (`"small"` or `"large"`)
* Persist the preference using `localStorage`
* Ensure the preference remains after page refresh
* Update the UI dynamically when toggled

Your goal is to implement this hook and integrate it into the app so that all test cases pass successfully.


##  Learning Objectives

By completing this assignment, you will:

* Understand how to build custom React Hooks
* Use `useState` and `useEffect`
* Work with `localStorage`
* Implement toggle logic
* Connect state to UI
* Write persistence logic



##  Project Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Run tests:

```bash
npm run test:serve
```



##  Files Provided

You are given:

* `src/useTextSizePreference.js` (incomplete – contains TODOs)
* `src/App.jsx`

You must complete the hook implementation.



##  Tasks to Complete

###  Task 1: Load Text Size from LocalStorage

When the hook initializes:

* Check if `localStorage` contains a key called `"textSize"`
* If it exists → use that value
* If it does NOT exist → default to `"small"`

⚠️ This should run only once when the component mounts.


###  Task 2: Implement Toggle Logic

Create a function:

```js
toggleTextSize()
```

It must:

* Switch `"small"` → `"large"`
* Switch `"large"` → `"small"`


###  Task 3: Persist Changes in LocalStorage

Whenever the text size changes:

* Save the updated value to `localStorage`
* Use key name `"textSize"`

This ensures the preference remains after page refresh.


###  Task 4: Reflect Text Size in UI

In `App.jsx`:

* Display:

```
Current text size: Small
```

OR

```
Current text size: Large
```

* Button label must be:

```
Toggle Text Size
```

* Font sizes:

  * `"small"` → 16px
  * `"large"` → 32px



##  Test Cases – Text Size Preference


###  Test Case 1: Load Text Size from LocalStorage

**Purpose:**
Verify that the application loads the saved text size from `localStorage` when it exists.

**Precondition:**
`localStorage` contains:

* Key: `textSize`
* Value: `"large"`

**Expected Behavior:**
When the application renders, it should display:

```
Current text size: Large
```

### Test Case 2: Toggle Text Size on Button Click

**Purpose:**
Verify that clicking the toggle button switches between text sizes.

**Initial Condition:**
`localStorage` is empty.

**Steps & Expected Results:**

1. On first render, the application should display:

   ```
   Current text size: Small
   ```

2. Click the button labeled:

   ```
   Toggle Text Size
   ```

   The application should now display:

   ```
   Current text size: Large
   ```

3. Click the button again.

   The application should display:

   ```
   Current text size: Small
   ```

###  Test Case 3: Persist Text Size in LocalStorage

**Purpose:**
Verify that toggling the text size updates `localStorage`.

**Initial Condition:**
`localStorage` is empty.

**Steps & Expected Results:**

1. Click the **Toggle Text Size** button once.

   * `localStorage.getItem("textSize")` should return:

     ```
     "large"
     ```

2. Click the button again.

   * `localStorage.getItem("textSize")` should return:

     ```
     "small"
     ```


## Note

* The display text must exactly follow this format:

  ```
  Current text size: Small
  Current text size: Large
  ```
* The button label must be:

  ```
  Toggle Text Size
  ```
* The localStorage key must be:

  ```
  textSize
  ```
* Only allowed values:

  ```
  "small"
  "large"
  ```

###  Expected Behavior Example

| Action                     | Result |
| -------------------------- | ------ |
| First load (empty storage) | Small  |
| Click toggle               | Large  |
| Refresh page               | Large  |
| Click toggle               | Small  |


##  Constraints

* Do NOT modify test files
* Do NOT change test strings
* Use key name exactly: `"textSize"`
* Only values allowed: `"small"` and `"large"`


##  Submission Guidelines

Before submitting:

1. Ensure all tests pass:

```bash
npm run test:serve
```

2. Do not add console logs.
3. Do not modify provided test cases.
4. Only edit:

   * `useTextSizePreference.js`
   * (If required) `App.jsx`


