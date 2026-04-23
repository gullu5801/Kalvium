// ES6 Features Demonstration

// Class with OOP
class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }

  display() {
    return `${this.name} (Priority: ${this.priority})`;
  }
}

// Prototypal Inheritance
function SpecialTask(name, priority, deadline) {
  Task.call(this, name, priority);
  this.deadline = deadline;
}
SpecialTask.prototype = Object.create(Task.prototype);
SpecialTask.prototype.constructor = SpecialTask;

// Pure Function
const calculateAveragePriority = tasks =>
  tasks.length === 0 ? 0 : tasks.reduce((sum, t) => sum + t.priority, 0) / tasks.length;

// Higher-Order Function
const processTasks = (tasks, callback) => callback(tasks);

// Recursion Example: Count tasks
const countTasksRecursive = (tasks, index = 0) => {
  if (index >= tasks.length) return 0;
  return 1 + countTasksRecursive(tasks, index + 1);
};

// IIFE Example
(function() {
  console.log("Task Manager Initialized");
})();

const tasks = [];

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("taskName").value;
  const priority = parseInt(document.getElementById("priority").value);

  const newTask = new Task(name, priority);
  tasks.push(newTask);

  renderTasks();
});

function renderTasks() {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = "";

  tasks.map(task => {
    const li = document.createElement("li");
    li.textContent = task.display();
    taskList.appendChild(li);
  });

  // Using functional programming
  const avgPriority = processTasks(tasks, calculateAveragePriority);
  const totalTasks = countTasksRecursive(tasks);

  document.getElementById("summaryOutput").textContent =
    `Total Tasks: ${totalTasks}, Average Priority: ${avgPriority.toFixed(2)}`;
}