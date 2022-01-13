// index.js
import './styles.css';
import UI from './modules/ui';
import validateDescription from './modules/helpfulFunctions';

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

// Event: when icon is clicked to add task
document.querySelector('#clickEnterIcon').addEventListener('click', () => {
  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (validateDescription(taskDescription)) {
    // Add task
    UI.addTask(taskDescription);
  }
  document.querySelector('#taskDesc').value = '';
});

// Event: click anything on task-list
document.querySelector('#task-list').addEventListener('click', (e) => {
  const classesIcn = e.target.parentElement.className;
  const classesArr = classesIcn.split(' ');

  const li = e.target.parentElement.parentElement.parentElement;
  const ulList = document.querySelector('#task-list');
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(li);

  // when the three dots icon gets clicked
  if (classesArr.indexOf('edtIcn') !== -1) {
    UI.changeLiToEditMode(li);
  }

  // when the check icon gets clicked to REMOVE
  if (classesArr.indexOf('removeIcn') !== -1) {
    UI.removeTask(index);
  }

  // when the the trash icon gets clicked to REMOVE
  if (classesArr.indexOf('acceptIcn') !== -1) {
    const newDesc = document.querySelector('#inputEdit').value.trim();
    if (validateDescription(newDesc)) {
      UI.updateTask(index, newDesc);
    }
  }
});

// Event: when checkboxes are clicked
document.querySelector('#task-list').addEventListener('change', (e) => {
  e.preventDefault();
  // checks if this is trigerring for the correct element
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    // Gets the state of the checked checkbox
    const checkboxState = e.target.checked;

    const ulList = document.querySelector('#task-list');
    const itemChecked = e.target.parentElement.parentElement;
    const nodes = Array.from(ulList.children);
    const index = nodes.indexOf(itemChecked);

    UI.taskCompleted(index, checkboxState);
  }
});