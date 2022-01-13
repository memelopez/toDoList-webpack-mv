// helper functions

import Store from './store';
import returnsUncompleted from './returnsUncompleted';

// function to help validate input
const validateDescription = (text) => {
  if (text === null || text === '') {
    return false;
  }
  return true;
};

const clearCompleted = () => {
  // gets todos from local storage
  const tasks = Store.getTasks();
  // create new array from filter()
  const uncompletedTasks = tasks.filter(returnsUncompleted);
  // updates indexes
  uncompletedTasks.forEach((todo, index) => { todo.index = index; });

  Store.setTasks(uncompletedTasks);
};

export { validateDescription, clearCompleted };