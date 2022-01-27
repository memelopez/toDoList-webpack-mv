const { globaldocument } = require('../dynamic');
const { addElementsToPageFrom } = require('./addtask');

describe('Add tasks to list', () => {
  test('Add new task to list', () => {
    const newArray = [];
    globaldocument.getElementById('input-list').value = 'helotest';
    newArray.push({
      id: Date.now(),
      title: 'helotest',
      completed: false,
      index: newArray.length,
    });
    expect(addElementsToPageFrom(newArray)).toBe('helotest');
  });
  test('Adding a empty input === empty string', () => {
    const newArray = [];
    globaldocument.getElementById('input-list').value = '';
    newArray.push({
      id: Date.now(),
      title: '',
      completed: false,
      index: newArray.length,
    });
    expect(addElementsToPageFrom(newArray)).toBe('');
  });
});
