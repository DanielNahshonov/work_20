Sure! Below is the README in English for the three parts of your project.

---

# Flight Control System

This repository contains three parts: a React frontend for managing flight controls, a backend built with Express and MongoDB for managing student data, and a JavaScript function for counting numbers in a matrix.

## Table of Contents

1. [Airplane React](#airplane-react)
2. [Backend](#backend)
3. [CountNumbers](#countnumbers)

## Airplane React

This is a React application for managing flight controls. The application allows users to view all flights, sort flights, add a new flight, and delete an existing flight.

### Features

- **Login Page**: Allows access with the password `12345`. Any other password will show an error.
- **Control Panel**: Displays various options for managing flights:
  - **All Flights**: Displays all flights in a grid format.
  - **Sort Flights**: Allows sorting flights by airline name and number of passengers.
  - **Add Flight**: Allows adding a new flight with validation.
  - **Delete Flight**: Allows deleting an existing flight by flight number with validation.

### Installation

1. Navigate to the `airplane-react` directory.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.

### Usage

- Navigate to `http://localhost:3000` to access the login page.
- Enter the password `12345` to access the control panel.

### File Structure

- `App.jsx`: Main component managing routes.
- `components/Start.jsx`: Login page component.
- `components/HomePage.jsx`: Control panel component.
- `components/Sort.jsx`: Sort flights component.
- `components/AddFlight.jsx`: Add flight component.
- `components/DeleteFlight.jsx`: Delete flight component.
- `components/Card.jsx`: Flight card component.

## Backend

This is an Express server that interacts with a MongoDB database to manage student data.

### Features

- **GET**: Returns JSON with all students.
- **GET /high-avg**: Returns JSON with students having an average score higher than 74.
- **POST**: Adds a new student if the data is valid and the student does not already exist.
- **PUT**: Updates the average score of an existing student by ID.

### Installation

1. Navigate to the `backend` directory.
2. Run `npm install` to install the dependencies.
3. Set up your MongoDB connection string in a `.env` file.
4. Run `npm start` to start the server.

### Endpoints

- **GET /students**: Fetch all students.
- **GET /students/high-avg**: Fetch students with an average score greater than 74.
- **POST /students**: Add a new student.
- **PUT /students/:id**: Update the average score of a student by ID.

### File Structure

- `server.js`: Main server file.
- `routes/students.js`: Routes for handling student-related requests.
- `models/Student.js`: Mongoose model for student data.

## CountNumbers

This is a JavaScript function that processes a matrix of numbers and returns an array of objects representing each number and its count in the matrix.

### Functionality

- The function takes a matrix of numbers as input.
- It returns an array of objects with each number and its count.
- Throws an error if any value in the matrix is not a number.

### Example

```javascript
const matrix = [
  [1, 1, 2, 4, 1, 1, 7],
  [1, 1, 1, 2, 1, 1, 7],
  [7, 7, 1, 1, 1, 1, 1]
];

const result = countNumbers(matrix);
console.log(result); // [{ num: 1, count: 14 }, { num: 2, count: 2 }, { num: 4, count: 1 }, { num: 7, count: 4 }]
```

### Usage

Include the `countNumbers.js` file in your project and call the `countNumbers` function with a matrix as the argument.

### File Structure

- `countNumbers.js`: Contains the `countNumbers` function.

---

Feel free to reach out if you have any questions or need further assistance!
