//DOM
const newTaskInput = document.getElementById("new-task-input");
const addBtn = document.getElementById("new-task-submit");

//alert
const alertMsg = document.querySelector("#alertMsg");

// tasks container
const tasksList = document.getElementById("tasks");

addBtn.addEventListener("click", () => {
  const taskName = newTaskInput.value;

  if (taskName === "") {
    alertMsg.innerText = "You must write the name of the task!";
    alertMsg.classList.add("visible");

    return;
  }

  alertMsg.classList.remove("visible");

  // immediately turn it into an Array, so that you can use Array methods on it, like .find(), .some(), .all() etc.
  const allRadioOptions = Array.from(document.querySelectorAll('[type="radio"][name="important"]'));

  // then find the radio whose "checked" property is set to true
  const importanceSelection = allRadioOptions.find((radio, i) => {
    return radio.checked === true;
  }).value;

  // you're creating the task item here
  new ListItem(taskName, importanceSelection, tasksList);

  newTaskInput.value = "";

  return;
});
