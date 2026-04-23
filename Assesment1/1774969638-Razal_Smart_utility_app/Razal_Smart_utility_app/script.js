/*
  Student Grade Manager
  - Pure HTML/CSS/Vanilla JS (ES6)
  - Demonstrates ES6, template literals, destructuring, spread/rest,
    pure function, first-class function, higher-order function,
    map/filter/reduce, recursion, OOP, inheritance, and IIFE
*/

(() => {
  'use strict';

  /* =========================
     DOM References
  ========================= */
  const form = document.getElementById('student-form');
  const nameInput = document.getElementById('student-name');
  const gradesInput = document.getElementById('student-grades');
  const formMessage = document.getElementById('form-message');
  const studentsList = document.getElementById('students-list');

  const totalStudentsEl = document.getElementById('total-students');
  const averageGradeEl = document.getElementById('average-grade');
  const highestGradeEl = document.getElementById('highest-grade');
  const lowestGradeEl = document.getElementById('lowest-grade');

  /* =========================
     OOP + Prototypal Inheritance
  ========================= */

  class Person {
    constructor(name) {
      this.name = name;
    }

    getDisplayName() {
      return this.name;
    }
  }

  class Student extends Person {
    constructor(name, grades) {
      super(name);
      this.grades = grades;
    }
  }

  /* =========================
     State
  ========================= */
  const studentStore = [];

  /* =========================
     Functional Helpers
  ========================= */

  const toNumber = (value) => Number(value.trim());

  const isValidGrade = (grade) => Number.isFinite(grade) && grade >= 0 && grade <= 100;

  const parseGrades = (inputValue) => inputValue.split(',').map(toNumber).filter(Number.isFinite);

  const pureAverage = (grades) => {
    if (!grades.length) return 0;
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  };

  const recursiveSum = (grades, index = 0) => {
    if (index >= grades.length) return 0;
    return grades[index] + recursiveSum(grades, index + 1);
  };

  const calculateAverageWithRecursion = (grades) => {
    if (!grades.length) return 0;
    return recursiveSum(grades) / grades.length;
  };

  const withTwoDecimals = (value) => value.toFixed(2);

  const processData = (data, callback) => callback(data);

  const createListFormatter = (separator) => (items) => items.join(separator);

  /* =========================
     First-Class Function Example
  ========================= */
  const messagePrinter = (message, type = 'success') => {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
  };

  /* =========================
     Render Helpers
  ========================= */
  const renderStudents = () => {
    if (!studentStore.length) {
      studentsList.innerHTML = '<p class="empty-state">No students added yet.</p>';
      return;
    }

    const cardsHTML = studentStore
      .map((student, index) => {
        const { name, grades } = student;
        const studentAverage = calculateAverageWithRecursion(grades);

        const listFormatter = createListFormatter(', ');
        const formattedGrades = listFormatter(grades);

        return `
          <article class="student-card">
            <h3>${index + 1}. ${name}</h3>
            <p>Grades: ${formattedGrades}</p>
            <p>Average: ${withTwoDecimals(studentAverage)}</p>
            <button type="button" class="btn btn-delete" data-index="${index}">Delete</button>
          </article>
        `;
      })
      .join('');

    studentsList.innerHTML = cardsHTML;
  };

  const updateSummary = () => {
    const allGrades = studentStore.reduce((accumulator, { grades }) => [...accumulator, ...grades], []);

    const validGrades = allGrades.filter(isValidGrade);

    const totalStudents = studentStore.length;
    const average = processData(validGrades, pureAverage);
    const highest = validGrades.length ? validGrades.reduce((max, grade) => Math.max(max, grade), validGrades[0]) : 0;
    const lowest = validGrades.length ? validGrades.reduce((min, grade) => Math.min(min, grade), validGrades[0]) : 0;

    totalStudentsEl.textContent = String(totalStudents);
    averageGradeEl.textContent = withTwoDecimals(average);
    highestGradeEl.textContent = String(highest);
    lowestGradeEl.textContent = String(lowest);
  };

  const renderAll = () => {
    renderStudents();
    updateSummary();
  };

  const removeStudentByIndex = (indexToRemove) => {
    const validIndex = Number.isInteger(indexToRemove) && indexToRemove >= 0 && indexToRemove < studentStore.length;
    if (!validIndex) return;

    const [removedStudent] = studentStore.splice(indexToRemove, 1);
    renderAll();
    messagePrinter`(${removedStudent.getDisplayName()} removed successfully., 'success')`;
  };

  /* =========================
     Event Handlers
  ========================= */
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const parsedGrades = parseGrades(gradesInput.value);

    if (!name) {
      messagePrinter('Student name is required.', 'error');
      return;
    }

    if (!parsedGrades.length) {
      messagePrinter('Enter at least one valid grade (0-100).', 'error');
      return;
    }

    const invalidGradeExists = parsedGrades.some((grade) => !isValidGrade(grade));
    if (invalidGradeExists) {
      messagePrinter('Grades must be numbers between 0 and 100.', 'error');
      return;
    }

    const student = new Student(name, parsedGrades);
    studentStore.push(student);

    renderAll();
    form.reset();
    messagePrinter`(${student.getDisplayName()} added successfully., 'success')`;
  };

  const handleStudentActions = (event) => {
    const deleteButton = event.target.closest('.btn-delete');
    if (!deleteButton) return;

    const indexValue = Number(deleteButton.dataset.index);
    removeStudentByIndex(indexValue);
  };

  form.addEventListener('submit', handleSubmit);
  studentsList.addEventListener('click', handleStudentActions);

  renderAll();
})();