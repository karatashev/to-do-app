//DOM
const newTaskInput = document.getElementById('new-task-input');
const addBtn = document.getElementById('new-task-submit');

//alert
const alertMsg = document.querySelector('#alertMsg');


addBtn.addEventListener('click', () => {
  const task = newTaskInput.value;

  
  if (task === '') {
    alertMsg.innerText = 'You must write the name of the task!';
    alertMsg.style.visibility = 'visible';
    return;
  }

  alertMsg.style.visibility = 'hidden';
  
  // simplier way to select the input value
  let importanceLevel = document.querySelector('input[name="important"]:checked').value;
  console.log(importanceLevel);
  // if (document.getElementById('slightly-important').checked) {
  //   importanceLevel = document.getElementById('slightly-important').value;
  // } 
  // else if (document.getElementById('important').checked) {
  //   importanceLevel = document.getElementById('important').value;
  // }
  // else  {
  //   importanceLevel = document.getElementById('very-important').value;
  // };


  //select the task list and create Task
  const tasksList = document.getElementById('tasks');
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');
  taskItem.innerHTML = `
        <div class="task">
          <div class="task-content">
            <input type="text" class="task-text" value="${task}" readonly>
          </div>
        `
  //add task buttons to the Task
  const taskButtons = document.createElement('div');
  taskButtons.classList.add('task-buttons');
  taskItem.appendChild(taskButtons);

  //add importance span info to the taks buttons
  const taskImportance = document.createElement('span');
  taskImportance.classList.add('btn-importance-lvl');
  taskImportance.innerText = importanceLevel;
  taskButtons.appendChild(taskImportance);

  //create a delete button to start listening clicks
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('btn-delete');
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', () =>  {
    tasksList.removeChild(taskItem);
  });

  //add delete button to the task buttons
  taskButtons.appendChild(deleteBtn);

      newTaskInput.value = ''; 
  
  // add the whole Task to the Task List
  tasksList.appendChild(taskItem);

});



  






