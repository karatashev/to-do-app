//DOM
const newTaskInput = document.getElementById('new-task-input');
const addBtn = document.getElementById('new-task-submit');

//alert
const alertMsg = document.querySelector('#alertMsg');





addBtn.addEventListener('click', () => {
  const task = newTaskInput.value;

  let importanceLevel = '';
  if (document.getElementById('slightly-important').checked) {
    importanceLevel = document.getElementById('slightly-important').value;
    console.log(importanceLevel);
  } 
  else if (document.getElementById('important').checked) {
    importanceLevel = document.getElementById('important').value;
    console.log(importanceLevel);
  }
  else  {
    importanceLevel = document.getElementById('very-important').value;
  };

  const tasksList = document.getElementById('tasks');
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');
  taskItem.innerHTML = `
        <div class="task">
          <div class="task-content">
            <input type="text" class="task-text" value="${task}" readonly>
          </div>
        
          <div class="task-buttons">
            <span class="btn-importance-lvl">${importanceLevel}</span>
            <button class="btn-delete">Delete</button>
          </div>
        </div>
      `
      tasksList.appendChild(taskItem);
      newTaskInput.value = ''; 
      importanceLevel = '';
    


  const deleteBtn = document.querySelector('.btn-delete');
      
  deleteBtn.addEventListener('click', () =>  {
    tasksList.removeChild(taskItem);
  });

});



  






