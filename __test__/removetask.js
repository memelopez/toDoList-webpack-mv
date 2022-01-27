const { globaldocument } = require('../dynamic');
const forList = globaldocument.getElementById('task');

function addInfoStore(arrayList) {
  window.localStorage.setItem('tasks', JSON.stringify(arrayList));
}

function addElementsToPageFrom(arrayList) {
  forList.innerHTML = ' ';
  arrayList.forEach((task) => {
    const div = document.createElement('div');
    div.className = 'task';
    if (task.completed) {
      div.className = 'task done';
    }
    div.setAttribute('data-id', task.id);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'checked';
    checkbox.appendChild(document.createTextNode(''));
    div.appendChild(checkbox);
    const desc = document.createElement('input');
    desc.setAttribute('value', task.title);
    desc.className = 'desc';
    div.appendChild(desc);
    const span = document.createElement('span');
    span.className = 'del';
    span.id = 'delete';
    span.appendChild(document.createTextNode('Delete'));
    div.appendChild(span);
    desc.addEventListener('change', (e) => {
      task.title = e.target.value;
      addInfoStore(arrayList);
    });
    forList.appendChild(div);
  });
  addInfoStore(arrayList);
  return forList.childElementCount;
}

function deleteTaskWith(taskId) {
  let arrayList = JSON.parse(window.localStorage.getItem('tasks'));
  arrayList = arrayList.filter((task) => task.id !== +taskId);
  addInfoStore(arrayList);
  addElementsToPageFrom(arrayList);
  return arrayList.length;
}
exports.deleteTaskWith = deleteTaskWith;
exports.addElementsToPageFrom = addElementsToPageFrom;
