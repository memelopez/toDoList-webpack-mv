// index.js
import './styles.css';
import Task from './modules/task';
import UI from './modules/ui';
import { validateDescription } from './modules/helpfulFunctions';

const task1 = new Task('wash dishes', 0);
const task2 = new Task('clean room', 1);

const tasks = [];
tasks.push(task1);
tasks.push(task2);

// When content loads
document.addEventListener('DOMContentLoaded', UI.displayTasks());

// Event: when form is submitted
document.querySelector('#addTask').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (validateDescription(taskDescription)) {
    // Add task
    UI.addTask(taskDescription);
  }
  document.querySelector('#taskDesc').value = '';
});