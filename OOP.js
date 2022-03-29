class ListItem {
  myTask = null;
  taskName = document.getElementById("new-task-input").value;

  constructor(taskName) {
    const toDoList = document.getElementById('tasks');
    this.myTask = document.createElement('div');
    
    this.element = task;
    this.update(taskName)
    myTask.innerHTML = `
      <div class="task">
        <div class="task-content">
          <input type="text" class="task-text" value="${taskName}" readonly>
        </div>
  
        <div class="task-buttons">
          <span class="btn-importance-lvl">Importance</span>
          <button class="btn-delete">Delete</button>
        </div>
      </div>`
      toDoList.appendChild(this.element);
      const addBtn = document.querySelector('.btn-delete');
      addBtn.addEventListener('click', () => {
        new ListItem(this.taskName);
        console.log(addBtn);
      })
  }

  addTask() {

  }

  update(taskName) {
    this.myTask.innerHTML = taskName;
  }

  getTaskName() {
    return this.myTask.innerHTML;
  }
  removeTask() {
    this.taskName.remove();
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