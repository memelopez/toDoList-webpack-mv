// checkboxes.js

import Store from './store';

// function to change isCompleted value of tasks
const taskCompleted = (position2chage, value) => {
  // Gets list from local storage
  const toDos = Store.getTasks();

  const task2modify = toDos[position2chage];
  task2modify.isCompleted = value;
  toDos[position2chage] = task2modify;

  // Set items to storage
  Store.setTasks(toDos);
};

export default taskCompleted;