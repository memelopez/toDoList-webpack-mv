// user interface

export default class UI {
  static addTask2list(task) {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'app-item d-flex justify-content-around align-items-center px-2';

    // creates div for normal view
    const divNormal = document.createElement('div');
    divNormal.className = 'd-flex align-items-center normalView';

    const checkbox = document.createElement('input'); // creates checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.isCompleted;
    checkbox.className = 'form-check-label p-0';
    divNormal.appendChild(checkbox); // appends checkbox to item

    const text = document.createElement('p'); // creates p
    text.textContent = task.description;
    text.className = 'm-0 px-3 pb-1';
    if (task.isCompleted === true) {
      text.classList.add('text-decoration-line-through');
    }
    divNormal.appendChild(text); // appends p to item

    // Creates div for icons
    const div4Icons = document.createElement('div');
    div4Icons.className = 'ms-auto';

    const aEdit = document.createElement('a');
    aEdit.className = 'edtIcn';
    const iconEdit = document.createElement('i'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v p-2';
    aEdit.appendChild(iconEdit); // appends edit icon to anchor
    div4Icons.appendChild(aEdit); // appends achor to item

    item.appendChild(divNormal);
    item.appendChild(div4Icons);

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

  static displayTasks(tasks) {
    const list = document.querySelector('#task-list');
    list.innerHTML = '';
    if (tasks.length === 0) {
      this.addEmptyTodDoMessage();
    } else {
      tasks.forEach((task) => this.addTask2list(task));
    }
  }
}