// __tests__/addTask.test
import { addNewTask, getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Add task to list and storage:', () => {
  test("test if description is invalid with ''.", () => {
    expect(addNewTask('')).toBeFalsy();
  });
  test('test if new task has been stored.', () => {
    expect(addNewTask('wash car')).toBeTruthy();
  });
  test('test if new task has been added to DOM.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(1);
  });
});
