// ===============================
//  IIFE (Immediately Invoked Function Expression)
// ===============================
(function () {
    console.log("Smart Task Manager Loaded");
})();


// ===============================
//  OOP Class for Task
// ===============================
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

// ===============================
//  Prototypal Inheritance
// ===============================
function SpecialTask(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}

SpecialTask.prototype = Object.create(Task.prototype);


// ===============================
//  Application State
// ===============================
let tasks = [];


// ===============================
//  PURE FUNCTION (No side effects)
// ===============================
const countCompleted = (arr) => arr.filter(t => t.completed).length;


// ===============================
//  HIGHER-ORDER FUNCTION
// ===============================
const processTasks = (callback) => callback(tasks);


// ===============================
//  RECURSION: count tasks
// ===============================
function recursiveCount(arr, i = 0) {
    if (i === arr.length) return 0;
    return 1 + recursiveCount(arr, i + 1);
}


// ===============================
//  DOM Elements
// ===============================
const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const summary = document.getElementById("summary");


// ===============================
//  Dynamic Rendering Function
// ===============================
function render() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
                ${task.name}
            </span>

            <div>
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">✖</button>
            </div>
        `;

        taskList.appendChild(li);
    });

    updateSummary();
}


// ===============================
//  Update Summary Section
// ===============================
function updateSummary() {
    const total = recursiveCount(tasks);
    const completed = countCompleted(tasks);

    summary.innerHTML = `
        <p>Total Tasks: <b>${total}</b></p>
        <p>Completed: <b>${completed}</b></p>
    `;
}


// ===============================
//  Add Task (Using ES6 features)
// ===============================
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("taskName").value;

    // Create new task (FIXED VERSION)
    let newTask = new Task(name);   // ← CORRECTED

    tasks = [...tasks, newTask]; // Spread Operator

    form.reset();
    render();
});


// ===============================
//  Toggle Task
// ===============================
function toggleTask(index) {
    tasks[index].toggle();
    render();
}


// ===============================
//  Delete Task
// ===============================
function deleteTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
    render();
}