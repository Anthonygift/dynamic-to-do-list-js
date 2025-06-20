// Select DOM elements
const addButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Define the function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.className = 'remove-btn';

  // Remove the task when the button is clicked
  removeButton.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(removeButton);
  taskList.appendChild(li);

  taskInput.value = ''; // Clear the input field
}

// Add task when button is clicked
addButton.addEventListener('click', addTask);

// Add task when Enter key is pressed
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
