// checkboxes.js

import Store from './store';

// function to change isCompleted value of tasks
const taskCompleted = (position2chage, value, pSib) => {
  // Gets list from local storage
  const toDos = Store.getTasks();

  const task2modify = toDos[position2chage];
  task2modify.isCompleted = value;
  toDos[position2chage] = task2modify;

  // Set items to storage
  Store.setTasks(toDos);

  // change strike through class
  if (value) {
    pSib.classList.add('text-decoration-line-through');
  } else {
    let pClasses = pSib.className;
    pClasses = pClasses.replace('text-decoration-line-through', '');
    pSib.className = pClasses;
  }
};

export default taskCompleted;