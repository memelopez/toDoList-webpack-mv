// index.js
import './styles.css';
import Task from './modules/task';
import UI from './modules/ui';

const task1 = new Task('wash dishes', 0);
const task2 = new Task('clean room', 1);

const tasks = [];
tasks.push(task1);
tasks.push(task2);

// When content loads
document.addEventListener('DOMContentLoaded', UI.displayTasks(tasks));