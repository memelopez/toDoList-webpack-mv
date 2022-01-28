// __tests__/addTask.test
import deleteTask from '../__mock__/deleteTask';
import { getAmountOfTaskFromDOM } from '../__mock__/addTask';
import { inicialize3tasks } from '../__mock__/editTask';

describe('Delete task from DOM list and storage:', () => {
  test('test should return false when index is less than zero', () => {
    expect(deleteTask(-1)).toBeFalsy();
  });

  test("test should return false when index is greater than length of stored ToDo's", () => {
    expect(deleteTask(3)).toBeFalsy();
  });

  inicialize3tasks(); // in the DOM
  test("test should return true when index is from 0 to length of stored ToDo's", () => {
    expect(deleteTask(1)).toBeTruthy();
  });

  test('test should return the amount of tasks in DOM.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(2);
  });
});