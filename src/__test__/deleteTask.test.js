// __tests__/addTask.test
import deleteTask from '../__mock__/deleteTask';
import { addNewTask, getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Delete task from DOM list and storage:', () => {
  test('test should return false when index is less than zero', () => {
    expect(deleteTask(-1)).toBeFalsy();
  });

  test("test should return false when index is greater than length of stored ToDo's", () => {
    expect(deleteTask(3)).toBeFalsy();
  });

  test("test should return true when index is from 0 to length of stored ToDo's", () => {
    addNewTask('do laudry');
    addNewTask('walk dog');
    expect(deleteTask(1)).toBeTruthy();
  });

  test('test should return the amount of tasks in DOM.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(1);
  });
});