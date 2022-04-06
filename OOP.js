class ListItem {
  element = null;

  taskName = '';
  importance = '';

  taskNameHolder = null;
  importanceIndicator = null;
  deleteBtn = null;

  constructor(taskName, importance, parent) {
    this.taskName = taskName;
    this.importance = importance;

    this.element = document.createElement('div');
    this.element.className = 'task';

    // adding the element to the DOM
    this.render();

    parent.appendChild(this.element);
  }

  render() {
    // do some fixing here, you're getting a parent div with class="task", then another <div class="task"> inside of it
    // in order to fix that, you'll also need to do some fixing in CSS
    this.element.innerHTML = `
      <div class="task">
        <div class="task-content">
          ${this.taskName}
        </div>
      </div>
      <div class="task-buttons">
        <span class="btn-importance-lvl">${this.importance}</span>
        <button class="btn-delete">Delete</button>
      </div>
    `;

    // store #task-content in a variable, so you can easily change its innerText
    this.taskNameHolder = this.element.querySelector('#task-content');
    this.importanceIndicator = this.element.querySelector('.btn-importance-lvl');
    this.deleteBtn = this.element.querySelector('.btn-delete');

    this.deleteBtn.addEventListener('click', this.deleteTask)
  }

  changeTaskName(newName) {
    this.taskName = newName;
    this.taskNameHolder.innerText = newName;
  }

  changeImportance(newImportance) {
    this.importance = newImportance;
    this.importanceIndicator = newImportance;
  }

  // there's some difference between deleteTask() {} and deleteTask = () => {}
  // but we haven't got to that part with our lessons.
  // It needs learning about "this"
  deleteTask = () => {
    this.deleteBtn.removeEventListener('click', this.deleteTask);
    this.element.remove();
  }
}


























// class TaskInput {
//   constructor(input) {
//     this.input = input;
  
//     const newTaskInput = document.getElementById("new-task-input");
//     this.input = newTaskInput.value;
//   }

//   addButton() {
//     const addBtn = document.getElementById('new-task-submit');
//     addBtn.addEventListener(('click', () => {
//       new ListItem('Get up at 7', important, deleteBtn);
//     }));
//     this.render();
//   }
// }


// class ListItem {
//   myListElement = null;

//   constructor(name, importance, deleteBtn) {
//     this.name = name;
//     this.importanceLevel = importance;
//     this.deleteBtn = deleteBtn; 

//     const parent = document.getElementById('tasks');
//     this.myListElement = document.createElement('div');
//     this.myListElement.classList.add('task');
//   }

//   render() {
//     this.myListElement.innerHTML = `
//     <div class="task">
//       <div class="task-content">
//         <input type="text" class="task-text" value="${this.name}" readonly>
//       </div>
//       <div class="task-buttons">
//         <span class="btn-importance-lvl">${this.importance}</span>
//         <button class="btn-delete">Delete</button>
//       </div>
//     </div>
//     `;
//     parent.appendChild(this.myListElement);
//     return this.myListElement;
//   }
// }