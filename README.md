# Signup Form with Validation ✅

A clean and functional **React Signup Form** with basic validation and success feedback.

## ✨ Features

- Controlled form inputs (Name, Email, Password)
- Field-level validation (shows error only after the field is touched)
- Required field checks
- Success message after successful submission
- Clear button to reset the form
- Form resets automatically after successful submit

## 🖼️ Preview

- Empty fields show red error messages after being touched or on submit
- Successful submission shows a green success message
- Form clears after successful submit

## 🚀 How to Run

1. Create a React project (or use an existing one)
2. Replace the content of `App.js` (or `App.jsx`) with the provided code
3. Start the development server:

bash
npm start
# or
npm run dev

## 🛠️ Tech Stack

React (Functional Component + useState)
Inline CSS

## 🎯 How It Works

form state holds the current input values
touched state tracks which fields the user has interacted with
Errors only appear after a field is blurred or when the form is submitted
On successful submit, a success message is shown and the form is reset
Clear button resets both form data and validation state
