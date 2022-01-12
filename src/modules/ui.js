// user interface

import Store from './store';
import Task from './task';

export default class UI {
  static addTask2list(task) {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'app-item d-flex align-items-center px-2';

    // creates div for normal view
    const divNormal = document.createElement('div');
    divNormal.className = 'd-flex flex-row justify-content-between align-items-center normalView';

    const checkbox = document.createElement('input'); // creates checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.isCompleted;
    checkbox.className = 'form-check-label p-0';
    divNormal.appendChild(checkbox); // appends checkbox to item

    const text = document.createElement('p'); // creates p
    text.textContent = task.description;
    text.className = 'm-0 px-3';
    if (task.isCompleted === true) {
      text.classList.add('text-decoration-line-through');
    }
    divNormal.appendChild(text); // appends p to item

    const aEdit = document.createElement('a');
    aEdit.className = 'edtIcn ms-auto';
    const iconEdit = document.createElement('i'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v p-2';
    aEdit.appendChild(iconEdit); // appends edit icon to anchor
    divNormal.appendChild(aEdit); // appends achor to divNormal

    item.appendChild(divNormal);// -- appends divNormal to item

    // Create div for edit view
    const divEdit = document.createElement('div');
    divEdit.className = 'd-none flex-row justify-content-between flex-fill align-items-center py-2 appItemEdit';

    const inputEdit = document.createElement('input');
    inputEdit.setAttribute('type', 'text');
    inputEdit.className = 'form-control border-0 p-0 mx-2';
    inputEdit.value = task.description;

    divEdit.appendChild(inputEdit);

    const aAccept = document.createElement('a');
    aAccept.className = 'ms-auto acceptIcn';
    const iconAccept = document.createElement('i'); // creates accept icon
    iconAccept.className = 'fas fa-check-circle p-2';
    aAccept.appendChild(iconAccept); // appends accept icon to anchor
    divEdit.appendChild(aAccept); // appends accpet anchor to item

    const aRemove = document.createElement('a');
    aRemove.className = 'removeIcn';
    const iconRemove = document.createElement('i'); // creates remove icon
    iconRemove.className = 'fas fa-trash p-2';
    aRemove.appendChild(iconRemove); // appends remove icon to anchor
    divEdit.appendChild(aRemove); // appends remove anchor to item

    item.appendChild(divEdit);// -- appends divEdit to item

    list.appendChild(item); // appends item to list
  }

  static addEmptyToDoMessage() {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'app-item d-flex justify-content-center align-items-center px-2';

    const p = document.createElement('p');
    p.className = 'm-0 p-0 no-to-dos';
    p.textContent = "No to-do's right now";

    item.appendChild(p);
    list.appendChild(item);
  }

  static displayTasks() {
    const list = document.querySelector('#task-list');
    list.innerHTML = '';

    const todos = Store.getTasks();
    if (todos.length === 0) {
      this.addEmptyToDoMessage();
    } else {
      todos.forEach((task) => this.addTask2list(task));
    }
  }

  static addTask(newDescrip) {
    const todos = Store.getTasks();
    const neo = new Task(newDescrip, todos.length);
    todos.push(neo);
    // update indexes
    todos.forEach((todo, index) => { todo.index = index; });
    Store.setTasks(todos);
    // repopulates list
    this.displayTasks();
  }

  static changeLiToEditMode(li) {
    const lisChildren = li.children
    // change clases of divs
    const normalView = lisChildren[0];
    let classesNV = normalView.className;
    classesNV = classesNV.replace('d-flex', 'd-none');
    normalView.className = classesNV;

    const editView = lisChildren[1];
    let classesE = editView.className;
    classesE = classesE.replace('d-none', 'd-flex');
    editView.className = classesE;

    // sets focus con the input to edit
    const inputEdit = editView.querySelector('input');
    inputEdit.id = 'inputEdit';
    inputEdit.focus();
  }

  static removeTask(index) {
    const todos = Store.getTasks();
    todos.splice(index, 1);
    // update indexes
    todos.forEach((todo, index) => { todo.index = index; });
    Store.setTasks(todos);
    // repopulates list
    this.displayTasks();
  }
}