// __tests__/editTask.test

import { editTask, inicialize3tasks, verifyUpdatedTaskDesc } from '../__mock__/editTask';

describe('Edit task desription: ', () => {
  inicialize3tasks(); // puts 3 tasks in DOM

  test('should return error message when new task description is invalid', () => {
    expect(editTask('', 0)).toBe('New task decription must not be empty.');
  });

  test('should return error message when index is invalid', () => {
    expect(editTask('mow lawn', -1)).toBe('Index must be between 0 and stored tasks length.');
  });

  test('should return true when index and newDesc are valid', () => {
    expect(editTask('mow lawn', 2)).toBeTruthy(); // changes the li in the DOM
  });

  test('should return true when the newDesc from previous test was updated in the DOM.', () => {
    expect(verifyUpdatedTaskDesc('mow lawn', 2)).toBeTruthy();
  });
});