# React Registration Form - Task Guidelines

This form uses `react-hook-form` to handle input validation and form submission. Below is a breakdown of tasks you need to complete, including managing form fields, validating user input, and displaying appropriate error messages.

## Task Breakdown

### 1. **Use `useForm` from `react-hook-form`**

- Initialize `useForm` to manage the form state. This includes:
  - **Registering form fields**: Bind form fields with the `register` method for validation.
  - **Handling form submission**: Ensure form submission is processed using `handleSubmit`, which will only allow submission if all fields are valid.
  - **Accessing errors**: Use the `errors` object to manage and display any validation error messages for the fields.

#### Hint:

Ensure each field has been correctly registered for validation, and errors are properly handled by the form.

### 2. **Create Input Fields**

- Add input fields for:

  - **First Name**
  - **Last Name**
  - **Email**
  - **Password**

  Make sure all fields have validation rules (e.g., required fields, specific patterns) and are registered properly.

#### Hint:

For each input field, use the `register` method to apply validation rules such as `required` or any specific patterns (e.g., valid email, password complexity).

### 3. **Apply Validation Rules**

- Each field must have appropriate validation rules:
  - **First Name**: Required.
  - **Last Name**: Required.
  - **Email**: Required and must match a valid email format.
  - **Password**: Required, must be between 4 and 20 characters, and contain at least one uppercase letter, one lowercase letter, and one number.

### 4. **Display Error Messages**

- If a field doesn't pass validation, display an error message immediately below the input field.

  **Error messages** should be specific to the type of validation error and appear only when the validation fails.

#### Error Messages:

- **First Name**: "First Name is required!"
- **Last Name**: "Last Name is required!"
- **Email**:
  - "Email is required!"
  - "Please enter a valid email address!"
- **Password**:
  - "Password is required!"
  - "Password must be more than 4 characters!"
  - "Password cannot exceed 20 characters!"
  - "Password must contain at least one uppercase, one lowercase letter, and one number!"

### 5. **Handle Form Submission**

- Ensure that the form cannot be submitted until all validation criteria are met.
- Once the form is submitted successfully, display a success message like "Registration successful!"

---

## Key Points to Remember:

- Use `errors.fieldName?.message` to display dynamic validation messages based on the input field errors.
- Form should not proceed with submission if there are any validation errors in the fields.
- Properly bind each input field with the `register` method to ensure that it participates in form validation.

### Success Message:

- Once the form is successfully submitted, display the success message: **"Registration successful!"**
